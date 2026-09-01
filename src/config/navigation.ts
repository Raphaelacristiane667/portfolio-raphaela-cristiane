export type NavSectionId = "about" | "services" | "projects";

export type NavItem = {
  href: string;
  labelKey: "nav.home" | "nav.about" | "nav.services" | "nav.projects" | "nav.contact";
  sectionId: NavSectionId | null;
  isPage?: boolean;
};

export const NAV_ITEMS: NavItem[] = [
  { href: "/", labelKey: "nav.home", sectionId: null },
  { href: "/#about", labelKey: "nav.about", sectionId: "about" },
  { href: "/#services", labelKey: "nav.services", sectionId: "services" },
  { href: "/#projects", labelKey: "nav.projects", sectionId: "projects" },
  { href: "/contact", labelKey: "nav.contact", sectionId: null, isPage: true },
];

export const HEADER_HEIGHT_PX = 64;

/** z-index scale — header < overlay < drawer */
export const Z_INDEX = {
  header: 50,
  mobileOverlay: 100,
  mobileDrawer: 110,
} as const;
