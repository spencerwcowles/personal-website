# Personal Portfolio Website

A modern, interactive portfolio website built with Next.js and Tailwind CSS. This portfolio showcases my professional experience, personal projects, and interests in a dynamic and engaging way.

## Features

- Responsive design optimized for all devices
- Modern UI with Tailwind CSS and custom animations
- Interactive project showcase with detailed descriptions
- Album carousel showcasing personal interests
- Professional experience timeline
- Personal goals and achievements section
- Social media integration
- Dark/Light mode support with next-themes
- Smooth animations with Framer Motion
- TypeScript support for enhanced type safety
- Parallax background effects for visual depth

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion for animations
- next-themes for dark/light mode
- React Icons for iconography
- clsx and tailwind-merge for conditional styling
- Headless UI for accessible components

## Project Structure

```
src/
├── app/           # Next.js app router pages
│   ├── page.js    # Main page component
│   └── layout.js  # Root layout with providers
├── components/    # React components
│   ├── ui/        # Reusable UI components
│   ├── Navbar.jsx # Navigation component
│   ├── HeroSection.jsx # Landing section
│   ├── Projects.jsx # Project showcase
│   ├── Experience.jsx # Professional timeline
│   ├── GoalsSection.tsx # Personal goals
│   ├── StravaWidget.tsx # Strava integration
│   ├── AlbumCarousel.tsx # Photo showcase
│   └── ...        # Other components
├── lib/          # Library configurations and data
│   ├── projects.json # Project data
│   ├── albums.ts # Album data
│   └── utils.ts  # Utility functions
└── styles/       # Global styles and Tailwind config
```

## Key Components

- **Navigation**: Responsive navbar with theme toggle and mobile menu
- **Hero Section**: Dynamic landing section with animated text and parallax effects
- **Projects**: Interactive grid layout with detailed project cards and filtering
- **Experience**: Professional timeline showcasing work history and achievements
- **Goals**: Personal development and career objectives
- **Strava Integration**: Real-time fitness activity tracking
- **Album Carousel**: Interactive music album gallery with smooth transitions
- **Footer**: Social media links and contact information

## Design Features

- Dark/Light mode with smooth transitions
- Parallax scrolling effects
- Responsive image optimization
- Modern typography and spacing
- Consistent color scheme throughout
- Smooth page transitions and hover effects
- Accessible UI components
- Performance optimized animations

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## Deployment

The site is optimized for deployment on Vercel, but can be deployed to any platform that supports Next.js applications.
