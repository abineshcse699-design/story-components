import {deburr} from './deburr';

/**
 * Normalizes a string by removing diacritics, converting to lowercase, and trimming whitespace.
 * @param value
 */
export function normalizeString (value: string): string {
  return deburr(value)
    .toLowerCase()
    .trim();
}
