export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'QlikOwl',
  description: 'DevOps och frontend-utveckling',
  navItems: [
    { label: 'Hem', href: '/' },
    { label: 'Om oss', href: '/about' },
  ],
  navMenuItems: [
    { label: 'Profil', href: '/profile' },
    { label: 'Dashboard', href: '/dashboard' },
    {
      label: 'Inställningar',
      href: '/settings',
    },
    {
      label: 'Hjälp och feedback',
      href: '/help-feedback',
    },
    {
      label: 'Logga ut',
      href: '/logout',
    },
  ],
  links: {
    github: 'https://github.com/alexandertorngren',
    discord: 'https://discord.gg/nextui',
    docs: 'https://nextui.org/docs',
  },
}
