# PulseCRM

![PulseCRM Hero](https://raw.githubusercontent.com/yourusername/pulse-crm/main/public/images/readme-hero.png)

## Project Overview

PulseCRM is the heartbeat of modern business relationships. This sleek, powerful customer relationship management platform is designed to help businesses capture, nurture, and convert leads with an intuitive interface built for today's digital-first teams.

Key features include:

- **Dynamic Hero Section** with animated stats and 3D elements
- **Complete Features Showcase** highlighting key CRM capabilities
- **Interactive Demo Form** with validation and backend integration
- **Responsive Design** optimized for all devices
- **Modern UI** with subtle animations and a professional aesthetic
- **Performance-Optimized** codebase for quick loading and smooth interactions

This project was built with a focus on clean code, performance, and modern design principles. The blue, white, and orange color palette reflects trust, clarity, and innovation while maintaining a professional and approachable tone.

## Live Demo

Visit the live site: [pulse-crm.vercel.app](https://pulse-crm.vercel.app)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Form Handling**: React Hook Form
- **Deployment**: Vercel
- **Build Tools**: ESLint, Prettier

### Key Dependencies

```json
"dependencies": {
  "next": "14.0.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "framer-motion": "^10.16.4",
  "react-intersection-observer": "^9.5.2",
  "@heroicons/react": "^2.0.18",
  "tailwindcss": "^3.3.3",
  "typescript": "^5.2.2"
}
```

## Setup Instructions

### Prerequisites

- Node.js (v18.17 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/pulse-crm.git
   cd pulse-crm
   ```

2. Install the dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Build for Production

```bash
npm run build
# or
yarn build
```

### Deployment

The project is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Import the project to Vercel
3. Vercel will automatically detect Next.js and set up the build configuration
4. Click "Deploy" and your site will be live in minutes

## Project Structure

```
pulse-crm/
├── public/             # Static assets
├── src/                # Source files
│   ├── app/            # Next.js App Router
│   ├── components/     # React components
│   │   ├── ui/         # UI components
│   │   └── ...         # Feature components
│   ├── lib/            # Utility functions
│   └── styles/         # Global styles
├── .eslintrc.json      # ESLint configuration
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project dependencies
```

## Key Components

- **HeroSection**: Dynamic hero with 3D animated elements
- **EnhancedFeaturesSection**: Showcases key CRM capabilities
- **DemoForm**: Validates and processes demo requests
- **Header**: Responsive navigation with scroll effects
- **Card3D**: Reusable 3D card component with hover effects
- **Page3D**: 3D page transitions and effects

## Customization

### Color Scheme

The color scheme can be modified in the `tailwind.config.ts` file:

```typescript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ...other shades
    600: '#0284c7',  // Primary brand color
    // ...other shades
  },
  'accent-orange': '#f97316',
  'accent-orange-dark': '#c2410c',
  'accent-orange-light': '#ffedd5',
}
```

### Typography

Font settings can be adjusted in the `tailwind.config.ts` file:

```typescript
fontFamily: {
  sans: ['Poppins', 'Roboto', 'sans-serif'],
  heading: ['Poppins', 'sans-serif'],
  body: ['Roboto', 'sans-serif'],
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Credits

This project uses the following open-source tools and resources:

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Heroicons](https://heroicons.com/) - SVG icons
- [Google Fonts](https://fonts.google.com/) - Poppins & Roboto fonts

Special thanks to:

- [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer) for scroll animations
- [TailwindUI](https://tailwindui.com/) for design inspiration (no components were directly copied)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Project Link: [https://github.com/yourusername/pulse-crm](https://github.com/yourusername/pulse-crm)

---

Made with ❤️ by Dheeraj/Devguru
