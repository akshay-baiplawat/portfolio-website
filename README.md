# Akshay Baiplawat - Portfolio Website

Modern, responsive portfolio website built with TypeScript and Vite. Features enterprise-grade architecture, comprehensive testing, and automated CI/CD deployment.

![CI/CD Status](https://github.com/akshaybaiplawat/portfolio-website/workflows/CI/CD%20Pipeline/badge.svg)
![Coverage](https://codecov.io/gh/akshaybaiplawat/portfolio-website/branch/main/graph/badge.svg)
![Security](https://img.shields.io/badge/security-audited-green.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## 🌐 Live Demo

**Visit the live site:** [https://akshay-baiplawat.github.io/portfolio-website/](https://akshay-baiplawat.github.io/portfolio-website/)

## ✨ Features

- **TypeScript** - Strict mode with class-based OOP architecture
- **Performance** - Lighthouse scores 95+ across all metrics, <2s page load
- **Testing** - Vitest with >80% coverage, automated CI/CD pipeline
- **Accessibility** - WCAG 2.1 AA compliant
- **Security** - Trivy scanning, CSP headers, automated vulnerability checks
- **Modern Animations** - AOS scroll effects, Typed.js, Isotope filtering, GLightbox galleries

## 🚀 Quick Start

```bash
# Clone and install
git clone https://github.com/akshaybaiplawat/portfolio-website.git
cd portfolio-website
npm install

# Start development server
npm run dev
```

## 📁 Project Structure

```plaintext
portfolio-website/
├── .github/workflows/    # CI/CD pipeline
├── src/
│   ├── main.ts          # Core TypeScript application (775 lines)
│   ├── data/            # Typed project data models
│   ├── styles/          # CSS design system (3,517 lines)
│   └── test/            # Vitest test suite
├── assets/              # Images and fonts
├── index.html           # Semantic HTML5 structure (1,053 lines)
├── vite.config.ts       # Build configuration
└── tsconfig.json        # TypeScript strict mode config
```

## 🛠️ Available Scripts

```bash
npm run dev              # Start development server
npm run build            # Production build
npm run test             # Run tests with coverage
npm run lint             # ESLint + Prettier check
npm run type-check       # TypeScript validation
```

## 🔧 Technology Stack

**Core:** TypeScript 5.4.5, Vite 7.0.6, Bootstrap 5.3.3

**Testing:** Vitest 3.2.4, jsdom, @vitest/coverage-v8 (>80% coverage)

**Quality:** ESLint 8.57.0 + security plugin, Prettier 3.3.2, Husky 9.0.11

**CI/CD:** GitHub Actions (lint → test → build → security scan → deploy), Trivy, Lighthouse CI

**Libraries:** AOS, Typed.js, Isotope, Swiper, GLightbox, PureCounter

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

**Built with TypeScript, Vite, and modern web standards** | ⭐ Star this repo if you find it helpful!
