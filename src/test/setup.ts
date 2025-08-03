/**
 * Test setup file
 * Configures the testing environment with necessary polyfills and mocks
 */

import { vi } from 'vitest';

// Mock console methods in tests
global.console = {
    ...console,
    // Uncomment to ignore specific console methods in tests
    // log: vi.fn(),
    // warn: vi.fn(),
    // error: vi.fn(),
    info: vi.fn()
};

// Mock window.scrollY
Object.defineProperty(window, 'scrollY', {
    writable: true,
    value: 0
});

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
    root = null;
    rootMargin = '';
    thresholds = [];

    constructor() {}
    observe() {
        return null;
    }
    unobserve() {
        return null;
    }
    disconnect() {
        return null;
    }
    takeRecords() {
        return [];
    }
} as any;

// Mock third-party libraries
(global as any).AOS = {
    init: vi.fn(),
    refresh: vi.fn()
};

(global as any).Typed = vi.fn();
(global as any).PureCounter = vi.fn();
(global as any).GLightbox = vi.fn();
(global as any).Isotope = vi.fn();
(global as any).Swiper = vi.fn();
(global as any).imagesLoaded = vi.fn((_, callback) => callback && callback());

// Mock DOM methods that might not be available in jsdom
HTMLElement.prototype.scrollIntoView = vi.fn();

// Setup DOM
document.body.innerHTML = `
  <body>
    <header id="header" class="header">
      <nav id="navmenu" class="navmenu">
        <button class="mobile-nav-toggle">
          <i class="bi bi-list"></i>
        </button>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <div class="typed" data-typed-items="Developer, Designer"></div>
      <div class="isotope-container">
        <div class="portfolio-item filter-web"></div>
      </div>
      <ul class="portfolio-filters">
        <li data-filter="*" class="filter-active">All</li>
        <li data-filter=".filter-web">Web</li>
      </ul>
    </main>
  </body>
`;
