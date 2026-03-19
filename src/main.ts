/**
 * Portfolio Website Main Entry Point
 * Modern TypeScript implementation with industry standards
 *
 * @author Akshay Baiplawat
 * @version 2.0.0
 */

import './styles/main.css';
import { getProjectById, getNextProject, type ProjectData } from './data/projects';

// Type definitions
interface NavigationConfig {
    readonly mobileBreakpoint: number;
    readonly scrollThreshold: number;
}

interface PortfolioApp {
    init(): void;
    destroy(): void;
}

class PortfolioApplication implements PortfolioApp {
    private readonly config: NavigationConfig = {
        mobileBreakpoint: 768,
        scrollThreshold: 100
    };

    private mobileNavToggleBtn: HTMLElement | null = null;
    private header: HTMLElement | null = null;
    private body: HTMLElement | null = null;
    private navLinks: NodeListOf<HTMLElement> | null = null;
    private portfolioModal: HTMLElement | null = null;
    private modalSwiper: any = null;
    private currentProjectId: string | null = null;

    private isDestroyed = false;

    constructor() {
        this.handleScroll = this.handleScroll.bind(this);
        this.handleMobileNavToggle = this.handleMobileNavToggle.bind(this);
        this.handleNavLinkClick = this.handleNavLinkClick.bind(this);
    }

    /**
     * Initialize the application
     */
    public init(): void {
        try {
            this.cacheElements();
            this.bindEvents();
            this.initializePlugins();
            this.initContactForm();
            this.initResumeDownload();
            this.handleInitialState();

            // Portfolio application initialized successfully
        } catch (error) {
            // Failed to initialize portfolio application
        }
    }

    /**
     * Cache DOM elements for better performance
     */
    private cacheElements(): void {
        this.body = document.body;
        this.header = document.querySelector('#header');
        this.mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
        this.navLinks = document.querySelectorAll('#navmenu a');

        if (!this.body || !this.header) {
            throw new Error('Required DOM elements not found');
        }
    }

