import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://silkitech.com'),
  title: 'SilkiTech | Software Engineering & AI Solutions',
  description: 'SilkiTech designs and builds modern web applications, AI solutions, SaaS platforms, and cloud infrastructure for ambitious businesses.',
  openGraph: { title: 'SilkiTech | Build what’s next', description: 'Practical engineering. Thoughtful digital products.', type: 'website', url: 'https://silkitech.com' },
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
