// Simplified proxy configuration
const environment = process.env['NODE_ENV'] || 'development';
const apiUrl = process.env['NG_APP_API_URL'] || 'http://localhost:4000';

const PROXY_CONFIG = {
  "/api": {
    "target": apiUrl,
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
console.log(`📡 API Target: ${apiUrl}`);

module.exports = PROXY_CONFIG;
