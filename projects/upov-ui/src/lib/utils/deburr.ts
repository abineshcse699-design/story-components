/**
 * Removes diacritical marks (accents) from a string.
 * @param value
 */
export function deburr(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}
