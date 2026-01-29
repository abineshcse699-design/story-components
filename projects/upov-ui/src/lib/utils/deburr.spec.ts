import { deburr } from './deburr';

describe('deburr', () => {
  it('should remove diacritics from accented characters', () => {
    expect(deburr('café')).toBe('cafe');
    expect(deburr('naïve')).toBe('naive');
    expect(deburr('résumé')).toBe('resume');
    expect(deburr('piñata')).toBe('pinata');
  });

  it('should handle mixed accented and non-accented characters', () => {
    expect(deburr('Hëllö Wörld')).toBe('Hello World');
    expect(deburr('Ångström')).toBe('Angstrom');
    expect(deburr('Zürich')).toBe('Zurich');
  });

  it('should handle various diacritical marks', () => {
    // Acute accents
    expect(deburr('á é í ó ú')).toBe('a e i o u');

    // Grave accents
    expect(deburr('à è ì ò ù')).toBe('a e i o u');

    // Circumflex
    expect(deburr('â ê î ô û')).toBe('a e i o u');

    // Umlaut/diaeresis
    expect(deburr('ä ë ï ö ü')).toBe('a e i o u');

    // Tilde
    expect(deburr('ã ñ õ')).toBe('a n o');

    // Cedilla
    expect(deburr('ç')).toBe('c');
  });

  it('should handle uppercase accented characters', () => {
    expect(deburr('CAFÉ')).toBe('CAFE');
    expect(deburr('NAÏVE')).toBe('NAIVE');
    expect(deburr('RÉSUMÉ')).toBe('RESUME');
    expect(deburr('PIÑATA')).toBe('PINATA');
  });

  it('should return the same string if no diacritics are present', () => {
    expect(deburr('hello')).toBe('hello');
    expect(deburr('world')).toBe('world');
    expect(deburr('test123')).toBe('test123');
    expect(deburr('Hello World!')).toBe('Hello World!');
  });

  it('should handle empty string', () => {
    expect(deburr('')).toBe('');
  });

  it('should handle strings with only spaces', () => {
    expect(deburr('   ')).toBe('   ');
  });

  it('should handle special characters and punctuation', () => {
    expect(deburr('café! How are you?')).toBe('cafe! How are you?');
    expect(deburr('résumé@email.com')).toBe('resume@email.com');
    expect(deburr('piñata & naïve')).toBe('pinata & naive');
  });

  it('should handle numbers mixed with accented text', () => {
    expect(deburr('café123')).toBe('cafe123');
    expect(deburr('2023 résumé')).toBe('2023 resume');
  });

  it('should handle common European language characters', () => {
    // French
    expect(deburr('français')).toBe('francais');

    // German
    expect(deburr('Mädchen')).toBe('Madchen');

    // Spanish
    expect(deburr('español')).toBe('espanol');

    // Portuguese
    expect(deburr('português')).toBe('portugues');

    // Italian
    expect(deburr('caffè')).toBe('caffe');
  });

  it('should preserve whitespace and formatting', () => {
    expect(deburr(' café ')).toBe(' cafe ');
    expect(deburr('\tcafé\n')).toBe('\tcafe\n');
    expect(deburr('café\r\nnaïve')).toBe('cafe\r\nnaive');
  });
});
