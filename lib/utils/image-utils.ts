/**
 * Ensures an image source is never an empty string
 * @param src The image source
 * @param fallback Optional fallback image
 * @returns A valid image source or null
 */
export function getSafeImageSrc(src: string | undefined | null, fallback = "/placeholder.svg"): string {
  if (!src || src === "") {
    return fallback
  }
  return src
}
