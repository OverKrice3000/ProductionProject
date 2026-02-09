import { Project } from 'ts-morph';
import path from 'path';

const project = new Project({});
project.addSourceFilesAtPaths(`src/**/*.ts`);
project.addSourceFilesAtPaths(`src/**/*.tsx`);

const layers = [`app`, `shared`, `entities`, `features`, `widgets`, `pages`];
function isAbsoluteImport (path: string) {
  return (layers.some((layer) => path.startsWith(layer)));
}

const files = project.getSourceFiles();

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

files.forEach((file) => {
  const imports = file.getImportDeclarations();

  imports.forEach((importNode) => {
    const value = importNode.getModuleSpecifierValue();
    const valueWithoutAlias = value.replace(`@/`, ``);

    const segments = valueWithoutAlias.split(`/`);

    const isSharedLayer = segments?.[0] === `shared`;
    const isUiSlice = segments?.[1] === `ui`;

    if (value && isAbsoluteImport(valueWithoutAlias) && isSharedLayer && isUiSlice) {
      const result = valueWithoutAlias.split(`/`).slice(0, 3).join(`/`);
      importNode.setModuleSpecifier(`@/${result}`);
    }
  });
});

project.save();
