type Mods = Record<string, boolean>;

export function classNames (cls: string, mods: Mods = {}, adds: Array<string | undefined> = []): string {
  return `${cls} ${adds.filter((cls) => Boolean(cls)).join(` `)} ${Object.entries(mods).filter((entry) => Boolean(entry[1])).map((entry) => entry[0]).join(` `)}`;
}
