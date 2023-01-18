import { classNames } from "./classNames";

describe(`classNames`, () => {
  test(`main class only`, () => {
    const mainClass = `testClass`;
    const classesReceived = classNames(mainClass).split(` `);
    expect(classesReceived).toContain(mainClass);
  });

  test(`main and additional classes`, () => {
    const mainClass = `testClass`;
    const addClasses = [`red`, `large`];
    const classesReceived = classNames(mainClass, {}, addClasses).split(` `);
    const classesExpected = [mainClass, ...addClasses];
    classesExpected.forEach((cls) => {
      expect(classesReceived).toContain(cls);
    });
  });

  test(`main, additional classes with modifiers`, () => {
    const mainClass = `testClass`;
    const addClasses = [`red`, `large`];
    const modifiers = {
      visible: true,
      highlight: false,
    };
    const modifiersClasses = Object.keys(modifiers).filter((mod) => modifiers[mod as keyof typeof modifiers]);
    const classesReceived = classNames(mainClass, modifiers, addClasses).split(` `);
    const classesExpected = [mainClass, ...addClasses, ...modifiersClasses];
    classesExpected.forEach((cls) => {
      expect(classesReceived).toContain(cls);
    });
  });
});
