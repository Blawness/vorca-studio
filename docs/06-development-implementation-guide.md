# Development Implementation Guide

## Project Setup

### Prerequisites
- Node.js 18.x or later
- npm or yarn package manager
- Git version control
- Code editor (VS Code recommended)

### Initial Setup
1. Create a new Next.js project:
   ```bash
   npx create-next-app@latest ai-web-agency --typescript --tailwind --eslint --app --src-dir
   ```

2. Navigate to the project directory:
   ```bash
   cd ai-web-agency
   ```

3. Install shadcn/ui:
   ```bash
   npx shadcn-ui@latest init
   ```

4. Install additional dependencies:
   ```bash
   npm install framer-motion react-hook-form zod react-icons
   npm install -D @types/react @types/node
   ```

## Component Development

### shadcn/ui Integration
1. Add required components:
   ```bash
   npx shadcn-ui@latest add button card input textarea label select checkbox radio-group switch
   ```

2. For forms:
   ```bash
   npx shadcn-ui@latest add form
   ```

3. For navigation:
   ```bash
   npx shadcn-ui@latest add navigation-menu
   ```

4. For modals:
   ```bash
   npx shadcn-ui@latest add dialog
   ```

### Custom Component Structure
```
components/
├── ui/                  # shadcn/ui components
├── layout/              # Header, Footer, etc.
├── sections/            # Hero, Services, etc.
├── cards/               # ServiceCard, PricingCard, etc.
├── forms/               # ContactForm, etc.
└── elements/            # Buttons, Icons, etc.
```

## Styling with Tailwind CSS

### Custom Theme Configuration
Update `tailwind.config.js` with brand colors:
```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7C3AED',
          light: '#8B5CF6',
          dark: '#6D28D9',
        },
        secondary: {
          DEFAULT: '#0EA5E9',
          light: '#38BDF8',
          dark: '#0284C7',
        }
      }
    }
  }
}
```

### Dark Mode Implementation
1. Configure `next-themes`:
```bash
npm install next-themes
```

2. Wrap the app with ThemeProvider in `app/layout.tsx`:
```tsx
import { ThemeProvider } from 'next-themes'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

## Page Implementation

### Route Structure
```
app/
├── page.tsx             # Home page
├── services/
│   └── page.tsx         # Services page
├── pricing/
│   └── page.tsx         # Pricing page
├── students/
│   └── page.tsx         # Student services page
├── about/
│   └── page.tsx         # About page
├── contact/
│   └── page.tsx         # Contact page
└── layout.tsx           # Root layout
```

### Home Page Components
1. HeroSection
2. ServicesSection
3. PricingSection
4. StudentServicesSection
5. TestimonialsSection
6. AboutSection
7. ContactSection

## Form Handling

### Contact Form Implementation
```tsx
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  service: z.string().min(1, {
    message: "Please select a service.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "",
      message: "",
    },
  })
  
  // Implementation details...
}
```

## Performance Optimization

### Image Optimization
Use Next.js Image component:
```tsx
import Image from 'next/image'

export function Hero() {
  return (
    <div>
      <Image
        src="/hero-image.png"
        alt="AI Web Development"
        width={800}
        height={600}
        priority
      />
    </div>
  )
}
```

### Code Splitting
Dynamically import heavy components:
```tsx
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('@/components/HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false
})
```

## Testing

### Component Testing
1. Install testing libraries:
   ```bash
   npm install -D jest @testing-library/react @testing-library/jest-dom
   ```

2. Test component structure:
   ```tsx
   import { render, screen } from '@testing-library/react'
   import { Button } from '@/components/ui/button'
   
   describe('Button', () => {
     it('renders correctly', () => {
       render(<Button>Click me</Button>)
       expect(screen.getByText('Click me')).toBeInTheDocument()
     })
   })
   ```

## Deployment

### Vercel Deployment
1. Push code to GitHub
2. Import project to Vercel
3. Configure environment variables
4. Set up custom domain (if needed)

### Environment Variables
Create `.env.local`:
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
CONTACT_EMAIL=contact@yourdomain.com
```

## Quality Assurance

### Code Standards
1. ESLint configuration for React and TypeScript
2. Prettier for code formatting
3. Husky for pre-commit hooks
4. Commitlint for commit message standards

### Accessibility Testing
1. Use axe-core for automated testing
2. Manual keyboard navigation testing
3. Screen reader testing
4. Color contrast verification

### Performance Testing
1. Lighthouse scoring >90 for all metrics
2. PageSpeed Insights optimization
3. Bundle size analysis
4. Core Web Vitals monitoring