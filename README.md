# Brooks Tech Solutions — Corporate Platform 🚀

[![Built with React](https://img.shields.io/badge/Framework-React%2019-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Styling-Tailwind%20CSS%20v4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Vite Engine](https://img.shields.io/badge/Build%20Tool-Vite-646cff?style=flat-square&logo=vite)](https://vite.dev/)
[![TypeScript Strict](https://img.shields.io/badge/Language-TypeScript%20Strict-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

The official, production-grade web portfolio and service acquisition engine for **Brooks Tech Solutions**. Built using a high-performance, single-page architecture designed to showcase premium web solutions and streamline client on-boarding.

---

## 🛠️ Tech Stack & Architecture

This platform leverages a cutting-edge frontend stack engineered for speed, type safety, and maintainability:

* **Core Engine:** React 19 + Vite for lightning-fast Hot Module Replacement (HMR).
* **Styling Architecture:** **Tailwind CSS v4** featuring a native CSS-First compiler pipeline, eliminating legacy JavaScript config layers.
* **Type System:** Strict TypeScript configuration running `verbatimModuleSyntax` for highly optimized compile-time asset stripping.
* **Hosting Target:** Configured for edge deployment on Netlify with secure SSL certificate handshakes.

---

## 💼 Core Service Architecture

The platform operates on a streamlined, high-margin service model designed to protect development bandwidth while securing recurring revenue lines:

1.  **The Essential Website ($199 / project)** — Custom single-page React environments optimized with Tailwind CSS layouts, standard SEO indexing, and integrated intake forms.
2.  **Annual Hosting & Support ($160 / year)** — Automated cloud backups, continuous security monitoring, managed SSL lifecycle handling, and priority content support.
3.  **PC & Tech Troubleshooting ($50 / hour)** — On-demand expert hardware diagnostic parsing, network tuning, malware mitigation, and OS-level repair.

---

## 🎨 Design System & Branding

The platform employs a bespoke corporate visual identity keyed off our geometric circuit emblem (`btslogo.png`):

* **Primary Palette:** Deep Slate (`#0f172a`) balanced against neon **Cyan / Teal** reactive visual elements.
* **Watermark Layering:** Utilizes native dual-image CSS compositing via a `linear-gradient` slate mask overlaid directly on the high-tech brand cube, creating an elegant backdrop across the viewport without layout conflicts:
  ```css
  /* Layering Engine Mechanics */
  background-image: linear-gradient(rgba(248, 250, 252, 0.97), rgba(248, 250, 252, 0.97)), url('/btslogo.png');

## ⚙️ Local Development Setup

To run this workspace locally or pull it down onto a secondary workstation:

### 1. Clone the Workspace
```bash
git clone [https://github.com/bbrooks37/btsdevs.git](https://github.com/bbrooks37/btsdevs.git)
cd btsdevs
### **2. Install Dependencies**
```bash
npm install
## **3. Spin Up Local Development Engine**
```bash
npm run dev
The application will launch automatically on http://localhost:5173 with full Hot Module Replacement enabled.
## **4. Production Compilation Test**
```bash
npm run build 
Validates strict type-checking parameters and builds optimized production assets into the dist/ directory.
## 🛡️ Engineering & Quality Controls

* **Strict Imports:** All type-only interfaces must use explicit `import type` markers to maintain compliance with our strict `verbatimModuleSyntax` compiler rule.
* **Responsive Layouts:** Grid patterns switch gracefully from stacked 1-column layouts on mobile up to a high-density 3-column configuration on large workstation displays.

---
🔬 *Engineered by Brooks Tech Solutions LLC.*
