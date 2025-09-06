// Environment configuration
// Update the .env file to change these values for different deployments

export const environment = {
  // Basic configuration
  production: false, // Set to true for production builds
  
  // API Configuration - Change this based on your deployment
  apiUrl: 'http://localhost:4000', // Your backend API URL
  
  // Application Info
  appName: 'Dhananjay Sahu Portfolio',
  version: '1.0.0',
  
  // Feature Flags
  enableLogging: true,  // Set to false for production
  enableDebugMode: true // Set to false for production
};

