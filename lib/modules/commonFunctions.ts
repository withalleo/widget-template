export function isTransparent(color: string): boolean {
    // Note: also returns true if color is undefined or empty.
    color = color.trim().toLowerCase().replace(/\s/g, '').replace(';', '')
    return !color || color === 'transparent' || (color.substring(0, 5) === 'rgba(' && color.substring(color.length - 3) === ',0)')
}

export function randomInt(min: number, max: number): number {
    if (min > max) throw new Error('randomInt: the minimum for the random was larger than the maximum')
    if (min < 0 || max < 0) throw new Error('randomInt: cannot handle negative numbers as min or max')
    min = Math.floor(min)
    max = Math.floor(max)
    const range = max - min + 1
    if (range > Math.pow(2, 32)) throw new Error('randomInt: range too large')
    const randomBytes = new Uint32Array(1)
    crypto.getRandomValues(randomBytes)
    return min + (randomBytes[0] % range)
}

export async function waitUntilDomUpdates(): Promise<void> {
    return new Promise((resolve) => {
        requestAnimationFrame(() => {
            setTimeout(() => {
                resolve()
            }, 0)
        })
    })
}
