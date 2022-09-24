export function classNames(main: string, cls: Record<string, boolean>, adds: string[]): string{
    return `${main} ${adds.join(" ")} ${Object.entries(cls).filter((entry) => entry[1]).map((entry) => entry[0]).join("")}`;
}