@AGENTS.md

# Kottler & Kottler landing page

Single-page marketing site for a Southern California personal injury law firm. The case review form emails inquiries through Gmail SMTP. See `README.md` for setup and environment variables.

## Commands

- `bun dev`: dev server on port 3000. The owner often has one running already; reuse it, or run a production build on another port (`bun run build && bun run start -p 3100`).
- `bunx tsc --noEmit`, `bun run lint`, `bun run build`: run all three before calling a change done.
- Use Bun for everything. Don't use npm/yarn/pnpm to add dependencies.

## Design and content rules

- **The design source is Figma Make version 3** (file key `FNu1Yi8zmbWh6E4vZd9bFt`, readable through the Figma MCP server; `src/LandingV3.tsx` is the reference). The layout was originally modeled on https://lawbrothers.com/. Follow the design closely, and don't change layout, sections or styling unless the user asks. Content and text edits are fine.
- **No photos of the attorneys anywhere.** This is the client's request.
- Firm facts (case results, attorneys, address, fax, FAQ answers) come from the previous site, https://kottlerpersonalinjuryattorney.com/. It blocks curl (ModSecurity); read it with a browser (`playwright-cli`).
- Case results use client initials and city only. Keep the advertising disclaimer next to results.
- Unconfirmed with the client: founding year (site says 1968, the old FAQ says 1969) and the "respond within 1 hour, always within 8 hours" promise. Don't add more claims like these without flagging them.

## Code conventions

- Page sections live in `app/page.tsx` (Server Component). Only `SiteHeader` and `LeadForm` are Client Components. Shared phone, nav and icon live in `app/_components/site.tsx`.
- **CSS layers matter.** Custom classes in `app/globals.css` must stay inside `@layer base` or `@layer components`. Unlayered rules override Tailwind utilities (`hidden`, `xl:hidden`, `font-semibold`), which previously broke the responsive header and font weights.
- Colors are hardcoded hex values in Tailwind arbitrary classes, matching the Figma code (navy `#101c32`/`#14213a`, gold `#d9a441`, light gold `#f0cf86`, cream `#f6f2e9`). Reuse them; don't introduce a new palette.
- Fonts load through `next/font` (DM Sans 400–700, Libre Caslon Display) as `--font-dm-sans` / `--font-libre-caslon`. Images use `next/image` with static imports from `app/assets/`.
- `cacheComponents` is on: `new Date()`, `Math.random()` etc. fail the prerender. Wrap them in a `"use cache"` function (see `CurrentYear` in `page.tsx`) or move them to request time.
- The header is tight: logo, nav and phone fill most of the 78rem container at `xl`. After touching the header, check 360, 390, 768, 1024, 1280 and 1440px widths for wrapping or overflow.

## Contact form

- `app/actions/contact.ts` is the only server code. It validates every field server-side, uses a honeypot field (`company`), escapes HTML in the email body, and never exposes SMTP errors to visitors.
- Submitting the form sends a real email to the firm's inbox. Only do it when the user asks for an end-to-end test.

## Git

- Commit and push only when asked. Work happens on `main`.
- Commit messages: `[Tag] Short summary` (e.g. `[UI]`, `[Content]`, `[Docs]`) plus bullet details.
- Run `bun update` before every push, and commit any lockfile changes separately.
- Never commit `.env.local` or `.vscode/`.
