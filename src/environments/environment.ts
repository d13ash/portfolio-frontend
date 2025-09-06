// Environment configuration
// Update the .env file to change these values for different deployments

export const environment = {
  // Basic configuration
  production: true, // Set to true for production builds
  
  // API Configuration - Use environment variables or fallback
  apiUrl: (typeof process !== 'undefined' && process.env) 
    ? (process.env['NG_APP_API_URL'] || 'https://dash-crm-backend.onrender.com')
    : 'https://dash-crm-backend.onrender.com',
  apiTimeout: 10000, // Request timeout in milliseconds
  
  // Application Info
  appName: (typeof process !== 'undefined' && process.env) 
    ? (process.env['NG_APP_NAME'] || 'Dhananjay Sahu Portfolio')
    : 'Dhananjay Sahu Portfolio',
  version: (typeof process !== 'undefined' && process.env)
    ? (process.env['NG_APP_VERSION'] || '1.0.0')
    : '1.0.0',
  author: (typeof process !== 'undefined' && process.env)
    ? (process.env['NG_APP_AUTHOR'] || 'Dhananjay Sahu')
    : 'Dhananjay Sahu',
  siteUrl: (typeof process !== 'undefined' && process.env)
    ? (process.env['NG_APP_SITE_URL'] || 'https://dash-porfolio.netlify.app')
    : 'https://dash-porfolio.netlify.app',
  
  // Feature Flags
  enableLogging: (typeof process !== 'undefined' && process.env)
    ? (process.env['NG_APP_ENABLE_LOGGING'] === 'true')
    : false,
  enableDebugMode: (typeof process !== 'undefined' && process.env)
    ? (process.env['NG_APP_ENABLE_DEBUG'] === 'true')  
    : false,
  
  // File Upload Configuration
  maxFileSize: 5242880, // 5MB in bytes
  
  // Helper method to get API endpoint
  getApiEndpoint: (path: string) => {
    // In development, use relative paths (proxy handles routing)
    // In production, use full API URL
    return environment.production 
      ? `${environment.apiUrl}${path}`
      : path;
  }
};

