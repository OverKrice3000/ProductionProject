type Mods = Record<string, boolean>

export function classNames(cls: string, mods: Mods, adds: string[]): string{
    return `${cls} ${adds.join(" ")} ${Object.entries(mods).filter((entry) => entry[1]).map((entry) => entry[0]).join("")}`;
}