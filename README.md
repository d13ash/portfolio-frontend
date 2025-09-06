# 🚀 Dhananjay Sahu Portfolio - Frontend

A modern, responsive portfolio website built with Angular, featuring a comprehensive admin panel for content management. Showcase your projects, blog posts, skills, achievements, and contact information with an elegant, professional design.

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Technology Stack](#️-technology-stack)
- [📁 Project Structure](#-project-structure)
- [🚀 Quick Start](#-quick-start)
- [⚙️ Configuration](#️-configuration)
- [🌐 Deployment](#-deployment)
- [🔧 Environment Variables](#-environment-variables)
- [📚 API Integration](#-api-integration)
- [🎨 Customization](#-customization)
- [🧪 Testing](#-testing)
- [📖 Usage Guide](#-usage-guide)

## ✨ Features

### 🎯 Public Portfolio
- **Responsive Homepage** with hero section, skills showcase, and featured content
- **Project Gallery** with detailed project pages, technologies, and live demos
- **Blog System** with rich content support and Markdown rendering
- **Skills & Achievements** dynamically managed and beautifully displayed
- **Contact Links** with smart email handling and social media integration
- **Modern UI/UX** with Tailwind CSS and smooth animations

### 🔐 Admin Panel
- **Secure Authentication** with JWT-based login system
- **Project Management** - Create, edit, delete, and organize projects
- **Blog Management** - Full CRUD operations for blog posts with Markdown support
- **Skills Management** - Categorized skill system with visual indicators
- **Achievement Management** - Certifications and accomplishments tracking
- **Contact Management** - Social media and contact link administration
- **File Upload** - Image upload system for project covers and blog images
- **Real-time Preview** - Live preview of content changes

### 🏗️ Technical Features
- **Server-Side Rendering (SSR)** for optimal SEO and performance
- **Progressive Web App (PWA)** capabilities
- **Environment-based Configuration** for different deployment stages
- **Proxy Configuration** for seamless API integration
- **Responsive Design** that works perfectly on all devices
- **TypeScript** for type safety and better development experience

## 🛠️ Technology Stack

### Frontend Framework
- **Angular 18.2** - Modern TypeScript framework
- **Angular SSR** - Server-side rendering for SEO optimization
- **TypeScript 5.5** - Type-safe development
- **RxJS 7.8** - Reactive programming with Observables

### Styling & UI
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Tailwind Typography** - Beautiful typography plugin
- **SCSS** - Enhanced CSS with variables and mixins
- **Responsive Design** - Mobile-first approach

### Content & Forms
- **Reactive Forms** - Angular's powerful form handling
- **ngx-markdown** - Markdown rendering support
- **File Upload** - Image upload with preview functionality
- **Form Validation** - Comprehensive client-side validation

### Development Tools
- **Angular CLI 18.2** - Command-line interface
- **Karma & Jasmine** - Testing framework
- **PostCSS & Autoprefixer** - CSS processing
- **Environment Configuration** - Multi-environment support

## 📁 Project Structure

```
portfolio-frontend/
│
├── src/
│   ├── app/
│   │   ├── admin/                    # Admin panel module
│   │   │   ├── components/
│   │   │   │   ├── admin-layout/     # Admin dashboard layout
│   │   │   │   ├── login/            # Authentication component
│   │   │   │   ├── project-manager/  # Project CRUD operations
│   │   │   │   ├── project-form/     # Project creation/editing
│   │   │   │   ├── blog-manager/     # Blog CRUD operations
│   │   │   │   ├── blog-form/        # Blog creation/editing
│   │   │   │   ├── contact-manager/  # Contact link management
│   │   │   │   ├── contact-form/     # Contact creation/editing
│   │   │   │   ├── skill-manager/    # Skills management
│   │   │   │   └── achievement-manager/ # Achievements management
│   │   │   ├── admin-routing.module.ts
│   │   │   └── admin.module.ts
│   │   │
│   │   ├── components/               # Public components
│   │   │   ├── home/                 # Homepage component
│   │   │   ├── navbar/               # Navigation component
│   │   │   ├── project-list/         # Projects gallery
│   │   │   ├── project-detail/       # Individual project view
│   │   │   ├── blog-list/            # Blog posts listing
│   │   │   └── blog-detail/          # Individual blog post
│   │   │
│   │   ├── models/                   # TypeScript interfaces
│   │   │   ├── project.model.ts
│   │   │   ├── blog.model.ts
│   │   │   ├── skill.model.ts
│   │   │   ├── achievement.model.ts
│   │   │   └── contact.model.ts
│   │   │
│   │   ├── services/                 # Business logic & API calls
│   │   │   ├── project.service.ts
│   │   │   ├── blog.service.ts
│   │   │   ├── skill.service.ts
│   │   │   ├── achievement.service.ts
│   │   │   ├── contact.service.ts
│   │   │   ├── auth.service.ts
│   │   │   ├── auth.guard.ts
│   │   │   └── upload.service.ts
│   │   │
│   │   ├── pipes/                    # Custom pipes
│   │   └── app-routing.module.ts
│   │
│   ├── environments/                 # Environment configurations
│   │   ├── environment.ts           # Development environment
│   │   ├── environment.prod.ts      # Production environment
│   │   └── environment.staging.ts   # Staging environment
│   │
│   ├── styles.scss                  # Global styles
│   ├── index.html                   # Main HTML template
│   ├── main.ts                      # Application bootstrap
│   └── main.server.ts               # SSR bootstrap
│
├── proxy.conf.js                    # Development proxy configuration
├── tailwind.config.js               # Tailwind CSS configuration
├── angular.json                     # Angular CLI configuration
├── package.json                     # Dependencies and scripts
└── tsconfig.json                    # TypeScript configuration
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18.x or higher
- **npm** 9.x or higher
- **Angular CLI** 18.x (`npm install -g @angular/cli`)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   copy .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development server**
   ```bash
   npm run start:dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:4200`

### Development Commands

```bash
# Development server
npm start                    # Development server
npm run build               # Production build
npm run build:prod          # Production build

# Testing
npm test                    # Run unit tests

# Other
npm run watch               # Build in watch mode
npm run serve:ssr           # Serve SSR build
```

## ⚙️ Configuration

### Environment Variables

The application uses a single `.env` file that you update based on your deployment environment:

**Development (`.env`)**
```bash
NODE_ENV=development
NG_APP_API_URL=http://localhost:4000
NG_APP_NAME=Dhananjay Sahu Portfolio
NG_APP_VERSION=1.0.0
NG_APP_ENABLE_LOGGING=true
NG_APP_ENABLE_DEBUG=true
NG_APP_SITE_URL=http://localhost:4200
NG_APP_AUTHOR=Dhananjay Sahu
```

**Production (update the same `.env` file)**
```bash
NODE_ENV=production
NG_APP_API_URL=https://your-production-api.com
NG_APP_NAME=Dhananjay Sahu Portfolio
NG_APP_VERSION=1.0.0
NG_APP_ENABLE_LOGGING=false
NG_APP_ENABLE_DEBUG=false
NG_APP_SITE_URL=https://your-domain.com
NG_APP_AUTHOR=Dhananjay Sahu
```

### Environment Configuration

The `environment.ts` file reads from your `.env` configuration:

```typescript
export const environment = {
  production: false, // Set to true for production
  apiUrl: 'http://localhost:4000', // Update in .env file
  appName: 'Dhananjay Sahu Portfolio',
  version: '1.0.0',
  enableLogging: true,  // Set to false for production
  enableDebugMode: true // Set to false for production
};
```

### Proxy Configuration

The `proxy.conf.js` file handles API routing during development:

```javascript
const PROXY_CONFIG = {
  "/api": {
    "target": process.env['DEV_API_URL'] || "http://localhost:4000",
    "secure": process.env['NODE_ENV'] === 'production',
    "changeOrigin": true,
    "logLevel": "debug"
  }
};
```

## 🌐 Deployment

### Quick Deployment Steps

1. **Update `.env` file** with your production settings
2. **Build the application**: `npm run build:prod`
3. **Deploy the `dist/portfolio-frontend` folder**

### Frontend-Only Deployment (Static Hosting)

**For platforms like Netlify, Vercel, GitHub Pages:**

1. **Update your `.env` file** with production settings:
   ```bash
   NODE_ENV=production
   NG_APP_API_URL=https://your-api-domain.com
   NG_APP_ENABLE_LOGGING=false
   NG_APP_ENABLE_DEBUG=false
   NG_APP_SITE_URL=https://your-domain.com
   ```

2. **Build the application**
   ```bash
   npm run build:prod
   ```

3. **Deploy the `dist/portfolio-frontend` folder**

### Full-Stack Deployment (with SSR)

**For platforms like Heroku, DigitalOcean, AWS:**

1. **Update your `.env` file** with production settings

2. **Build for production**
   ```bash
   npm run build:prod
   ```

2. **Start the SSR server**
   ```bash
   npm run serve:ssr:portfolio-frontend
   ```

3. **Configure your hosting platform** to run the Node.js server

### Docker Deployment

Create a `Dockerfile`:

```dockerfile
# Build stage
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build:prod

# Production stage
FROM node:18-alpine
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY package*.json ./
RUN npm ci --only=production
EXPOSE 4000
CMD ["npm", "run", "serve:ssr:portfolio-frontend"]
```

### Platform-Specific Guides

#### Netlify
1. Connect your repository
2. Build command: `npm run build:prod`
3. Publish directory: `dist/portfolio-frontend`
4. **Update `.env` file** before building with production settings

#### Vercel
1. Import project from Git
2. Framework preset: Angular
3. Build command: `npm run build:prod`
4. Output directory: `dist/portfolio-frontend`
5. **Update `.env` file** before deploying

#### Heroku
1. **Update `.env` file** with production settings
2. Create `Procfile`:
   ```
   web: npm run serve:ssr:portfolio-frontend
   ```
3. Deploy via Git or GitHub integration

## 🔧 Environment Variables

### Single .env File Configuration

Update your `.env` file based on your deployment environment:

### Development
```bash
NODE_ENV=development
NG_APP_API_URL=http://localhost:4000
NG_APP_NAME=Dhananjay Sahu Portfolio
NG_APP_VERSION=1.0.0
NG_APP_ENABLE_LOGGING=true
NG_APP_ENABLE_DEBUG=true
NG_APP_SITE_URL=http://localhost:4200
NG_APP_AUTHOR=Dhananjay Sahu
```

### Production
```bash
NODE_ENV=production
NG_APP_API_URL=https://your-production-api.com
NG_APP_NAME=Dhananjay Sahu Portfolio
NG_APP_VERSION=1.0.0
NG_APP_ENABLE_LOGGING=false
NG_APP_ENABLE_DEBUG=false
NG_APP_SITE_URL=https://your-domain.com
NG_APP_AUTHOR=Dhananjay Sahu
```

### Required Backend API Endpoints

Your backend should provide these endpoints:

```
GET    /api/projects              # List all projects
GET    /api/projects/:id          # Get project by ID
POST   /api/projects              # Create project (auth required)
PUT    /api/projects/:id          # Update project (auth required)
DELETE /api/projects/:id          # Delete project (auth required)

GET    /api/blogs                 # List all blog posts
GET    /api/blogs/:id             # Get blog post by ID
POST   /api/blogs                 # Create blog post (auth required)
PUT    /api/blogs/:id             # Update blog post (auth required)
DELETE /api/blogs/:id             # Delete blog post (auth required)

GET    /api/skills                # List all skills
POST   /api/skills                # Create skill (auth required)
PUT    /api/skills/:id            # Update skill (auth required)
DELETE /api/skills/:id            # Delete skill (auth required)

GET    /api/achievements          # List all achievements
POST   /api/achievements          # Create achievement (auth required)
PUT    /api/achievements/:id      # Update achievement (auth required)
DELETE /api/achievements/:id      # Delete achievement (auth required)

GET    /api/contacts              # List all contacts
POST   /api/contacts              # Create contact (auth required)
PUT    /api/contacts/:id          # Update contact (auth required)
DELETE /api/contacts/:id          # Delete contact (auth required)

POST   /api/auth/login            # User authentication
POST   /api/upload                # File upload (auth required)
```

## 🎨 Customization

### Theme Colors
Edit `tailwind.config.js` to customize the color scheme:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',    // Indigo
        secondary: '#059669',   // Teal
        accent: '#DC2626',      // Red
      }
    }
  }
}
```

### Styling
- Global styles: `src/styles.scss`
- Component-specific styles: Each component has its own `.scss` file
- Tailwind utilities: Used throughout templates for rapid development

### Content Management
1. **Log in to admin panel**: `/admin`
2. **Manage content** through the intuitive dashboard
3. **Changes reflect immediately** on the public site

## 🧪 Testing

### Running Tests
```bash
# Unit tests
npm test

# Test with coverage
npm run test:coverage

# End-to-end tests (if configured)
npm run e2e
```

### Test Structure
- Unit tests: `*.spec.ts` files alongside components
- Service tests: Test API interactions and business logic
- Component tests: Test UI behavior and user interactions

## 📖 Usage Guide

### Admin Panel Access
1. Navigate to `/admin`
2. Log in with your credentials
3. Use the sidebar to manage different content types

### Content Management
- **Projects**: Add your portfolio projects with images, descriptions, and technologies
- **Blog Posts**: Write and publish blog posts with Markdown support
- **Skills**: Organize your technical skills by categories
- **Achievements**: Showcase certifications and accomplishments
- **Contacts**: Manage your social media and contact links

### SEO Optimization
- The application includes SSR for better search engine visibility
- Meta tags are dynamically generated for each page
- Structured data can be added for rich snippets

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/your-username/portfolio-frontend/issues) page
2. Create a new issue with detailed information
3. Contact: dhananjaysahu377@gmail.com

## 🙏 Acknowledgments

- **Angular Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Open Source Community** for the inspiration and tools

---

**Built with ❤️ by Dhananjay Sahu**

*Ready to showcase your amazing work to the world!* 🚀

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
