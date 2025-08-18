# VorcaStudio Landing Page - Development Prompt

You are an expert frontend developer specializing in Next.js, Tailwind CSS, and shadcn/ui. Your task is to build a modern, responsive landing page for VorcaStudio based on the provided documentation.

## Technology Requirements
- Next.js 14 (using App Router)
- Tailwind CSS v4
- shadcn/ui components
- TypeScript
- Framer Motion for animations
- React Hook Form with Zod for form validation

## Project Structure
Follow the structure outlined in docs/04-technical-spesifications.md:
```
project-root/
├── app/                  # Next.js app directory
│   ├── components/       # Reusable components
│   ├── lib/              # Utility functions
│   ├── styles/           # Global styles
│   └── [...page]/        # Individual page routes
├── components/           # shadcn/ui components
├── public/               # Static assets
├── lib/                  # Business logic
├── styles/               # Global CSS files
├── types/                # TypeScript types
├── .eslintrc.json        # ESLint configuration
├── .prettierrc           # Prettier configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
```

## Pages to Implement
Create the following pages as outlined in docs/08-project-roadmap.md:

1. **Home Page** (`/`)
   - Hero section with headline, subheadline, and CTAs
   - Services section showcasing 4 core services
   - Pricing section with 3-tier pricing cards
   - Student services section
   - Testimonials section
   - About section
   - Contact section

2. **Services Page** (`/services`)
   - Detailed descriptions of each service
   - Service-specific benefits
   - Case studies or examples

3. **Pricing Page** (`/pricing`)
   - Detailed pricing information
   - Feature comparison table
   - FAQ section about pricing

4. **Student Services Page** (`/students`)
   - Specialized content for students
   - Student pricing options
   - Portfolio examples
   - Educational resources

5. **About Page** (`/about`)
   - Company mission and values
   - Team member introductions
   - Company history
   - Technology expertise

6. **Contact Page** (`/contact`)
   - Contact form with validation
   - Contact information
   - Map (if applicable)
   - Social media links

## Design Requirements
Follow the design system in docs/02-design-system.md:

1. **Color Palette**
   - Deep Ocean Blue: `#001F3F` (primary)
   - Orca Black: `#0A0A0A`
   - Foam White: `#FDFDFD`
   - Aqua Glow: `#00C2FF` (accent)
   - Steel Gray: `#6B7280`
   - Implement dark/light mode toggle

2. **Typography**
   - Headings: Poppins
   - Body: Inter
   - Accent: Space Grotesk
   - Use the defined font size hierarchy

3. **Components**
   - Use shadcn/ui components for all UI elements
   - Implement responsive grid system
   - Ensure mobile-first design

## Content Requirements
Use the content library in docs/07-content-library.md for all text, headlines, and descriptions. This includes:
- Hero section content
- Service descriptions
- Pricing information
- Student services content
- Testimonials
- About section content

## Technical Requirements
1. **Performance**
   - Optimize for Core Web Vitals
   - Use Next.js Image component for all images
   - Implement code splitting where appropriate

2. **Accessibility**
   - WCAG 2.1 AA compliant
   - Semantic HTML
   - Proper ARIA attributes
   - Keyboard navigation support

3. **SEO**
   - Meta tags for each page
   - Semantic HTML structure
   - Sitemap generation

4. **Forms**
   - Implement React Hook Form with Zod validation
   - Create proper error handling
   - Implement submission feedback

## Animation Requirements
- Use Framer Motion for subtle animations
- Implement page transitions
- Add hover effects on interactive elements
- Create animated entrance for sections

## Implementation Steps
1. Set up Next.js project with TypeScript and Tailwind CSS
2. Configure shadcn/ui and add required components
3. Implement global styles and theme
4. Create component structure
5. Build each page according to wireframes
6. Implement forms with validation
7. Add animations and transitions
8. Optimize for performance and accessibility
9. Test across devices and browsers

## Specific Components to Create
1. Header with navigation and dark mode toggle
2. Hero section with headline and CTAs
3. Service cards for the services section
4. Pricing cards with feature lists
5. Testimonial cards with ratings
6. Contact form with validation
7. Footer with links and social media

## Assets Needed
1. Placeholder images for:
   - Hero section
   - Team members
   - Testimonials
   - Service illustrations
2. Icons for:
   - Services
   - Social media
   - UI elements

## Quality Assurance
1. Test on all device sizes (mobile, tablet, desktop)
2. Validate all forms
3. Check accessibility compliance
4. Optimize performance metrics
5. Verify cross-browser compatibility

## Deployment Considerations
1. Prepare for Vercel deployment
2. Set up environment variables
3. Configure custom domain
4. Implement analytics

Use the wireframes in docs/05-ux-wireframes.md as a visual guide for the layout and structure of each page. Follow the implementation guide in docs/06-development-implementation-guide.md for technical setup and best practices.

The final product should be a professional, responsive landing page that effectively showcases VorcaStudio's services, with special attention to the student services section, and provides an excellent user experience across all devices.