    /**
     * Bind event listeners
     */
    private bindEvents(): void {
        // Scroll events with throttling
        document.addEventListener('scroll', this.throttle(this.handleScroll, 16) as EventListener);
        window.addEventListener('load', this.handleScroll);

        // Mobile navigation toggle
        if (this.mobileNavToggleBtn) {
            this.mobileNavToggleBtn.addEventListener('click', this.handleMobileNavToggle);
        }

        // Navigation link clicks
        if (this.navLinks) {
            this.navLinks.forEach(link => {
                link.addEventListener('click', this.handleNavLinkClick);
            });
        }

        // Escape key for mobile nav
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && this.isMobileNavActive()) {
                this.closeMobileNav();
            }
        });
    }

    /**
     * Handle scroll events - toggle scrolled class and header behavior
     */
    private handleScroll(): void {
        if (this.isDestroyed || !this.body || !this.header) return;

        const shouldAddScrolledClass = window.scrollY > this.config.scrollThreshold;
        const hasScrolledClass = this.body.classList.contains('scrolled');

        if (shouldAddScrolledClass && !hasScrolledClass) {
            this.body.classList.add('scrolled');
        } else if (!shouldAddScrolledClass && hasScrolledClass) {
            this.body.classList.remove('scrolled');
        }
    }

    /**
     * Handle mobile navigation toggle
     */
    private handleMobileNavToggle(): void {
        if (!this.body || !this.mobileNavToggleBtn) return;

        const isActive = this.isMobileNavActive();

        if (isActive) {
            this.closeMobileNav();
        } else {
            this.openMobileNav();
        }
    }

    /**
     * Handle navigation link clicks
     */
    private handleNavLinkClick(): void {
        if (this.isMobileNavActive()) {
            this.closeMobileNav();
        }
    }

    /**
     * Open mobile navigation
     */
    private openMobileNav(): void {
        if (!this.body || !this.mobileNavToggleBtn) return;

        this.body.classList.add('mobile-nav-active');
        this.mobileNavToggleBtn.classList.remove('bi-list');
        this.mobileNavToggleBtn.classList.add('bi-x');
        this.mobileNavToggleBtn.setAttribute('aria-expanded', 'true');
    }

    /**
     * Close mobile navigation
     */
    private closeMobileNav(): void {
        if (!this.body || !this.mobileNavToggleBtn) return;

        this.body.classList.remove('mobile-nav-active');
        this.mobileNavToggleBtn.classList.remove('bi-x');
        this.mobileNavToggleBtn.classList.add('bi-list');
        this.mobileNavToggleBtn.setAttribute('aria-expanded', 'false');
    }

    /**
     * Check if mobile navigation is active
     */
    private isMobileNavActive(): boolean {
        return this.body?.classList.contains('mobile-nav-active') ?? false;
    }

    /**
     * Initialize third-party plugins
     */
    private initializePlugins(): void {
        this.initializeAOS();
        this.initializeTyped();
        this.initializePureCounter();
        this.initializeGLightbox();
        this.initializeIsotope();
        this.initializeSwiper();
        this.initializePortfolioDetails();
    }

    /**
     * Initialize AOS (Animate On Scroll)
     */
    private initializeAOS(): void {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 600,
                easing: 'ease-in-out',
                once: true,
                mirror: false
            });
        }
    }

    /**
     * Initialize Typed.js for text animation
     */
    private initializeTyped(): void {
        const typedElement = document.querySelector('.typed');
        if (typedElement && typeof Typed !== 'undefined') {
            const typedItems = typedElement.getAttribute('data-typed-items');
            if (typedItems) {
                new Typed('.typed', {
                    strings: typedItems.split(',').map(item => item.trim()),
                    loop: true,
                    typeSpeed: 100,
                    backSpeed: 50,
                    backDelay: 2000
                });
            }
        }
    }

    /**
     * Initialize PureCounter for number animations
     */
    private initializePureCounter(): void {
        if (typeof PureCounter !== 'undefined') {
            new PureCounter();
        }
    }

    /**
     * Initialize GLightbox for portfolio gallery
     */
    private initializeGLightbox(): void {
        if (typeof GLightbox !== 'undefined') {
            GLightbox({
                selector: '.glightbox'
            });
        }
    }

    /**
     * Initialize Isotope for portfolio filtering
     */
    private initializeIsotope(): void {
        const portfolioContainer = document.querySelector('.isotope-container');
        const portfolioFilters = document.querySelectorAll('.portfolio-filters li');

        if (portfolioContainer && typeof Isotope !== 'undefined') {
            let portfolioIsotope: any;

            const initIsotope = (): void => {
                portfolioIsotope = new Isotope(portfolioContainer, {
                    itemSelector: '.portfolio-item',
                    layoutMode: 'masonry'
                });
            };

            // Initialize after images load
            if (typeof imagesLoaded !== 'undefined') {
                imagesLoaded(portfolioContainer, initIsotope);
            } else {
                initIsotope();
            }

            // Portfolio filter event listeners
            portfolioFilters.forEach(filter => {
                filter.addEventListener('click', e => {
                    e.preventDefault();
                    const filterValue = filter.getAttribute('data-filter') || '*';

                    // Update active filter
                    portfolioFilters.forEach(f => f.classList.remove('filter-active'));
                    filter.classList.add('filter-active');

                    // Apply filter
                    if (portfolioIsotope) {
                        portfolioIsotope.arrange({ filter: filterValue });
                    }
                });
            });
        }
    }

    /**
     * Initialize Swiper for testimonials
     */
    private initializeSwiper(): void {
        if (typeof Swiper !== 'undefined') {
            const swiperElements = document.querySelectorAll('.swiper:not(.portfolio-details-slider)');
            swiperElements.forEach(() => {
                new Swiper('.swiper:not(.portfolio-details-slider)', {
                    loop: true,
                    speed: 600,
                    autoplay: {
                        delay: 5000
                    },
                    slidesPerView: 'auto',
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true
                    }
                });
            });
        }
    }

    /**
     * Initialize Portfolio Details Modal
     */
    private initializePortfolioDetails(): void {
        this.portfolioModal = document.getElementById('portfolioDetailsModal');
        if (!this.portfolioModal) return;

        // Set up click handlers for portfolio detail triggers
        const triggers = document.querySelectorAll('.portfolio-details-trigger');
        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                const projectId = trigger.getAttribute('data-project-id');
                if (projectId) {
                    this.openProjectModal(projectId);
                }
            });
        });

        // Handle modal hidden event to clean up Swiper
        this.portfolioModal.addEventListener('hidden.bs.modal', () => {
            this.destroyModalSwiper();
        });

        // Handle "Next Project" button click
        const nextProjectBtn = document.getElementById('nextProjectBtn');
        if (nextProjectBtn) {
            nextProjectBtn.addEventListener('click', () => {
                if (this.currentProjectId) {
                    const nextProject = getNextProject(this.currentProjectId);
                    this.populateModalContent(nextProject);
                }
            });
        }
    }

    /**
     * Open the portfolio details modal with project data
     */
    private openProjectModal(projectId: string): void {
        const project = getProjectById(projectId);
        if (!project) return;

        this.populateModalContent(project);
    }

    /**
     * Populate modal content with project data
     */
    private populateModalContent(project: ProjectData): void {
        this.currentProjectId = project.id;

        // Update slider images
        const sliderWrapper = document.getElementById('portfolioSliderWrapper');
        if (sliderWrapper) {
            sliderWrapper.innerHTML = project.galleryImages
                .map(img => `<div class="swiper-slide"><img src="${img}" alt="${project.title}" class="img-fluid"></div>`)
                .join('');
        }

        // Update technology tags
        const techTags = document.getElementById('portfolioTechTags');
        if (techTags) {
            techTags.innerHTML = project.technologies
                .map(tech => `<span class="badge bg-light text-dark me-2 mb-2">${tech}</span>`)
                .join('');
        }

        // Update project info
        const categoryEl = document.getElementById('portfolioCategory');
        if (categoryEl) categoryEl.textContent = project.categoryLabel;

        const dateEl = document.getElementById('portfolioDate');
        if (dateEl) dateEl.textContent = project.date;

        const titleEl = document.getElementById('portfolioTitle');
        if (titleEl) titleEl.textContent = project.title;

        const clientEl = document.getElementById('portfolioClient');
        if (clientEl) {
            if (project.client) {
                clientEl.style.display = 'block';
                const clientSpan = clientEl.querySelector('span');
                if (clientSpan) clientSpan.textContent = project.client;
            } else {
                clientEl.style.display = 'none';
            }
        }

        const descEl = document.getElementById('portfolioDescription');
        if (descEl) descEl.textContent = project.description;

        // Update accordion sections
        const overviewEl = document.getElementById('portfolioOverview');
        if (overviewEl) overviewEl.textContent = project.overview;

        const challengeEl = document.getElementById('portfolioChallenge');
        if (challengeEl) challengeEl.textContent = project.challenge;

        const solutionEl = document.getElementById('portfolioSolution');
        if (solutionEl) solutionEl.textContent = project.solution;

        // Update features
        const featuresEl = document.getElementById('portfolioFeatures');
        if (featuresEl) {
            featuresEl.innerHTML = project.features
                .map(feature => `
                    <div class="col-md-6 mb-2">
                        <div class="d-flex align-items-center">
                            <i class="bi bi-check-circle-fill text-primary me-2"></i>
                            <span>${feature}</span>
                        </div>
                    </div>
                `)
                .join('');
        }

        // Update action buttons
        const liveUrlBtn = document.getElementById('portfolioLiveUrl') as HTMLAnchorElement;
        if (liveUrlBtn) {
            if (project.liveUrl && project.liveUrl !== '#') {
                liveUrlBtn.href = project.liveUrl;
                liveUrlBtn.style.display = 'inline-block';
            } else {
                liveUrlBtn.style.display = 'none';
            }
        }

        const githubBtn = document.getElementById('portfolioGithubUrl') as HTMLAnchorElement;
        if (githubBtn) {
            if (project.githubUrl && project.githubUrl !== '#') {
                githubBtn.href = project.githubUrl;
                githubBtn.style.display = 'inline-block';
            } else {
                githubBtn.style.display = 'none';
            }
        }

        // Initialize or reinitialize Swiper for modal
        this.initModalSwiper();

        // Reset accordion to show overview by default
        this.resetAccordion();
    }

    /**
     * Initialize Swiper for the modal carousel
     */
    private initModalSwiper(): void {
        // Destroy existing Swiper if any
        this.destroyModalSwiper();

        if (typeof Swiper !== 'undefined') {
            // Small delay to ensure DOM is updated
            setTimeout(() => {
                const swiperOptions = {
                    loop: true,
                    speed: 600,
                    autoplay: {
                        delay: 5000
                    },
                    slidesPerView: 1,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                };
                this.modalSwiper = new Swiper('.portfolio-details-slider', swiperOptions as any);
            }, 100);
        }
    }

    /**
     * Destroy modal Swiper instance
     */
    private destroyModalSwiper(): void {
        if (this.modalSwiper) {
            this.modalSwiper.destroy(true, true);
            this.modalSwiper = null;
        }
    }

    /**
     * Reset accordion to show overview section
     */
    private resetAccordion(): void {
        // Collapse all
        const collapseElements = document.querySelectorAll('#portfolioAccordion .accordion-collapse');
        collapseElements.forEach(el => {
            el.classList.remove('show');
        });

        const accordionButtons = document.querySelectorAll('#portfolioAccordion .accordion-button');
        accordionButtons.forEach(btn => {
            btn.classList.add('collapsed');
            btn.setAttribute('aria-expanded', 'false');
        });

        // Show overview
        const overviewCollapse = document.getElementById('collapseOverview');
        const overviewButton = document.querySelector('[data-bs-target="#collapseOverview"]');
        if (overviewCollapse) {
            overviewCollapse.classList.add('show');
        }
        if (overviewButton) {
            overviewButton.classList.remove('collapsed');
            overviewButton.setAttribute('aria-expanded', 'true');
        }
    }

    /**
     * Handle initial application state
     */
    private handleInitialState(): void {
        // Set initial scroll state
        this.handleScroll();

        // Set initial accessibility attributes
        if (this.mobileNavToggleBtn) {
            this.mobileNavToggleBtn.setAttribute('aria-expanded', 'false');
            this.mobileNavToggleBtn.setAttribute('aria-label', 'Toggle navigation menu');
        }
    }

    /**
     * Throttle function for performance optimization
     */
    private throttle(func: Function, limit: number): Function {
        let inThrottle: boolean;
        return function (this: any, ...args: any[]) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => (inThrottle = false), limit);
            }
        };
    }

    /**
     * Clean up event listeners and resources
     */
    public destroy(): void {
        this.isDestroyed = true;

        // Remove event listeners
        document.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('load', this.handleScroll);

        if (this.mobileNavToggleBtn) {
            this.mobileNavToggleBtn.removeEventListener('click', this.handleMobileNavToggle);
        }

        if (this.navLinks) {
            this.navLinks.forEach(link => {
                link.removeEventListener('click', this.handleNavLinkClick);
            });
        }

        // Portfolio application destroyed
    }

    /**
     * Handle contact form submission
     */
    private initContactForm(): void {
        const contactForm = document.querySelector('.contact-form-submission') as HTMLFormElement;
        if (!contactForm) return;

        contactForm.addEventListener('submit', e => {
            e.preventDefault();

            const loadingDiv = contactForm.querySelector('.loading') as HTMLElement;
            const errorDiv = contactForm.querySelector('.error-message') as HTMLElement;
            const successDiv = contactForm.querySelector('.sent-message') as HTMLElement;
            const submitBtn = contactForm.querySelector(
                'button[type="submit"]'
            ) as HTMLButtonElement;

            // Show loading state
            loadingDiv.style.display = 'block';
            errorDiv.style.display = 'none';
            successDiv.style.display = 'none';
            submitBtn.disabled = true;

            // Submit form data to FormSubmit
            const formData = new FormData(contactForm);

            fetch(contactForm.action, {
                method: 'POST',
                body: formData
            })
                .then(() => {
                    // FormSubmit always returns success for valid submissions
                    loadingDiv.style.display = 'none';
                    successDiv.style.display = 'block';
                    contactForm.reset();

                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        successDiv.style.display = 'none';
                    }, 5000);

                    submitBtn.disabled = false;
                })
                .catch(() => {
                    loadingDiv.style.display = 'none';
                    errorDiv.style.display = 'block';
                    errorDiv.textContent =
                        'There was an error sending your message. Please try again.';

                    // Hide error message after 7 seconds
                    setTimeout(() => {
                        errorDiv.style.display = 'none';
                    }, 7000);

                    submitBtn.disabled = false;
                });
        });
    }

    /**
     * Handle resume download with email tracking
     */
    private initResumeDownload(): void {
        const confirmDownloadBtn = document.getElementById('confirmDownload');
        if (!confirmDownloadBtn) return;

        confirmDownloadBtn.addEventListener('click', () => {
            const form = document.getElementById('resumeDownloadForm') as HTMLFormElement;
            const emailInput = document.getElementById('downloaderEmail') as HTMLInputElement;
            const nameInput = document.getElementById('downloaderName') as HTMLInputElement;
            const messageInput = document.getElementById(
                'downloaderMessage'
            ) as HTMLTextAreaElement;

            const loadingDiv = document.querySelector('.loading-download') as HTMLElement;
            const errorDiv = document.querySelector('.error-download') as HTMLElement;

            // Validate email
            if (!emailInput.value || !emailInput.checkValidity()) {
                errorDiv.style.display = 'block';
                errorDiv.textContent = 'Please enter a valid email address.';
                return;
            }

            // Show loading
            loadingDiv.style.display = 'block';
            errorDiv.style.display = 'none';
            confirmDownloadBtn.setAttribute('disabled', 'true');

            // Attempt tracking but don't block download on failure
            try {
                fetch('https://formsubmit.co/ajax/akshaybaiplawat@gmail.com', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json'
                    },
                    body: JSON.stringify({
                        _subject: 'Resume Downloaded - Notification for Akshay',
                        _template: 'table',
                        _captcha: 'false',
                        downloader_email: emailInput.value,
                        downloader_name: nameInput.value || 'Not provided',
                        downloader_message: messageInput.value || 'No message',
                        download_timestamp: new Date().toLocaleString(),
                        download_type: 'Resume PDF'
                    })
                }).catch(() => {
                    // Tracking failed silently - don't block download
                });
            } catch {
                // Tracking setup failed - continue with download
            }

            // Hide loading
            loadingDiv.style.display = 'none';

            // Start download regardless of tracking status
            const downloadLink = document.createElement('a');
            const basePath = import.meta.env.BASE_URL || '/';
            downloadLink.href = `${basePath}assets/documents/Akshay_Baiplawat_Resume.pdf`;
            downloadLink.download = 'Akshay_Baiplawat_Resume.pdf';
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);

            // Show success toast
            this.showDownloadSuccess(emailInput.value);

            // Reset form and close modal
            form.reset();
            confirmDownloadBtn.removeAttribute('disabled');

            setTimeout(() => {
                const modal = document.getElementById('resumeDownloadModal');
                const closeButton = modal?.querySelector('.btn-close') as HTMLElement;
                if (closeButton) {
                    closeButton.click();
                }
            }, 1500);
        });
    }

    /**
     * Show success message after resume download
     */
    private showDownloadSuccess(email: string): void {
        // Create and show a temporary success message
        const successAlert = document.createElement('div');
        successAlert.className = 'alert alert-success alert-dismissible fade show position-fixed';
        successAlert.style.top = '20px';
        successAlert.style.right = '20px';
        successAlert.style.zIndex = '9999';
        successAlert.style.maxWidth = '400px';
        successAlert.innerHTML = `
      <div class="d-flex align-items-center">
        <i class="bi bi-check-circle-fill me-2"></i>
        <div>
          <strong>Download Started!</strong><br>
          <small>Confirmation sent to ${email}</small>
        </div>
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
      </div>
    `;

        document.body.appendChild(successAlert);

        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (successAlert.parentNode) {
                successAlert.parentNode.removeChild(successAlert);
            }
        }, 5000);
    }
}

// Initialize application when DOM is ready
const initializeApp = (): void => {
    const app = new PortfolioApplication();
    app.init();

    // Cleanup on page unload
    window.addEventListener('beforeunload', () => {
        app.destroy();
    });
};

// DOM ready state check
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

// Export for potential external use
export { PortfolioApplication };
export default PortfolioApplication;
