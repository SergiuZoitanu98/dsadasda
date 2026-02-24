# AgroTec S.r.l. — Technical Portal Frontend

A React + SCSS Modules frontend with a **sidebar + dashboard layout** (different from the NH version).

## Setup

```bash
npm install
npm start
```

## Project Structure

```
src/
├── App.jsx
├── index.js
├── styles/
│   └── globals.scss
└── components/
    ├── Navbar/
    │   ├── Topbar.jsx          # Sticky top bar with search + auth
    │   └── Topbar.module.scss
    ├── Sidebar/
    │   ├── Sidebar.jsx         # Fixed left nav, collapsible on mobile
    │   └── Sidebar.module.scss
    ├── LanguageSelector/
    │   ├── LanguageSelector.jsx
    │   └── LanguageSelector.module.scss
    ├── Dashboard/
    │   ├── Dashboard.jsx       # Hero banner + stats + resource grid + aside
    │   └── Dashboard.module.scss
    └── Footer/
        ├── Footer.jsx
        └── Footer.module.scss
```

## Layout differences vs NH version

| Feature        | NH Version            | AgroTec Version              |
|----------------|-----------------------|------------------------------|
| Navigation     | Horizontal top navbar | Vertical sidebar              |
| Search         | —                     | Global search bar in topbar   |
| Hero           | Full-screen + login   | Banner with CTA buttons       |
| Login          | Card in hero          | Sidebar card in dashboard     |
| Stats          | —                     | Stats row below hero          |
| Recent items   | —                     | "Recent Updates" feed         |

## Colors (same palette)
- `#003087` NH Blue
- `#f5a800` NH Yellow
- `#001f5c` Navy Dark
