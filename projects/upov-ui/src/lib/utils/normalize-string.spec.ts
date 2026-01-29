import { normalizeString } from './normalize-string';

describe('normalizeString', () => {
  it('should normalize a simple string by converting to lowercase', () => {
    const result = normalizeString('HELLO WORLD');
    expect(result).toBe('hello world');
  });

  it('should remove diacritical marks (accents)', () => {
    const result = normalizeString('café');
    expect(result).toBe('cafe');
  });

  it('should trim whitespace from beginning and end', () => {
    const result = normalizeString('  hello world  ');
    expect(result).toBe('hello world');
  });

  it('should handle empty string', () => {
    const result = normalizeString('');
    expect(result).toBe('');
  });

  it('should handle string with only whitespace', () => {
    const result = normalizeString('   ');
    expect(result).toBe('');
  });

  it('should preserve internal spaces', () => {
    const result = normalizeString('hello   world');
    expect(result).toBe('hello   world');
  });
});
