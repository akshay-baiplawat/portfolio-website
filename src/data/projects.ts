/**
 * Portfolio Project Data
 * Contains all project information for the portfolio details modal
 */

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
}

export const projects: ProjectData[] = [
    {
        id: 'movie-list-website',
        title: 'Movie List Website',
        category: 'filter-ui',
        categoryLabel: 'Web Application',
        date: 'January 2024',
        client: 'Personal Project',
        mainImage: 'assets/images/portfolio-1.webp',
        galleryImages: [
            'assets/images/portfolio-1.webp',
            'assets/images/portfolio-2.webp',
            'assets/images/portfolio-4.webp',
            'assets/images/portfolio-5.webp'
        ],
        technologies: ['React', 'TypeScript', 'REST API', 'CSS3', 'Vite'],
        description: 'A modern web application for browsing and managing movie collections with a sleek user interface.',
        overview: 'This web application provides users with an intuitive interface to browse, search, and manage their movie collections. Built with modern frontend technologies, it offers a responsive design that works seamlessly across all devices.',
        challenge: 'The main challenge was creating a fast, responsive interface that could handle large datasets while maintaining smooth animations and transitions. Additionally, implementing efficient search and filtering mechanisms was crucial for user experience.',
        solution: 'Implemented virtual scrolling for large lists, used React Query for efficient data caching, and created a modular component architecture for maintainability. The search functionality uses debouncing to optimize API calls.',
        features: [
            'Advanced search and filtering',
            'Responsive design',
            'User watchlist management',
            'Movie recommendations',
            'Rating system',
            'Dark/Light mode'
        ],
        liveUrl: '#',
        githubUrl: '#'
    },
    {
        id: 'learn-algo',
        title: 'Learn ALGO',
        category: 'filter-development',
        categoryLabel: 'Algorithm Visualization',
        date: 'March 2024',
        client: 'Educational Platform',
        mainImage: 'assets/images/portfolio-10.webp',
        galleryImages: [
            'assets/images/portfolio-10.webp',
            'assets/images/portfolio-11.webp',
            'assets/images/portfolio-7.webp',
            'assets/images/portfolio-8.webp'
        ],
        technologies: ['JavaScript', 'D3.js', 'HTML5 Canvas', 'CSS Animations', 'Node.js'],
        description: 'Interactive platform for learning data structures and algorithms through visual demonstrations.',
        overview: 'Learn ALGO is an educational platform designed to make learning data structures and algorithms engaging and intuitive. Through interactive visualizations, users can see how different algorithms work step by step.',
        challenge: 'Creating smooth, educational animations that accurately represent algorithm execution while being easy to understand for beginners was the primary challenge. Balancing performance with visual complexity required careful optimization.',
        solution: 'Used D3.js for complex visualizations and HTML5 Canvas for performance-intensive animations. Implemented a step-by-step execution mode allowing users to control the visualization speed and pause at any point.',
        features: [
            'Step-by-step visualization',
            'Multiple algorithm categories',
            'Code alongside visualization',
            'Performance comparisons',
            'Interactive tutorials',
            'Progress tracking'
        ],
        liveUrl: '#',
        githubUrl: '#'
    },
    {
        id: 'employee-management-system',
        title: 'Employee Management System',
        category: 'filter-photography',
        categoryLabel: 'Console Application',
        date: 'December 2023',
        client: 'Academic Project',
        mainImage: 'assets/images/portfolio-7.webp',
        galleryImages: [
            'assets/images/portfolio-7.webp',
            'assets/images/portfolio-8.webp',
            'assets/images/portfolio-10.webp',
            'assets/images/portfolio-11.webp'
        ],
        technologies: ['C++', 'OOP', 'File I/O', 'Data Structures', 'STL'],
        description: 'Console-based application for managing employee records using object-oriented programming principles.',
        overview: 'A comprehensive employee management system built in C++ that demonstrates strong understanding of object-oriented programming concepts. The system handles CRUD operations for employee data with file persistence.',
        challenge: 'Designing a clean, maintainable architecture using OOP principles while ensuring data integrity and efficient file operations was challenging. Memory management and preventing data corruption during file operations required careful attention.',
        solution: 'Implemented a modular design using classes for different entities, used RAII principles for resource management, and created a robust file handling system with backup mechanisms to prevent data loss.',
        features: [
            'Employee CRUD operations',
            'Search and filter functionality',
            'Data persistence to files',
            'Input validation',
            'Report generation',
            'Backup system'
        ]
    },
    {
        id: 'duck-hunt-game',
        title: 'Duck-Hunt Game',
        category: 'filter-marketing',
        categoryLabel: 'Game Development',
        date: 'August 2023',
        client: 'Personal Project',
        mainImage: 'assets/images/portfolio-4.webp',
        galleryImages: [
            'assets/images/portfolio-4.webp',
            'assets/images/portfolio-5.webp',
            'assets/images/portfolio-1.webp',
            'assets/images/portfolio-2.webp'
        ],
        technologies: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'Web Audio API', 'Sprite Animation'],
        description: 'Classic arcade-style game recreation demonstrating game development skills and UI design.',
        overview: 'A modern recreation of the classic Duck Hunt arcade game, built entirely with web technologies. Features smooth animations, sound effects, and responsive controls for an authentic gaming experience.',
        challenge: 'Recreating the nostalgic feel of the original game while adding modern touches was the main challenge. Implementing smooth sprite animations and accurate hit detection required precise timing and collision algorithms.',
        solution: 'Used HTML5 Canvas for rendering with requestAnimationFrame for smooth 60fps gameplay. Implemented a sprite sheet animation system and polygon-based hit detection for accurate shooting mechanics.',
        features: [
            'Smooth sprite animations',
            'Sound effects',
            'Score tracking',
            'Multiple difficulty levels',
            'Responsive controls',
            'High score leaderboard'
        ],
        liveUrl: '#'
    },
    {
        id: 'zoho-assist-agent',
        title: 'ZOHO Assist Windows Agent',
        category: 'filter-ui',
        categoryLabel: 'Windows Software',
        date: 'June 2024',
        client: 'ZOHO Corporation',
        mainImage: 'assets/images/portfolio-2.webp',
        galleryImages: [
            'assets/images/portfolio-2.webp',
            'assets/images/portfolio-1.webp',
            'assets/images/portfolio-10.webp',
            'assets/images/portfolio-11.webp'
        ],
        technologies: ['C++', 'Win32 API', 'Windows Services', 'Socket Programming', 'Registry'],
        description: 'Professional remote access solution developed for enterprise environments.',
        overview: 'A Windows-native remote access agent developed as part of the ZOHO Assist suite. This software enables secure remote desktop connections, file transfers, and system diagnostics for IT support teams.',
        challenge: 'Building a reliable Windows service that operates seamlessly across different Windows versions while maintaining security and performance standards. Handling various network configurations and firewall rules was particularly challenging.',
        solution: 'Developed using modern C++ with Win32 APIs for deep system integration. Implemented a robust reconnection mechanism, encrypted communication channels, and efficient screen capture algorithms.',
        features: [
            'Remote desktop access',
            'Secure file transfer',
            'System diagnostics',
            'Multi-monitor support',
            'Session recording',
            'Unattended access'
        ],
        liveUrl: 'https://www.zoho.com/assist/'
    },
    {
        id: 'session-audit-feature',
        title: 'Session Audit Feature',
        category: 'filter-development',
        categoryLabel: 'Performance Optimization',
        date: 'September 2024',
        client: 'ZOHO Corporation',
        mainImage: 'assets/images/portfolio-11.webp',
        galleryImages: [
            'assets/images/portfolio-11.webp',
            'assets/images/portfolio-10.webp',
            'assets/images/portfolio-2.webp',
            'assets/images/portfolio-7.webp'
        ],
        technologies: ['C++', 'Performance Profiling', 'Windows API', 'SQLite', 'Logging'],
        description: 'Performance optimization feature for enterprise software, improving system efficiency.',
        overview: 'A comprehensive session auditing system that tracks and analyzes remote support sessions. This feature provides detailed insights into session performance, user activities, and system resource usage.',
        challenge: 'Implementing detailed logging without impacting the performance of live remote sessions was critical. Managing large volumes of audit data while ensuring quick retrieval for reporting required careful database design.',
        solution: 'Created an asynchronous logging system with buffered writes to minimize I/O impact. Used SQLite with optimized indexes for efficient data storage and retrieval. Implemented data compression for long-term storage.',
        features: [
            'Real-time session tracking',
            'Performance metrics',
            'Activity timeline',
            'Export capabilities',
            'Compliance reporting',
            'Resource usage analysis'
        ]
    },
    {
        id: 'nature-collection',
        title: 'Nature Collection',
        category: 'filter-photography',
        categoryLabel: 'Photography',
        date: 'October 2024',
        client: 'Personal Portfolio',
        mainImage: 'assets/images/portfolio-8.webp',
        galleryImages: [
            'assets/images/portfolio-8.webp',
            'assets/images/portfolio-7.webp',
            'assets/images/portfolio-5.webp',
            'assets/images/portfolio-4.webp'
        ],
        technologies: ['Photography', 'Lightroom', 'Photoshop', 'Color Grading', 'Composition'],
        description: 'Photography portfolio showcasing technical composition and artistic vision.',
        overview: 'A curated collection of nature photography capturing the beauty of natural landscapes and wildlife. Each photograph demonstrates technical proficiency in composition, lighting, and post-processing.',
        challenge: 'Capturing the essence of nature while dealing with unpredictable lighting conditions and wildlife behavior. Achieving consistent quality across different environments and seasons required adaptability.',
        solution: 'Developed a systematic approach to photography including golden hour planning, use of ND filters, and a consistent post-processing workflow in Lightroom to maintain visual cohesion across the collection.',
        features: [
            'Landscape photography',
            'Wildlife captures',
            'Golden hour shots',
            'Macro photography',
            'Long exposure',
            'HDR techniques'
        ]
    },
    {
        id: 'brand-strategy',
        title: 'Brand Strategy',
        category: 'filter-marketing',
        categoryLabel: 'Marketing',
        date: 'November 2024',
        client: 'Freelance Project',
        mainImage: 'assets/images/portfolio-5.webp',
        galleryImages: [
            'assets/images/portfolio-5.webp',
            'assets/images/portfolio-4.webp',
            'assets/images/portfolio-1.webp',
            'assets/images/portfolio-8.webp'
        ],
        technologies: ['Figma', 'Adobe Illustrator', 'Brand Guidelines', 'UI/UX Design', 'Marketing'],
        description: 'Professional brand development focusing on visual identity and strategic marketing.',
        overview: 'A comprehensive brand strategy project that includes logo design, color palette development, typography selection, and brand guidelines documentation for a startup company.',
        challenge: 'Creating a unique brand identity that stands out in a competitive market while accurately representing the company\'s values and target audience. Balancing creativity with practical application was key.',
        solution: 'Conducted thorough market research and competitor analysis. Developed multiple concept directions before refining the final identity. Created extensive brand guidelines ensuring consistent application.',
        features: [
            'Logo design system',
            'Color palette',
            'Typography guidelines',
            'Brand voice',
            'Marketing materials',
            'Social media templates'
        ]
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
