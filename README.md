# NOVA Digital Agency - Next.js 14

A modern digital agency website built with Next.js 14, React, and Tailwind CSS.

## Features

- **Next.js 14** with App Router
- **Tailwind CSS** for styling
- **TypeScript** for type safety
- **AOS (Animate On Scroll)** for animations
- Fully responsive design
- Modern UI/UX

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── service/           # Service page
│   ├── contact/           # Contact page
│   └── login/             # Login page
├── components/            # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── AboutUs.tsx
│   ├── Service.tsx
│   ├── PortfolioSection.tsx
│   ├── Testimonial.tsx
│   ├── ContactSection.tsx
│   ├── aboutpage/         # About page components
│   ├── servicepage/       # Service page components
│   ├── contactpage/       # Contact page components
│   └── loginpage/         # Login page components
├── public/                # Static assets
│   └── images/           # Image files
└── ...
```

## Build for Production

```bash
npm run build
# or
yarn build
```

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

## Notes

- The project uses Next.js Image component for optimized images.
- All images are located in the `public/images` folder.
- This is a pure Next.js project - no Laravel dependencies.
