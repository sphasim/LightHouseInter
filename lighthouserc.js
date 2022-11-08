module.exports = {
    ci: {
        collect: {
            /* Add configuration here */
            startServerCommand: 'npm run start',
            url: ['https://localhost:7139/'],
            numberOfRuns: 5
        },
        assert: {
            assertions: {
                'categories:performance': ['warn', { minScore: 1 }],
                'categories:accessibility': ['error', { minScore: 1 }]
            }
        },
        upload: {
            /* Add configuration here */
            target: 'temporary-public-storage',
        },
    },
};