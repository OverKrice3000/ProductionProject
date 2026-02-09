import { Project } from 'ts-morph';
import path from 'path';

const project = new Project({});
project.addSourceFilesAtPaths(`src/**/*.ts`);
project.addSourceFilesAtPaths(`src/**/*.tsx`);

const sharedUiPath = path.resolve(__dirname, `..`, `..`, `src`, `shared`, `ui`);
const sharedUiDirectory = project.getDirectory(sharedUiPath);
const componentsDirs = sharedUiDirectory?.getDirectories();

componentsDirs?.forEach((directory) => {
  const indexPath = directory.getPath() + `/index.ts`;
  const indexFile = directory.getSourceFile(indexPath);

  if (!indexFile) {
    const sourceCode = `export * from './${directory.getBaseName()}'`;
    const file = directory.createSourceFile(`index.ts`, sourceCode);

    file.save();
  }
});

project.save();
