import type { Metadata } from 'next';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://silkitech.com'),
  title: 'SilkiTech | Software Engineering & AI Solutions',
  description: 'SilkiTech designs and builds modern web applications, AI solutions, SaaS platforms, and cloud infrastructure for ambitious businesses.',
  openGraph: { title: 'SilkiTech | Build what’s next', description: 'Practical engineering. Thoughtful digital products.', type: 'website', url: 'https://silkitech.com' },
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en" className={`${grotesk.variable} ${mono.variable}`}>
    <body>
      <div className="grain" aria-hidden="true"/>
      {children}
    </body>
  </html>;
}
