# Deepikha & Sri Balaji — Wedding Invitation Website

An Angular 20 (standalone components, signals) single-page wedding invitation
built from the invitation card, in a maroon / sandal / gold pastel palette.

## What's included

- **Hero, couple, schedule & venue, blessing bell, wishes form, footer** —
  built from the details on the invitation card (names, 14 Dec 2026 muhurtham,
  V.M.A. Hall address).
- **Bilingual (English / Tamil)** — a top-bar toggle switches every section
  instantly; Tamil uses the Mukta Malar type family so layouts stay readable
  in both languages.
- **Background music toggle** at the top of the page (browsers block
  autoplay with sound until the visitor interacts once, which is expected
  behaviour, not a bug — the site also starts the music on the very first
  tap/click anywhere on the page).
- **Interactive blessing bell** — tap it to trigger a swing animation, a
  gold ripple, falling petals, a bell sound, and a running "blessings
  received" counter.
- **Custom animated cursor** — a trailing gold ring plus a dot, which grows
  on interactive elements (desktop/mouse only; untouched on touchscreens).
- **Wishes form** — Reactive Forms with `FormControl` validation (name,
  bride/groom side, message), wired to write into a Google Sheet.
- **Invitation download button** — downloads the original invitation PDF.

## Before you run it

1. `npm install`
2. `npm start` (serves at http://localhost:4200)
3. `npm run build` — production build goes to `dist/wedding-invite/`

## Two things only you can finish (they need your Google account / media)

1. **Google Sheets connection** — see `google-apps-script/README.md`. Deploy
   the included `Code.gs` as a Web App from **dhinesh.m0607@gmail.com**, then
   paste the resulting URL into `src/app/services/wishes.service.ts`
   (`SHEET_WEB_APP_URL`). Until you do this, the form still validates
   correctly but shows the "something went wrong" message on submit, since
   there's nowhere to send it yet — this is expected, not a bug.
2. **Audio files** — add `background-music.mp3` and `temple-bell.mp3` under
   `src/assets/audio/` (see the README already in that folder for guidance
   and licensing notes). I couldn't bundle real audio files here.

## Customizing

- **Colors** — all in `src/styles.scss` under `:root` (`--maroon-deep`,
  `--gold`, `--sandal`, etc.).
- **Text / bilingual copy** — everything lives in one place:
  `src/app/data/content.ts`.
- **Invitation PDF** — replace
  `src/assets/docs/Deepikha-SriBalaji-Wedding-Invitation.pdf` with an updated
  file of the same name, or update the `href`/`download` values in
  `src/app/components/footer/footer.component.ts`.

## Deploying

Any static host works (Netlify, Vercel, Firebase Hosting, GitHub Pages) —
just run `npm run build` and upload the contents of
`dist/wedding-invite/browser/`.
