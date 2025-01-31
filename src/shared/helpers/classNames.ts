export const classNames = (className: string, mods: Record<string, boolean> = {}, additional: string[] = []): string => {
    return [
        className,
        ...Object.keys(mods).filter((mod) => mods[mod]),
        ...additional.filter(Boolean)
    ].join(' ')
}