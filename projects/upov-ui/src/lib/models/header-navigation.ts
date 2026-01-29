export interface HeaderNavigationItem {
  label: string;
  link: string;
  children?: HeaderNavigationItem[];
}

export type HeaderNavigation = HeaderNavigationItem[];
