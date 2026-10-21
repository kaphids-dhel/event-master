# CZ2 Junior Youth Camp 2026 — Digital Companion

A static, mobile-first event microsite. No database or build step required.

## Preview locally

Open `index.html` in your browser. For best results, run a local HTTP server from this folder:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

## Publish

Upload all files, including the `assets` folder, to your web host or GitHub Pages repository. On GitHub Pages, enable Pages in Settings → Pages → Deploy from a branch.

## Included

- `index.html` — website design and content
- `script.js` — day selector, club filters, map viewer, mobile menu
- `assets/banner.png` — official banner
- `assets/badge.png` — official camp badge
- `assets/map.png` — official camp map
- `assets/staff.jpg` — supplied staff chart
- `assets/program.pdf` — complete official program
- `assets/waiver.pdf` — official waiver

## Before launch

- Confirm schedule and activity details with organizers (the official PDF is the authority).
- Confirm permission to publish staff names and photos and official artwork.
- Consider whether to publish a youth campsite map publicly or restrict access to participants.
- Avoid collecting minors' information or medical data on this static public site.
- For emergencies, follow onsite staff instructions rather than relying on this site.

This prototype intentionally excludes RSVPs, user accounts, payments, and streaming production.

## Version 0.2 updates
- Hero uses the official supplied banner without text overlays.
- Light/minimal styling with supplied grayscale camp illustration.
- Theme song lyrics are transcribed from the official program, page 15.
- Whistle Calls is a placeholder pending verified signals.
- Responsive mobile navigation includes the theme song.
- `assets/camp-banner.gif` is a GIF conversion of the supplied PNG-encoded file (which was named .gif). The provided file had only one frame, so this banner is static until an animated GIF is supplied.

## Version 0.2.3
- Gold brand title; video hero uses `assets/video-banner.mp4` if supplied, otherwise the GIF poster.
- **MP3 is audio-only** and cannot serve as a video banner. Export your animation as H.264 MP4 and put it at `assets/video-banner.mp4`.
- Song navigation opens a full-screen, scrollable mobile reading view. Sing-along sidebar removed.
