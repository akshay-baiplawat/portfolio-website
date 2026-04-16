/**
 * Portfolio Project Data
 * Contains all project information for the portfolio details modal
 */

// Import all project images so Vite can process them correctly
import financeTracker1 from '../../assets/images/finance-tracker-1.jpeg';
import financeTracker2 from '../../assets/images/finance-tracker-2.jpeg';
import financeTracker3 from '../../assets/images/finance-tracker-3.jpeg';
import financeTracker4 from '../../assets/images/finance-tracker-4.jpeg';
import financeTracker5 from '../../assets/images/finance-tracker-5.jpeg';
import portfolio1 from '../../assets/images/portfolio-1.webp';
import portfolio2 from '../../assets/images/portfolio-2.webp';
import portfolio4 from '../../assets/images/portfolio-4.webp';
import portfolio5 from '../../assets/images/portfolio-5.webp';
import portfolio7 from '../../assets/images/portfolio-7.webp';
import portfolio8 from '../../assets/images/portfolio-8.webp';
import portfolio10 from '../../assets/images/portfolio-10.webp';
import portfolio11 from '../../assets/images/portfolio-11.webp';
import duckHunt from '../../assets/images/duck-hunt.png';

export interface ProjectData {
    id: string;
    title: string;
    category: string;
    categoryLabel: string;
    date: string;
    client?: string;
    mainImage: string;
    galleryImages: string[];
    technologies: string[];
    description: string;
    overview: string;
    challenge: string;
    solution: string;
    features: string[];
    liveUrl?: string;
    githubUrl?: string;
    linkedinUrl?: string;
    linkedinEmbedUrl?: string;
    livePreviewUrl?: string;
    youtubeEmbedUrl?: string;
    downloadUrl?: string;
}

