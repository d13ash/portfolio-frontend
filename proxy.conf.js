// Environment-based proxy configuration
const environment = process.env['NODE_ENV'] || 'development';

// Define different API targets based on environment
const getApiTarget = () => {
  switch (environment) {
    case 'production':
      return process.env['PROD_API_URL'] || 'https://your-production-api.com';
    case 'staging':
      return process.env['STAGING_API_URL'] || 'https://staging-api.yourapp.com';
    case 'development':
    default:
      return process.env['DEV_API_URL'] || 'http://localhost:4000';
  }
};

const PROXY_CONFIG = {
  "/api": {
    "target": getApiTarget(),
    "secure": environment === 'production',
    "changeOrigin": true,
    "logLevel": environment === 'development' ? "debug" : "info",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  }
};

console.log(`🚀 Proxy configured for ${environment} environment`);
console.log(`📡 API Target: ${getApiTarget()}`);

module.exports = PROXY_CONFIG;
