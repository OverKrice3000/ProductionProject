import { Project } from 'ts-morph';

const project = new Project({});
project.addSourceFilesAtPaths(`src/**/*.ts`);
project.addSourceFilesAtPaths(`src/**/*.tsx`);

const files = project.getSourceFiles();

const layers = [`app`, `shared`, `entities`, `features`, `widgets`, `pages`];
function isAbsoluteImport (path: string) {
  return (layers.some((layer) => path.startsWith(layer)));
}

files.forEach((file) => {
  const imports = file.getExportDeclarations();

  imports.forEach((importNode) => {
    const value = importNode.getModuleSpecifierValue();

    if (value && isAbsoluteImport(value)) {
      importNode.setModuleSpecifier(`@/${value}`);
    }
  });
});

project.save();
