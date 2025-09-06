// Environment configuration
// Update the .env file to change these values for different deployments

export const environment = {
  // Basic configuration
  production: false, // Set to true for production builds
  
  // API Configuration
  apiUrl: 'http://localhost:4000', // Your backend API URL
  apiTimeout: 10000, // Request timeout in milliseconds
  
  // Application Info
  appName: 'Dhananjay Sahu Portfolio',
  version: '1.0.0',
  author: 'Dhananjay Sahu',
  siteUrl: 'http://localhost:4200',
  
  // Feature Flags
  enableLogging: true,  // Set to false for production
  enableDebugMode: true, // Set to false for production
  
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

