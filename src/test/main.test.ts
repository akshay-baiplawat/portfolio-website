/**
 * Unit tests for PortfolioApplication
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { PortfolioApplication } from '../main';

describe('PortfolioApplication', () => {
  let app: PortfolioApplication;

  beforeEach(() => {
    // Reset DOM to initial state
    document.body.className = '';
    window.scrollY = 0;
    
    app = new PortfolioApplication();
  });

  afterEach(() => {
    app.destroy();
    vi.clearAllMocks();
  });

  describe('Initialization', () => {
    it('should initialize without errors', () => {
      expect(() => app.init()).not.toThrow();
    });

    it('should log successful initialization', () => {
      const consoleSpy = vi.spyOn(console, 'info');
      app.init();
      expect(consoleSpy).toHaveBeenCalledWith('Portfolio application initialized successfully');
    });
  });

  describe('Scroll Handling', () => {
    beforeEach(() => {
      app.init();
    });

    it('should add scrolled class when scrolling past threshold', async () => {
      // Mock scrollY value
      Object.defineProperty(window, 'scrollY', { value: 150, writable: true });
      
      // Trigger scroll event and wait for handler
      const scrollEvent = new Event('scroll');
      window.dispatchEvent(scrollEvent);
      
      // Wait a tick for the handler to execute
      await new Promise(resolve => setTimeout(resolve, 0));
      
      expect(document.body.classList.contains('scrolled')).toBe(true);
    });

    it('should remove scrolled class when scrolling above threshold', () => {
      // First add the class
      document.body.classList.add('scrolled');
      
      // Mock scrollY value below threshold
      Object.defineProperty(window, 'scrollY', { value: 50, writable: true });
      
      // Trigger scroll event
      window.dispatchEvent(new Event('scroll'));
      
      expect(document.body.classList.contains('scrolled')).toBe(false);
    });
  });

  describe('Mobile Navigation', () => {
    beforeEach(() => {
      app.init();
    });

    it('should toggle mobile navigation when button is clicked', () => {
      const toggleBtn = document.querySelector('.mobile-nav-toggle') as HTMLElement;
      
      // Click to open
      toggleBtn.click();
      expect(document.body.classList.contains('mobile-nav-active')).toBe(true);
      expect(toggleBtn.getAttribute('aria-expanded')).toBe('true');
      
      // Click to close
      toggleBtn.click();
      expect(document.body.classList.contains('mobile-nav-active')).toBe(false);
      expect(toggleBtn.getAttribute('aria-expanded')).toBe('false');
    });

    it('should close mobile nav when nav link is clicked', () => {
      const toggleBtn = document.querySelector('.mobile-nav-toggle') as HTMLElement;
      const navLink = document.querySelector('#navmenu a') as HTMLElement;
      
      // Open mobile nav
      toggleBtn.click();
      expect(document.body.classList.contains('mobile-nav-active')).toBe(true);
      
      // Click nav link
      navLink.click();
      expect(document.body.classList.contains('mobile-nav-active')).toBe(false);
    });

    it('should close mobile nav when escape key is pressed', () => {
      const toggleBtn = document.querySelector('.mobile-nav-toggle') as HTMLElement;
      
      // Open mobile nav
      toggleBtn.click();
      expect(document.body.classList.contains('mobile-nav-active')).toBe(true);
      
      // Press escape key
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
      expect(document.body.classList.contains('mobile-nav-active')).toBe(false);
    });
  });

  describe('Plugin Initialization', () => {
    it('should initialize AOS with correct configuration', () => {
      app.init();
      expect(global.AOS.init).toHaveBeenCalledWith({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
      });
    });

    it('should initialize Typed with data from DOM', () => {
      app.init();
      expect(global.Typed).toHaveBeenCalled();
    });

    it('should initialize PureCounter', () => {
      app.init();
      expect(global.PureCounter).toHaveBeenCalled();
    });
  });

  describe('Cleanup', () => {
    it('should clean up resources when destroyed', () => {
      const consoleSpy = vi.spyOn(console, 'info');
      app.init();
      app.destroy();
      
      expect(consoleSpy).toHaveBeenCalledWith('Portfolio application destroyed');
    });

    it('should not handle scroll events after destruction', () => {
      app.init();
      app.destroy();
      
      // Mock scrollY value
      Object.defineProperty(window, 'scrollY', { value: 150, writable: true });
      
      // Trigger scroll event
      window.dispatchEvent(new Event('scroll'));
      
      // Should not add scrolled class since app is destroyed
      expect(document.body.classList.contains('scrolled')).toBe(false);
    });
  });

  describe('Error Handling', () => {
    it('should handle missing DOM elements gracefully', () => {
      // Remove required elements
      const header = document.querySelector('#header');
      header?.remove();
      
      const consoleSpy = vi.spyOn(console, 'error');
      
      expect(() => app.init()).not.toThrow();
      expect(consoleSpy).toHaveBeenCalledWith(
        'Failed to initialize portfolio application:',
        expect.any(Error)
      );
    });
  });
});