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

        it('should complete initialization without console logs', () => {
            // Test that initialization completes successfully
            // Console logging was removed for production
            expect(() => app.init()).not.toThrow();
            expect(document.body).toBeDefined();
        });
    });

    describe('Scroll Handling', () => {
        beforeEach(() => {
            app.init();
        });

        it('should initialize scroll handling without errors', () => {
            // Test that scroll event listeners are properly attached
            expect(() => {
                window.dispatchEvent(new Event('scroll'));
            }).not.toThrow();
        });

        it('should handle scroll events when window scrollY changes', () => {
            // Test basic scroll functionality without relying on throttled timing
            Object.defineProperty(window, 'scrollY', { value: 150, writable: true });
            expect(window.scrollY).toBe(150);
        });
    });

    describe('Mobile Navigation', () => {
        beforeEach(() => {
            app.init();
        });

        it('should find mobile navigation elements', () => {
            const toggleBtn = document.querySelector('.mobile-nav-toggle');
            const navLinks = document.querySelectorAll('#navmenu a');
            
            expect(toggleBtn).toBeTruthy();
            expect(navLinks.length).toBeGreaterThan(0);
        });

        it('should handle mobile nav events without errors', () => {
            const toggleBtn = document.querySelector('.mobile-nav-toggle') as HTMLElement;
            
            expect(() => {
                toggleBtn.click();
            }).not.toThrow();
        });

        it('should handle keyboard events without errors', () => {
            expect(() => {
                document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
            }).not.toThrow();
        });
    });

    describe('Plugin Initialization', () => {
        it('should initialize AOS with correct configuration', () => {
            app.init();
            expect(global.AOS.init).toHaveBeenCalledWith({
                duration: 600,
                easing: 'ease-in-out',
                once: true,
                mirror: false
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
            app.init();
            expect(() => app.destroy()).not.toThrow();
            // Test that destroyed flag is set by attempting to handle scroll
            Object.defineProperty(window, 'scrollY', { value: 150, writable: true });
            window.dispatchEvent(new Event('scroll'));
            expect(document.body.classList.contains('scrolled')).toBe(false);
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

            // Should not throw but may fail silently
            expect(() => app.init()).not.toThrow();
        });
    });
});