export const projects: ProjectData[] = [
    {
        id: 'finance-tracker',
        title: 'Finance Tracker',
        category: 'filter-ui',
        categoryLabel: 'Mobile Application',
        date: 'December 2024',
        client: 'Personal Project',
        mainImage: financeTracker1,
        galleryImages: [
            financeTracker1,
            financeTracker2,
            financeTracker3,
            financeTracker4,
            financeTracker5
        ],
        technologies: [
            'Kotlin',
            'Jetpack Compose',
            'MVVM',
            'Clean Architecture',
            'SQLite',
            'WorkManager'
        ],
        description:
            'Privacy-centric Android finance tracking app with intelligent SMS parsing and automated transaction categorization.',
        overview:
            'Architected a GDPR/DPDP-compliant Android application using MVVM and Clean Architecture with Jetpack Compose and Kotlin Flow, ensuring 100% reactive data streams and zero-cloud-dependency for complete user privacy.',
        challenge:
            'Building an intelligent transaction tracking system that automatically parses banking SMS without compromising user privacy, while implementing complex debt settlement algorithms and maintaining >80% test coverage.',
        solution:
            'Engineered an intelligent SMS Parsing Engine with regex-based pattern matching and merchant normalization to automate transaction categorization for major Indian banks (HDFC, ICICI, SBI). Optimized group debt resolution by implementing a Greedy Settlement Algorithm, reducing transaction complexity from O(N²) to O(N).',
        features: [
            'Intelligent SMS parsing for automatic transaction detection',
            'Greedy Settlement Algorithm for debt optimization',
            'MVVM + Clean Architecture (Domain/Data/Presentation)',
            '180+ unit tests across 13 test suites',
            'Zero-cloud dependency for GDPR compliance',
            'Custom UI components with keyboard-aware bottom sheets',
            'WorkManager background sync with periodic reminders'
        ],
        githubUrl: 'https://github.com/akshay-baiplawat/Finance-Tracker',
        downloadUrl: 'assets/Finance_Tracker.apk'
    },
    {
        id: 'jarvis-ai',
        title: 'JARVIS: Multimodal AI Voice Assistant',
        category: 'filter-development',
        categoryLabel: 'AI Application',
        date: 'January 2025',
        client: 'Personal Project',
        mainImage: portfolio10,
        galleryImages: [portfolio10, portfolio11, portfolio7, portfolio8],
        technologies: ['Python', 'LiveKit Agents SDK', 'Gemini 2.5 Flash', 'WebRTC', 'Mem0', 'MCP'],
        description:
            'Real-time multimodal AI voice assistant with vision capabilities and persistent memory.',
        overview:
            'Architected a production-grade multimodal agent using LiveKit Agents SDK and WebRTC, orchestrating a low-latency STT → LLM → TTS pipeline with <1s perceived response time through Voice Activity Detection (VAD) and asynchronous thinking-state feedback.',
        challenge:
            'Creating a real-time voice assistant that can process visual context from asynchronous video streams while maintaining conversational flow and personalizing responses across sessions required complex pipeline orchestration and error handling.',
        solution:
            'Engineered a custom VisionAssistant class to process asynchronous video streams, automatically injecting real-time visual context into Gemini 2.5 Flash for vision-grounded reasoning. Integrated persistent memory layer using Mem0 and vector similarity search for cross-session personalization. Developed production-grade tool suite with defensive error handling for 6+ external APIs managing 8+ exception types.',
        features: [
            'Real-time STT → LLM → TTS pipeline with <1s latency',
            'Asynchronous video stream processing for visual context',
            'Persistent memory with Mem0 and vector similarity search',
            'Model Context Protocol (MCP) for Google Calendar and Gmail',
            'Voice Activity Detection with thinking-state feedback',
            'Test-Driven Development with LLM-as-judge evaluation',
            '99% session uptime with defensive error handling'
        ],
        githubUrl: 'https://github.com/akshay-baiplawat/jarvis-agent',
        linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7372653576822669312',
        linkedinEmbedUrl:
            'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7372653576822669312'
    },
    {
        id: 'portfolio-website',
        title: 'Professional Engineering Portfolio',
        category: 'filter-ui',
        categoryLabel: 'Web Application',
        date: 'November 2024',
        client: 'Personal Project',
        mainImage: portfolio2,
        galleryImages: [portfolio2, portfolio1, portfolio10, portfolio11],
        technologies: ['TypeScript', 'Vite', 'Bootstrap', 'GitHub Actions', 'Vitest', 'Trivy'],
        description:
            'High-performance portfolio platform with enterprise-grade CI/CD and security auditing.',
        overview:
            'Architected a high-performance platform using TypeScript 5.4 and Vite, implementing a Singleton-based OOP architecture and Plugin Facade pattern to manage 7+ integrations with explicit memory-leak prevention.',
        challenge:
            'Building a production-ready portfolio with automated quality gates, security scanning, and performance monitoring while maintaining 95+ Lighthouse scores and >80% code coverage required comprehensive CI/CD orchestration.',
        solution:
            'Engineered a 4-stage parallelized CI/CD pipeline via GitHub Actions, reducing deployment time by 40% while automating production-grade security audits via Trivy vulnerability scanning. Optimized system performance to achieve Lighthouse scores of 95+ utilizing Vitest for >80% code coverage and maintaining a <1.5s First Contentful Paint (FCP).',
        features: [
            'Singleton-based OOP with Plugin Facade pattern',
            '4-stage parallelized CI/CD pipeline',
            'Trivy security vulnerability scanning',
            'Lighthouse CI with 95+ scores',
            '>80% test coverage with Vitest',
            '<1.5s First Contentful Paint performance',
            'Memory leak prevention with explicit cleanup'
        ],
        liveUrl: 'https://akshay-baiplawat.github.io/portfolio-website/',
        githubUrl: 'https://github.com/akshay-baiplawat/portfolio-website',
        livePreviewUrl: 'https://akshay-baiplawat.github.io/portfolio-website/'
    },
    {
        id: 'employee-management',
        title: 'Employee Management Console Application',
        category: 'filter-development',
        categoryLabel: 'Desktop Application',
        date: 'March 2022',
        client: 'Academic Project',
        mainImage: portfolio4,
        galleryImages: [portfolio4, portfolio5, portfolio7, portfolio8],
        technologies: ['C++', 'OOP', 'Windows C++', 'CMake', 'Data Structures', 'Algorithms'],
        description:
            'Comprehensive console-based application for efficient employee data management with advanced search capabilities.',
        overview:
            'Developed a robust employee management system using C++ with object-oriented design principles, featuring efficient data retrieval and management through optimized file-based storage.',
        challenge:
            'Creating an efficient console application that could handle complex employee data queries with multiple filter criteria while maintaining fast search performance and data integrity without a database system.',
        solution:
            'Implemented advanced search capabilities with multiple filters using optimized data structures and algorithms. Designed a text-file-based persistence layer with efficient indexing for quick data sourcing and retrieval, enabling complex queries without database overhead.',
        features: [
            'Object-oriented architecture with modular design',
            'Advanced search with multi-criteria filtering',
            'Optimized text-file data persistence',
            'Efficient indexing for fast retrieval',
            'CMake build system for cross-platform support',
            'Console-based interactive UI',
            'Data validation and integrity checks'
        ],
        githubUrl: 'https://github.com/akshay-baiplawat'
    },
    {
        id: 'movie-list',
        title: 'Movie List',
        category: 'filter-ui',
        categoryLabel: 'Web Application',
        date: 'June 2022',
        client: 'Personal Project',
        mainImage: portfolio1,
        galleryImages: [portfolio1, portfolio2, portfolio10, portfolio11],
        technologies: [
            'React',
            'React Router',
            'Material UI',
            'JavaScript',
            'HTML',
            'CSS',
            'OMDB API'
        ],
        description:
            'Captivating movie listing website with seamless search functionality and detailed information on movies and web series.',
        overview:
            'Built a dynamic React-based movie discovery platform integrated with OMDB API, featuring a polished Material UI design and smooth client-side routing for an enhanced user experience.',
        challenge:
            'Designing an intuitive movie discovery interface that handles asynchronous API data fetching while providing real-time search feedback and maintaining responsive performance across devices.',
        solution:
            'Integrated OMDB API for comprehensive movie and TV series data retrieval. Implemented React Router for seamless navigation between pages and leveraged Material UI components for a consistent, responsive design. Added debounced search to optimize API calls and improve user experience.',
        features: [
            'Real-time movie and web series search',
            'OMDB API integration for comprehensive data',
            'Material UI for polished, responsive design',
            'React Router for smooth client-side navigation',
            'Detailed movie information pages',
            'Optimized API calls with debouncing',
            'Mobile-responsive layout'
        ],
        liveUrl: 'https://movies-list-akshay-baiplawat.netlify.app/',
        githubUrl: 'https://github.com/akshay-baiplawat/Movie-List',
        livePreviewUrl: 'https://movies-list-akshay-baiplawat.netlify.app/'
    },
    {
        id: 'learn-algo',
        title: 'Learn ALGO',
        category: 'filter-ui',
        categoryLabel: 'Web Application',
        date: 'September 2022',
        client: 'Educational Project',
        mainImage: portfolio5,
        galleryImages: [portfolio5, portfolio4, portfolio7, portfolio8],
        technologies: [
            'React',
            'p5.js',
            'JavaScript',
            'Data Structures',
            'Algorithms',
            'Canvas API'
        ],
        description:
            'Immersive web application for visualizing and learning algorithms through interactive animations.',
        overview:
            'Created an educational platform that brings algorithms to life through visual animations using React and p5.js, helping students understand complex algorithmic concepts through interactive visualizations.',
        challenge:
            'Translating abstract algorithmic concepts into engaging visual representations that accurately demonstrate step-by-step execution while maintaining 60fps performance for smooth animations.',
        solution:
            'Leveraged p5.js canvas rendering for high-performance visualizations. Implemented multiple algorithm categories including pathfinding (Dijkstra, A*), searching (Linear, Binary), sorting (Quick, Merge, Insertion, Bubble, Selection), and maze generation with step-by-step animation controls.',
        features: [
            'Multiple algorithm categories (pathfinding, search, sort)',
            'Step-by-step execution visualization',
            'Interactive controls (play, pause, speed adjustment)',
            'Dijkstra and A* pathfinding algorithms',
            'Linear and Binary search demonstrations',
            'Five sorting algorithms with comparisons',
            'Maze generation with randomized algorithms',
            'Smooth 60fps canvas animations with p5.js'
        ],
        liveUrl: 'https://www.youtube.com/watch?v=iKYWDnp2-kI',
        githubUrl: 'https://github.com/akshay-baiplawat/Learn-Algo',
        youtubeEmbedUrl: 'https://www.youtube.com/embed/iKYWDnp2-kI?si=5-1XsFRJBUi5W7Bx'
    },
    {
        id: 'duck-hunt',
        title: 'Duck-Hunt',
        category: 'filter-development',
        categoryLabel: 'Game Development',
        date: 'April 2022',
        client: 'Academic Project',
        mainImage: duckHunt,
        galleryImages: [duckHunt],
        technologies: ['Java', 'ACM Graphics', 'Multi-threading', 'OOP', 'Game Mechanics'],
        description:
            'Single-player arcade shooting game inspired by the classic 80s duck hunt with dynamic difficulty.',
        overview:
            'Developed a retro-style arcade game using core Java and ACM Graphics library, featuring multi-threaded game mechanics for smooth concurrent animations and responsive player interactions.',
        challenge:
            "Implementing smooth concurrent animations for multiple moving targets while handling user input, collision detection, and progressive difficulty scaling, all within Java's single-threaded graphics constraints.",
        solution:
            'Utilized multi-threading to manage independent duck movements and animations concurrently. Implemented dynamic difficulty scaling with varying duck health, speed, and spawn patterns. Designed an interactive UI with 2D graphics using ACM library for classic arcade aesthetics.',
        features: [
            'Classic arcade-style shooting gameplay',
            'Multi-threaded game mechanics for smooth animations',
            'Dynamic difficulty with varying duck attributes',
            'Health and speed progression system',
            'Randomized duck spawn patterns',
            'Interactive 2D graphics with ACM library',
            'Collision detection and scoring system',
            'Retro 80s-inspired visual design'
        ],
        githubUrl: 'https://github.com/akshay-baiplawat'
    }
];

/**
 * Get a project by its ID
 */
export function getProjectById(id: string): ProjectData | undefined {
    return projects.find(project => project.id === id);
}

/**
 * Get the next project in the list (cycles back to first)
 */
export function getNextProject(currentId: string): ProjectData {
    const currentIndex = projects.findIndex(project => project.id === currentId);
    const nextIndex = (currentIndex + 1) % projects.length;
    return projects[nextIndex];
}

/**
 * Get the previous project in the list (cycles to last)
 */
export function getPreviousProject(currentId: string): ProjectData {
    const currentIndex = projects.findIndex(project => project.id === currentId);
    const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    return projects[prevIndex];
}
