const basePath = '/api/v1';

export const API_PATHS = {
    AUTH: {
        REGISTER: `${basePath}/auth/register`,
        LOGIN: `${basePath}/auth/login`,
        ME: `${basePath}/auth/me`,
    },
    CATEGORIES: {
        LIST: `${basePath}/categories`,
        CREATE: `${basePath}/categories`,
        UPDATE: (id) => `${basePath}/categories/${id}`,
        DELETE: (id) => `${basePath}/categories/${id}`,
    },
    TRANSACTIONS: {
        LIST: `${basePath}/transactions`,
        CREATE: `${basePath}/transactions`,
        GET_BY_ID: (id) => `${basePath}/transactions/${id}`,
        UPDATE: (id) => `${basePath}/transactions/${id}`,
        DELETE: (id) => `${basePath}/transactions/${id}`,
        ANALYZE: `${basePath}/transactions/analyze`,
    },
    BUDGETS: {
        LIST: `${basePath}/budgets`,
        CREATE: `${basePath}/budgets`,
        UPDATE: (id) => `${basePath}/budgets/${id}`,
        DELETE: (id) => `${basePath}/budgets/${id}`,
        ANALYZE: `${basePath}/budgets/analyze`,
    },
    DASHBOARD: {
        SUMMARY: `${basePath}/dashboard/summary`,
        CATEGORY_BREAKDOWN: `${basePath}/dashboard/category-breakdown`,
        MONTHLY_TREND: `${basePath}/dashboard/monthly-trend`,
    },
    INSIGHTS: {
        LIST: `${basePath}/insights`,
        GENERATE: `${basePath}/insights/generate`,
    },
};

export default API_PATHS;
