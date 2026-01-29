export interface IconSvgRegistration {
  name: string;
  /**
   * Custom SVG icon code as string.
   */
  svg: string;
}

export interface IconLiteralRegistration extends Omit<IconSvgRegistration, 'svg'> {
  /**
   * Path to the SVG icon file.
   */
  path: `${string}.svg`;
}

export type IconRegistration = IconSvgRegistration | IconLiteralRegistration;

export function isIconSvgRegistration(icon: IconRegistration): icon is IconSvgRegistration {
  return (icon as IconSvgRegistration).svg !== undefined;
}
