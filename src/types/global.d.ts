/**
 * Global type declarations for third-party libraries
 */

// AOS (Animate On Scroll) types
declare global {
    interface AOSConfig {
        duration?: number;
        easing?: string;
        once?: boolean;
        mirror?: boolean;
    }

    const AOS: {
        init: (config?: AOSConfig) => void;
        refresh: () => void;
    };

    // Typed.js types
    interface TypedOptions {
        strings?: string[];
        loop?: boolean;
        typeSpeed?: number;
        backSpeed?: number;
        backDelay?: number;
    }

    class Typed {
        constructor(selector: string, options: TypedOptions);
    }

    // PureCounter types
    class PureCounter {
        constructor();
    }

    // GLightbox types
    interface GLightboxConfig {
        selector?: string;
    }

    const GLightbox: (config?: GLightboxConfig) => any;

    // Isotope types
    interface IsotopeOptions {
        itemSelector?: string;
        layoutMode?: string;
        filter?: string;
    }

    class Isotope {
        constructor(element: Element, options?: IsotopeOptions);
        arrange: (options: { filter: string }) => void;
    }

    // ImagesLoaded types
    const imagesLoaded: (element: Element, callback?: () => void) => void;

    // Swiper types
    interface SwiperOptions {
        loop?: boolean;
        speed?: number;
        autoplay?: {
            delay: number;
        };
        slidesPerView?: string | number;
        pagination?: {
            el: string;
            type: string;
            clickable: boolean;
        };
    }

    class Swiper {
        constructor(selector: string, options?: SwiperOptions);
    }

    // Vitest globals for testing
    namespace Vi {
        interface MockedFunction<T extends (...args: any[]) => any> {
            (...args: Parameters<T>): ReturnType<T>;
        }
    }

    // Window extensions
    interface Window {
        AOS: typeof AOS;
        Typed: typeof Typed;
        PureCounter: typeof PureCounter;
        GLightbox: typeof GLightbox;
        Isotope: typeof Isotope;
        imagesLoaded: typeof imagesLoaded;
        Swiper: typeof Swiper;
    }
}

export {};
