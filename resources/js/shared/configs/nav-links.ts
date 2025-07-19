interface LinkProps {
  label: string;
  href: string;
}

export const LeftLink: LinkProps[] = [
  {
    label: 'Beranda',
    href: '/',
  },
  {
    label: 'Berita',
    href: '/berita',
  },
  {
    label: 'Galeri',
    href: '/galeri',
  },
];
export const RightLink: LinkProps[] = [
  {
    label: 'UKM',
    href: '/ukm',
  },
  {
    label: 'RAJA Hub',
    href: '/raja-hub',
  },
  {
    label: 'RAJA Apps',
    href: '/raja-apps',
  },
];
