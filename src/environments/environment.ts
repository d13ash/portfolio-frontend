export const environment = {
  production: true,
  apiUrl: 'https://dash-crm-backend.onrender.com',
  
  getApiEndpoint: (path: string) => {
    return environment.production 
      ? `${environment.apiUrl}${path}`
      : path;
  }
};

