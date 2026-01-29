/**
 * Convert a string to kebab-case.
 * @param str
 */
export function toKebabCase(str: string): string {
  return str
    // Insert hyphen between consecutive uppercase letters followed by lowercase (e.g., HTTPSConnection -> HTTPS-Connection)
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    // Replace camelCase with camel-case
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    // Replace spaces, underscores, or multiple hyphens with a single hyphen
    .replace(/[\s_]+/g, '-')
    // Remove leading and trailing hyphens
    .replace(/^-+|-+$/g, '')
    // Convert to lowercase
    .toLowerCase();
}
