import {describe, expect, it} from 'vitest';
import {toKebabCase} from './to-kebab-case';

describe('toKebabCase', () => {
  it('should convert camelCase to kebab-case', () => {
    expect(toKebabCase('camelCase')).toBe('camel-case');
    expect(toKebabCase('myVariableName')).toBe('my-variable-name');
  });

  it('should convert PascalCase to kebab-case', () => {
    expect(toKebabCase('PascalCase')).toBe('pascal-case');
    expect(toKebabCase('MyComponentName')).toBe('my-component-name');
  });

  it('should convert spaces to hyphens', () => {
    expect(toKebabCase('hello world')).toBe('hello-world');
    expect(toKebabCase('my component name')).toBe('my-component-name');
  });

  it('should convert underscores to hyphens', () => {
    expect(toKebabCase('snake_case')).toBe('snake-case');
    expect(toKebabCase('my_variable_name')).toBe('my-variable-name');
  });

  it('should handle mixed case with spaces and underscores', () => {
    expect(toKebabCase('MyComponent Name')).toBe('my-component-name');
    expect(toKebabCase('my_Variable Name')).toBe('my-variable-name');
    expect(toKebabCase('Mix_Of Everything')).toBe('mix-of-everything');
  });

  it('should handle multiple consecutive spaces', () => {
    expect(toKebabCase('hello   world')).toBe('hello-world');
    expect(toKebabCase('multiple    spaces')).toBe('multiple-spaces');
  });

  it('should handle multiple consecutive underscores', () => {
    expect(toKebabCase('hello___world')).toBe('hello-world');
    expect(toKebabCase('multiple____underscores')).toBe('multiple-underscores');
  });

  it('should handle strings with numbers', () => {
    expect(toKebabCase('version2Update')).toBe('version2-update');
    expect(toKebabCase('test123Value')).toBe('test123-value');
    expect(toKebabCase('myVar1Name2')).toBe('my-var1-name2');
  });

  it('should handle already kebab-case strings', () => {
    expect(toKebabCase('already-kebab-case')).toBe('already-kebab-case');
    expect(toKebabCase('my-component')).toBe('my-component');
  });

  it('should handle single word strings', () => {
    expect(toKebabCase('hello')).toBe('hello');
    expect(toKebabCase('World')).toBe('world');
  });

  it('should handle empty string', () => {
    expect(toKebabCase('')).toBe('');
  });

  it('should handle strings with only uppercase letters', () => {
    expect(toKebabCase('UPPERCASE')).toBe('uppercase');
    expect(toKebabCase('ALL_CAPS')).toBe('all-caps');
  });

  it('should handle complex mixed patterns', () => {
    expect(toKebabCase('camelCaseWithNumbers123AndMore')).toBe('camel-case-with-numbers123-and-more');
    expect(toKebabCase('HTTPSConnection')).toBe('https-connection');
    expect(toKebabCase('getHTMLElement')).toBe('get-html-element');
  });

  it('should handle strings with special spacing patterns', () => {
    expect(toKebabCase('  leading spaces')).toBe('leading-spaces');
    expect(toKebabCase('trailing spaces  ')).toBe('trailing-spaces');
    expect(toKebabCase('  both sides  ')).toBe('both-sides');
  });

  it('should handle mixed separators', () => {
    expect(toKebabCase('mixed_case And-styles')).toBe('mixed-case-and-styles');
    expect(toKebabCase('some_Snake withCamel-And kebab')).toBe('some-snake-with-camel-and-kebab');
  });
});

