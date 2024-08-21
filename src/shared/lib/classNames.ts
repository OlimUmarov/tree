export type ModsType = Record<string, boolean | string | undefined>;

export function classNames(
  className: string,
  mods: ModsType = {},
  additional: Array<string | undefined> = [],
): string {
  return [
    className,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([cls]) => cls),
  ].join(' ');
}
