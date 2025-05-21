# Multi-Tenant SaaS CRM System

A modern Customer Relationship Management system built with React, supporting multiple tenants and comprehensive business management features.

## Features
- Multi-tenant support
- Contact management
- Deal tracking
- Task management
- Report generation and PDF export
- Dashboard analytics

## Technologies
- React
- Material-UI
- Axios for API calls

## Setup
1. Clone the repository
```bash
git clone https://github.com/YourUsername/Multi-Tenant-SaaS-CRM-System-front-end.git
cd Multi-Tenant-SaaS-CRM-System-front-end
```

2. Install dependencies
```bash
npm install
```

3. Create .env file with required variables:
```env
REACT_APP_SERVER_URL=http://localhost:8080
REACT_APP_VERSION=InDev 1.5.0-a1
```

4. Start the development server
```bash
npm start
```

## Available Scripts
- `npm start` - Runs development server
- `npm test` - Runs test suite
- `npm run build` - Creates production build

## Project Structure
```
src/
  ├── features/      # Core functionality
  ├── pages/         # Page components
  ├── utility/       # Utility functions
  └── components/    # Reusable components
```
