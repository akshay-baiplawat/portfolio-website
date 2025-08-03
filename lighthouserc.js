module.exports = {
    ci: {
        collect: {
            url: ['https://akshay-baiplawat.github.io/portfolio-website/']
            // Remove local server commands since we're testing the live GitHub Pages site
        },
        assert: {
            assertions: {
                'categories:performance': ['error', { minScore: 0.9 }],
                'categories:accessibility': ['error', { minScore: 0.9 }],
                'categories:best-practices': ['error', { minScore: 0.9 }],
                'categories:seo': ['error', { minScore: 0.9 }],
                'categories:pwa': ['warn', { minScore: 0.6 }]
            }
        },
        upload: {
            target: 'temporary-public-storage'
        }
    }
};
