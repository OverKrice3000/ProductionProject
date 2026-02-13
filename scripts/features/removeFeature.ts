import { Project, ts } from "ts-morph";
import SyntaxKind = ts.SyntaxKind;
import * as process from "node:process";

import type { Node } from "ts-morph";

const removedFeatureName = process.argv[2];
const featureState = process.argv[3];

if (!removedFeatureName) {
  throw new Error(`Pass feature name as first argument`);
}

if (!featureState || (featureState !== `on` && featureState !== `off`)) {
  throw new Error(`Pass on/off as second argument`);
}

const project = new Project({});
project.addSourceFilesAtPaths(`src/**/*.ts`);
project.addSourceFilesAtPaths(`src/**/*.tsx`);

const files = project.getSourceFiles();

const isToggleFunction = (node: Node) => {
  let isToggleFeature = false;

  node.forEachChild((child) => {
    if (
      child.isKind(SyntaxKind.Identifier) &&
      child.getText() === `toggleFeatures`
    ) {
      isToggleFeature = true;
    }
  });

  return isToggleFeature;
};

files.forEach((file) => {
  file.forEachDescendant((node) => {
    if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
      const objectOptions = node.getFirstDescendantByKind(
        SyntaxKind.ObjectLiteralExpression,
      );

      if (!objectOptions) {
        return;
      }

      const onProperty = objectOptions.getProperty(`on`);
      const offProperty = objectOptions.getProperty(`off`);
      const nameProperty = objectOptions.getProperty(`name`);

      const onFunction = onProperty?.getFirstDescendantByKind(
        SyntaxKind.ArrowFunction,
      );
      const offFunction = offProperty?.getFirstDescendantByKind(
        SyntaxKind.ArrowFunction,
      );
      const featureName = nameProperty
        ?.getFirstDescendantByKind(SyntaxKind.NoSubstitutionTemplateLiteral)
        ?.getText()
        .slice(1, -1);

      if (featureName !== removedFeatureName) {
        return;
      }

      if (featureState === `off`) {
        node.replaceWithText(offFunction?.getBody().getText() ?? ``);
      } else if (featureState === `on`) {
        node.replaceWithText(onFunction?.getBody().getText() ?? ``);
      }
    }
  });
});

project.save();
