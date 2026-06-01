# Diaz – Offisiell artistside

## Om prosjektet
Offisiell artistside for den norske rapperen Diaz (Andres Rafael Diaz-Nyhus) fra Jessheim.
Bygget og vedlikeholdt av Colin McMahon med Claude Code.

---

## Teknisk stack

- **Type:** Statisk nettside (vanilla HTML, CSS, JavaScript)
- **Rammeverk:** Ingen – ren HTML/CSS/JS
- **Hosting:** GitHub Pages
- **Repository:** https://github.com/SuperColin/Diaz
- **Branch:** `main` (auto-deploy til GitHub Pages ved push)

---

## Domene og DNS

- **Aktivt domene:** https://diazdiazdiaz.no
- **www-redirect:** www.diazdiazdiaz.no → diazdiazdiaz.no (via Cloudflare Page Rule)
- **Gammelt domene:** svarttjern.com (ikke lenger i bruk)
- **Domeneregistrar:** domene.no (klientens konto)
- **DNS-leverandør:** Cloudflare (free plan) — domene.no støtter ikke individuelle DNS-poster, kun navnetjenerendring
- **CNAME-fil i repo:** `diazdiazdiaz.no`

### Cloudflare DNS-oppsett
| Type | Name | Content | Proxy |
|------|------|---------|-------|
| A | @ | 185.199.108.153 | DNS only |
| A | @ | 185.199.109.153 | DNS only |
| A | @ | 185.199.110.153 | DNS only |
| A | @ | 185.199.111.153 | DNS only |
| CNAME | www | supercolin.github.io | Proxied (for www-redirect) |

### Viktig: Troubleshooting DNS
Når Cloudflare importerte DNS automatisk under oppsett, tok den med en gammel A-record for `diazdiazdiaz.no` som pekte til domene.no sin gamle server (`185.126.36.16`). Denne ble fjernet manuelt. Hvis nettstedet oppfører seg inkonsistent på tvers av enheter, er første sjekk om det har dukket opp stray A-records i Cloudflare som peker til `185.126.36.16`.

---

## SSL

- **SSL for diazdiazdiaz.no:** Håndteres automatisk av GitHub Pages (Let's Encrypt)
- **domene.no AutoSSL:** Deaktivert — domenet er ikke lenger hosted hos domene.no og AutoSSL klarte ikke DCV-validering. Ble deaktivert i cPanel (bifrost.domene.no:2083) juni 2026.

---

## Prosjektstruktur

```
/
├── index.html          # Eneste HTML-side (single page)
├── CNAME               # GitHub Pages custom domain
├── googlea22459f9b18a8a42.html  # Google Search Console verifisering
├── css/
│   └── style.css       # All styling
├── js/
│   └── main.js         # Hero scroll fade, hamburger-meny, smooth scroll
└── media/
    ├── hero-a.jpg               # Hero-bilde (top layer, fader ut ved scroll)
    ├── hero-b.jpg               # Hero-bilde (bottom layer, statisk)
    ├── signature-new.png        # Aktiv logo i nav
    ├── logo-diaz.svg            # Gammel logo (ubrukt, beholdt for referanse)
    ├── diaz-pressefoto-02-big/thumb.jpg
    ├── diaz-pressefoto-03-big/thumb.jpg
    ├── diaz-pressefoto-05-big/thumb.jpg
    ├── diaz-pressefoto-06-big/thumb.jpg
    ├── diaz-I-en-skog-cover.jpg
    ├── diaz-fluefiske.jpg
    └── iTunes.svg
```

---

## Seksjoner på siden

| Seksjon | Anker | Innhold |
|---------|-------|---------|
| Hero | #hero | To lag hero-bilder med scroll fade-effekt |
| Musikk | #musikk | Spotify, iTunes/Apple Music, Tidal |
| Bio | #bio | Artistbiografi + Tommy Tee-konsert event-kort |
| Bilder | #bilder | 4 pressefoto i 2x2 grid (nedlastbare) |
| Foredrag | #foredrag | Info om foredragsvirksomhet |
| Fluefiskefilmer | #fluefiskefilmer | 8 YouTube-embeds (youtube-nocookie.com) + lenke til kanal |
| Booking | #booking | Kontaktinfo Linjebo Musikk |
| SoMe | #some | Instagram, Facebook, YouTube-ikoner |
| Kontakt | #kontakt | Sony Music Norway kontaktinfo (Marion S. Bjørsvik) |

---

## Streaming-lenker

| Tjeneste | URL |
|----------|-----|
| Spotify | https://open.spotify.com/artist/5rzSSuIvvz1C5faU5vKfAT |
| Apple Music | https://music.apple.com/no/album/i-en-skog-single/1893638260?ls=1 |
| Tidal | https://tidal.com/album/516121559/u |

---

## SEO

- **Title:** `Diaz | Offisiell artistside`
- **Meta description:** Dekker søkeord som "Diaz musikk", "Diaz album", "Diaz Jessheim", "Svarttjern", "I en skog"
- **Skjulte H1/H2:** Implementert med `.visually-hidden`-klassen (ikke `opacity: 0` — Google straffer det)
- **Open Graph:** Satt opp for sosiale medier
- **Google Search Console:** Verifisert via HTML-fil, domene: diazdiazdiaz.no

---

## Utvikling

```bash
# Start lokal server
python3 -m http.server 8080 --directory /Users/colinmcmahon/Developer/Diaz

# Deploy: commit og push til main
git add .
git commit -m "beskrivelse"
git push origin main
# GitHub Pages deployer automatisk (~1 min)
```
