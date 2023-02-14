module.exports = {
    ci: {
        collect: {
            /* Add configuration here */
            startServerCommand: 'npm run start',
            url: ['https://localhost:7139/'],
            numberOfRuns: 2
        },
        assert: {
            assertions: {
                'categories:performance': ['error', { minScore: 0.93 }],
                'categories:accessibility': ['error', { minScore: 0.93 }],
                'categories:seo': ['error', { minScore: 0.93 }],
                'categories:best-practices': ['error', { minScore: 0.93 }]
            }
        },
        upload: {
            /* Add configuration here */
            target: 'temporary-public-storage',
        },
    },
};