/**
 * Portfolio Website Main Entry Point
 * Modern TypeScript implementation with industry standards
 * 
 * @author Akshay Baiplawat
 * @version 2.0.0
 */

import './styles/main.css';

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
    scrollThreshold: 100,
  };

  private mobileNavToggleBtn: HTMLElement | null = null;
  private header: HTMLElement | null = null;
  private body: HTMLElement | null = null;
  private navLinks: NodeListOf<HTMLElement> | null = null;

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
      
      console.info('Portfolio application initialized successfully');
    } catch (error) {
      console.error('Failed to initialize portfolio application:', error);
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
    document.addEventListener('keydown', (event) => {
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
        mirror: false,
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
          backDelay: 2000,
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
        selector: '.glightbox',
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
          layoutMode: 'masonry',
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
        filter.addEventListener('click', (e) => {
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
      const swiperElements = document.querySelectorAll('.swiper');
      swiperElements.forEach(() => {
        new Swiper('.swiper', {
          loop: true,
          speed: 600,
          autoplay: {
            delay: 5000,
          },
          slidesPerView: 'auto',
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          },
        });
      });
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
    return function(this: any) {
      if (!inThrottle) {
        func.apply(this, arguments);
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

    console.info('Portfolio application destroyed');
  }

  /**
   * Handle contact form submission
   */
  private initContactForm(): void {
    const contactForm = document.querySelector('.contact-form-submission') as HTMLFormElement;
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const loadingDiv = contactForm.querySelector('.loading') as HTMLElement;
      const errorDiv = contactForm.querySelector('.error-message') as HTMLElement;
      const successDiv = contactForm.querySelector('.sent-message') as HTMLElement;
      const submitBtn = contactForm.querySelector('button[type="submit"]') as HTMLButtonElement;
      
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
      }).then(() => {
        // FormSubmit always returns success for valid submissions
        loadingDiv.style.display = 'none';
        successDiv.style.display = 'block';
        contactForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          successDiv.style.display = 'none';
        }, 5000);
        
        submitBtn.disabled = false;
      }).catch(() => {
        loadingDiv.style.display = 'none';
        errorDiv.style.display = 'block';
        errorDiv.textContent = 'There was an error sending your message. Please try again.';
        
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

    confirmDownloadBtn.addEventListener('click', async () => {
      const form = document.getElementById('resumeDownloadForm') as HTMLFormElement;
      const emailInput = document.getElementById('downloaderEmail') as HTMLInputElement;
      const nameInput = document.getElementById('downloaderName') as HTMLInputElement;
      const messageInput = document.getElementById('downloaderMessage') as HTMLTextAreaElement;
      
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

      try {
        // Prepare tracking data
        const trackingData = new FormData();
        trackingData.append('_subject', 'Resume Downloaded - Notification for Akshay');
        trackingData.append('_template', 'table');
        trackingData.append('_captcha', 'false');
        trackingData.append('downloader_email', emailInput.value);
        trackingData.append('downloader_name', nameInput.value || 'Not provided');
        trackingData.append('downloader_message', messageInput.value || 'No message');
        trackingData.append('download_timestamp', new Date().toLocaleString());
        trackingData.append('download_type', 'Resume PDF');

        // Send tracking notification to your email
        const response = await fetch('https://formsubmit.co/akshaybaiplawat@gmail.com', {
          method: 'POST',
          body: trackingData
        });

        if (response.ok) {
          // Hide loading
          loadingDiv.style.display = 'none';
          
          // Start download
          const downloadLink = document.createElement('a');
          downloadLink.href = 'assets/documents/Akshay_Baiplawat_Resume.pdf';
          downloadLink.download = 'Akshay_Baiplawat_Resume.pdf';
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);

          // Show success toast (optional)
          this.showDownloadSuccess(emailInput.value);

          // Reset form and close modal
          form.reset();
          
          setTimeout(() => {
            const modal = document.getElementById('resumeDownloadModal');
            const closeButton = modal?.querySelector('.btn-close') as HTMLElement;
            if (closeButton) {
              closeButton.click();
            }
          }, 1500); // 1.5 second delay to ensure download starts and user sees success
        } else {
          throw new Error('Failed to track download');
        }
      } catch (error) {
        loadingDiv.style.display = 'none';
        errorDiv.style.display = 'block';
        errorDiv.textContent = 'Download tracking failed. Please try again.';
        console.error('Resume download tracking error:', error);
      } finally {
        confirmDownloadBtn.removeAttribute('disabled');
      }
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