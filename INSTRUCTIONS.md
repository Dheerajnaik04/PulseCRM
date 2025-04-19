# Technix CRM - Setup Instructions

## Project Overview

This project is a modern CRM website redesign built with Next.js, React, and Tailwind CSS. The site includes all the required features:

1. Dynamic Hero Section with rotating highlights and CTAs
2. Product Overview section highlighting key CRM modules
3. Use Cases / Target User Section
4. Fully Functional "Get a Demo" Form with validation
5. Modern Footer with navigation, contact info, and social links
6. Performance optimized code and assets
7. Comprehensive Style Guide for typography, colors, and components
8. Custom CSS (no Bootstrap)
9. Fully responsive across all screen sizes

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
# or
yarn install
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Key Features

### Dynamic Hero Section
- Rotating highlights that change every 3 seconds
- Responsive design with custom gradients
- Multiple call-to-action buttons

### Product Overview
- Animated cards for each feature
- Responsive grid layout
- Icon integration with HeroIcons

### Demo Form
- Client-side validation
- Success/error states
- Responsive layout

### Style Guide
- Access it at [http://localhost:3000/style-guide](http://localhost:3000/style-guide)
- Comprehensive documentation of colors, typography, spacing, and components

## Project Structure

```
src/
  ├── app/               # Next.js app directory
  │   ├── layout.tsx     # Root layout
  │   ├── page.tsx       # Home page
  │   ├── globals.css    # Global styles
  │   └── style-guide/   # Style guide page
  │       └── page.tsx
  │
  ├── components/        # Reusable components
  │   ├── Header.tsx     # Navigation header
  │   ├── HeroSection.tsx# Hero section with rotating highlights
  │   ├── ProductOverview.tsx # Features section
  │   ├── UseCases.tsx   # Industry use cases
  │   ├── DemoForm.tsx   # Interactive demo request form
  │   ├── Footer.tsx     # Site footer
  │   └── StyleGuide.tsx # Style guide component
  │
  └── types/             # TypeScript type definitions
      └── env.d.ts       # Environment type declarations
```

## Performance Optimization

The website has been optimized for performance:

1. Minimal JavaScript with client components only where needed
2. Efficient animations using Framer Motion
3. Responsive images and layouts
4. Tailwind CSS for minimal CSS footprint
5. Component-based architecture for code reuse

## Mobile Responsiveness

The website is fully responsive and optimized for:
- Mobile phones (320px and up)
- Tablets (768px and up)
- Desktops (1024px and up)
- Large screens (1280px and up)

All components adapt seamlessly to different screen sizes using Tailwind's responsive classes.

## Style Guide

To view the comprehensive style guide:

1. Start the development server
2. Navigate to [http://localhost:3000/style-guide](http://localhost:3000/style-guide)

The style guide includes:
- Typography system
- Color palette
- Spacing system
- UI components
- Form elements

## Additional Notes

- The form submission is simulated for the demo
- In a production environment, the form would connect to a backend API
- All social media links in the footer are placeholder links 