import type { NavItem } from '@/types'

// ─── Core Site Configuration ─────────────────────────────────────────────────
export const SITE_CONFIG = {
  name: 'Mantra Sports NL',
  tagline: 'Speel zonder grenzen.',
  description:
    'Mantra Sports NL — Premium cricketbats, beschermende uitrusting, ballen, teamkleding en accessoires. Gebouwd voor prestaties. Wereldwijd vertrouwd.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mantrasports.nl',
  locale: 'nl-NL',
  region: 'nl',
  currency: 'EUR',
  currencySymbol: '€',

  contact: {
    email: process.env.EMAIL_TO ?? 'info@mantrasports.nl',
    phone: 'TO_BE_PROVIDED',
    address: 'TO_BE_PROVIDED',
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? 'TO_BE_PROVIDED',
  },

  social: {
    instagram: '#',
    facebook: '#',
    linkedin: '#',
    youtube: '#',
  },

  seo: {
    titleTemplate: '%s | Mantra Sports NL',
    defaultTitle: 'Mantra Sports NL — Premium Cricket Uitrusting',
    defaultDescription:
      'Premium cricketbats, beschermende uitrusting, teamkleding en accessoires bij Mantra Sports Nederland. Groothandel & B2B-aanvragen welkom.',
    defaultOgImage: '/images/og-default.jpg',
    twitterHandle: '@mantrasports',
  },
} as const

// ─── WhatsApp Helpers ─────────────────────────────────────────────────────────

export function getWhatsAppUrl(message?: string): string {
  const number = SITE_CONFIG.contact.whatsapp.replace(/\D/g, '')
  const encoded = encodeURIComponent(
    message ?? 'Hallo, ik wil graag informeren over Mantra Sports producten.'
  )
  return `https://wa.me/${number}?text=${encoded}`
}

export function getProductWhatsAppUrl(productName: string): string {
  const message = `Hallo, ik ben geïnteresseerd in ${productName}. Kunt u mij meer informatie geven?`
  return getWhatsAppUrl(message)
}

// ─── Navigation (Dutch frontend) ──────────────────────────────────────────────

export const MAIN_NAV: NavItem[] = [
  {
    label: 'Shop',
    href: '/shop',
    children: [
      { label: 'Alle Producten', href: '/shop' },
      { label: 'Cricketbats', href: '/categories/cricket-bats' },
      { label: 'Beschermende Uitrusting', href: '/categories/protective-gear' },
      { label: 'Ballen', href: '/categories/balls' },
      { label: 'Accessoires', href: '/categories/accessories' },
      { label: 'Teamkleding', href: '/categories/teamwear' },
      { label: 'Aangepaste Kleding', href: '/categories/custom-apparel' },
    ],
  },
  {
    label: 'Collecties',
    href: '/collections',
  },
  {
    label: 'Groothandel',
    href: '/wholesale',
    children: [
      { label: 'Groothandelsaanvraag', href: '/wholesale' },
      { label: 'B2B-Partnerschappen', href: '/b2b' },
      { label: 'Word Dealer', href: '/become-a-dealer' },
    ],
  },
  {
    label: 'Over Ons',
    href: '/about',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]

export const FOOTER_NAV = {
  products: {
    title: 'Producten',
    links: [
      { label: 'Cricketbats', href: '/categories/cricket-bats' },
      { label: 'Beschermende Uitrusting', href: '/categories/protective-gear' },
      { label: 'Ballen', href: '/categories/balls' },
      { label: 'Accessoires', href: '/categories/accessories' },
      { label: 'Teamkleding', href: '/categories/teamwear' },
      { label: 'Aangepaste Kleding', href: '/categories/custom-apparel' },
    ],
  },
  company: {
    title: 'Bedrijf',
    links: [
      { label: 'Over Ons', href: '/about' },
      { label: 'Groothandel', href: '/wholesale' },
      { label: 'B2B-Partnerschappen', href: '/b2b' },
      { label: 'Word Dealer', href: '/become-a-dealer' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  support: {
    title: 'Hulp & Ondersteuning',
    links: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Verzendbeleid', href: '/shipping-policy' },
      { label: 'Retourbeleid', href: '/returns-policy' },
      { label: 'Privacybeleid', href: '/privacy-policy' },
      { label: 'Algemene Voorwaarden', href: '/terms-and-conditions' },
      { label: 'Sitemap', href: '/sitemap.xml' },
    ],
  },
}

// ─── Product Categories ───────────────────────────────────────────────────────

export const DEFAULT_CATEGORIES = [
  { name: 'Cricket Bats', slug: 'cricket-bats', sortOrder: 1 },
  { name: 'Protective Gear', slug: 'protective-gear', sortOrder: 2 },
  { name: 'Balls', slug: 'balls', sortOrder: 3 },
  { name: 'Accessories', slug: 'accessories', sortOrder: 4 },
  { name: 'Teamwear', slug: 'teamwear', sortOrder: 5 },
  { name: 'Custom Apparel', slug: 'custom-apparel', sortOrder: 6 },
] as const

// ─── Default Site Settings ────────────────────────────────────────────────────

export const DEFAULT_SITE_SETTINGS = {
  hero_image_url: '',
  site_name: 'Mantra Sports NL',
  site_tagline: 'Speel zonder grenzen.',
  site_description: SITE_CONFIG.description,
  contact_email: 'info@mantrasports.nl',
  contact_phone: 'TO_BE_PROVIDED',
  contact_address: 'TO_BE_PROVIDED',
  whatsapp_number: 'TO_BE_PROVIDED',
  social_instagram: '',
  social_facebook: '',
  social_linkedin: '',
  social_youtube: '',
  social_twitter: '',
  social_tiktok: '',
  social_pinterest: '',
  footer_text: `© ${new Date().getFullYear()} Mantra Sports. Alle rechten voorbehouden.`,
  meta_title: SITE_CONFIG.seo.defaultTitle,
  meta_description: SITE_CONFIG.seo.defaultDescription,
} as const
