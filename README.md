# SilkiTech website

Responsive corporate homepage for **silkitech.com**, built with Next.js App Router, TypeScript, Tailwind CSS 4, and lucide-react.

## Run locally

Requires Node.js 20.9+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm run start
```

## Deploy on Vercel

1. Push this project to a GitHub repository.
2. In Vercel, import the repository and deploy using the detected Next.js settings.
3. Add `silkitech.com` and `www.silkitech.com` in the Vercel project **Domains** tab.
4. In Gname DNS, add only the website records exactly as instructed by Vercel. **Preserve existing MX, SPF, DKIM, DMARC, and mail-related DNS records** for your Gname-hosted `info@silkitech.com` account.
5. Verify HTTPS and test your existing mailbox after DNS propagation.

## What is implemented

- Fully responsive homepage, navigation and mobile menu
- Original CSS-based hero graphic, no external images or tracking scripts
- Services, About, Process, Expertise, and Contact sections
- Basic SEO metadata
- Working email links to `info@silkitech.com`

## Before public launch

- Replace marketing text with company-approved claims and real business details.
- Add authentic portfolio items rather than invented client testimonials.
- Build individual About, Services, Portfolio and Contact pages.
- Add a privacy policy and contact form with server-side validation and spam protection, if desired.
- Verify accessibility, performance, SEO, and email delivery.
