# VorcaStudio - Development Implementation Guide

## 🚀 Project Setup & Structure

### Initial Project Setup
```bash
# Create Next.js project
npx create-next-app@latest vorca-studio --typescript --tailwind --app

# Navigate to project
cd vorca-studio

# Install shadcn/ui
npx shadcn@latest init

# Install additional dependencies
npm install framer-motion lucide-react class-variance-authority clsx tailwind-merge
npm install @types/node -D
```

### Project Structure
```
vorca-studio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── portfolio/
│   │   └── page.tsx
│   ├── insights/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
├── components/
│   ├── ui/ (shadcn components)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── navigation-menu.tsx
│   │   ├── dialog.tsx
│   │   └── form.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Philosophy.tsx
│   │   ├── Services.tsx
│   │   ├── Portfolio.tsx
│   │   └── ContactCTA.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── PageWrapper.tsx
│   └── animations/
│       ├── OrcaTrail.tsx
│       ├── WaveBackground.tsx
│       └── ParallaxSection.tsx
├── lib/
│   ├── utils.ts
│   ├── constants.ts
│   └── animations.ts
├── public/
│   ├── images/
│   ├── icons/
│   └── orca-logo.svg
└── styles/
    ├── components.css
    └── animations.css
```

### shadcn/ui Components Setup
```bash
# Install core shadcn components for VorcaStudio
npx shadcn@latest add button
npx shadcn@latest add card  
npx shadcn@latest add input
npx shadcn@latest add form
npx shadcn@latest add dialog
npx shadcn@latest add navigation-menu
npx shadcn@latest add accordion
npx shadcn@latest add tabs
npx shadcn@latest add badge
npx shadcn@latest add avatar
npx shadcn@latest add sheet
npx shadcn@latest add dropdown-menu
npx shadcn@latest add toast
```

### Font Setup (app/layout.tsx)
```typescript
import { Inter, Poppins, Space_Grotesk } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-background font-body antialiased">
        {children}
      </body>
    </html>
  )
}
```

### Tailwind CSS 4.0 Config (tailwind.config.ts)
```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        // VorcaStudio Brand Colors
        'deep-ocean': '#001F3F',
        'orca-black': '#0A0A0A',
        'foam-white': '#FDFDFD',
        'aqua-glow': '#00C2FF',
        'steel-gray': '#6B7280',
      },
      fontFamily: {
        'heading': ['var(--font-poppins)', 'sans-serif'],
        'body': ['var(--font-inter)', 'sans-serif'],
        'accent': ['var(--font-space-grotesk)', 'monospace'],
      },
      animation: {
        'wave-flow': 'wave-flow 8s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'orca-swim': 'orca-swim 6s ease-in-out infinite',
        'ripple': 'ripple 0.6s ease-out',
      },
      keyframes: {
        'wave-flow': {
          '0%, 100%': { 
            'background-position': '0% 50%',
          },
          '50%': { 
            'background-position': '100% 50%',
          },
        },
        'pulse-glow': {
          '0%, 100%': { 
            'box-shadow': '0 0 20px oklch(0.7 0.3 200 / 0.3)',
          },
          '50%': { 
            'box-shadow': '0 0 40px oklch(0.7 0.3 200 / 0.5)',
          },
        },
        'orca-swim': {
          '0%, 100%': { 
            transform: 'translateX(0) rotateY(0deg)',
          },
          '50%': { 
            transform: 'translateX(20px) rotateY(5deg)',
          },
        },
        'ripple': {
          '0%': {
            transform: 'scale(0)',
            opacity: '0.6',
          },
          '100%': {
            transform: 'scale(4)',
            opacity: '0',
          },
        },
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
```

### CSS Variables Setup (app/globals.css)
```css
@import 'tailwindcss';

@layer base {
  :root {
    /* shadcn/ui CSS variables */
    --background: 210 40% 2%; /* Deep Ocean Blue */
    --foreground: 0 0% 99%; /* Foam White */
    --card: 210 40% 4%;
    --card-foreground: 0 0% 99%;
    --popover: 210 40% 4%;
    --popover-foreground: 0 0% 99%;
    --primary: 200 100% 50%; /* Aqua Glow */
    --primary-foreground: 0 0% 4%; /* Orca Black */
    --secondary: 210 6% 42%; /* Steel Gray */
    --secondary-foreground: 0 0% 99%;
    --muted: 210 6% 42%;
    --muted-foreground: 0 0% 64%;
    --accent: 200 100% 50%;
    --accent-foreground: 0 0% 4%;
    --destructive: 0 62% 50%;
    --destructive-foreground: 0 0% 99%;
    --border: 210 6% 20%;
    --input: 210 6% 20%;
    --ring: 200 100% 50%;
    --radius: 0.75rem;
    
    /* Custom VorcaStudio Variables */
    --orca-gradient: linear-gradient(135deg, #001F3F 0%, #00C2FF 100%);
    --ocean-depth: linear-gradient(180deg, #001F3F 0%, #0A0A0A 100%);
  }

  .light {
    --background: 0 0% 99%;
    --foreground: 0 0% 4%;
    --card: 0 0% 99%;
    --card-foreground: 0 0% 4%;
    --popover: 0 0% 99%;
    --popover-foreground: 0 0% 4%;
    --primary: 200 100% 40%;
    --primary-foreground: 0 0% 99%;
    --secondary: 210 6% 93%;
    --secondary-foreground: 0 0% 4%;
    --muted: 210 6% 93%;
    --muted-foreground: 0 0% 40%;
    --accent: 200 100% 40%;
    --accent-foreground: 0 0% 99%;
    --destructive: 0 62% 50%;
    --destructive-foreground: 0 0% 99%;
    --border: 210 6% 85%;
    --input: 210 6% 85%;
    --ring: 200 100% 40%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  
  body {
    @apply bg-background text-foreground font-body;
  }
  
  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    @apply w-2;
  }
  
  ::-webkit-scrollbar-track {
    @apply bg-deep-ocean;
  }
  
  ::-webkit-scrollbar-thumb {
    @apply bg-aqua-glow rounded;
  }
  
  /* Selection Styling */
  ::selection {
    @apply bg-aqua-glow text-orca-black;
  }
}
```

## 🧩 Component Implementation

### Base Button Component (components/ui/button.tsx)
```typescript
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-heading font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-aqua-glow text-orca-black hover:bg-aqua-glow/90 hover:scale-105 shadow-lg hover:shadow-xl",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-aqua-glow bg-transparent text-aqua-glow hover:bg-aqua-glow hover:text-orca-black",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "text-aqua-glow hover:bg-aqua-glow/10 hover:text-aqua-glow",
        link: "text-aqua-glow underline-offset-4 hover:underline",
        orca: "bg-gradient-to-r from-deep-ocean to-aqua-glow text-foam-white hover:shadow-2xl hover:shadow-aqua-glow/25 hover:scale-105",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-lg px-8",
        xl: "h-14 rounded-xl px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

### Enhanced Card Component (components/ui/card.tsx)
```typescript
import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "font-heading text-2xl font-semibold leading-none tracking-tight group-hover:text-aqua-glow transition-colors duration-300",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
```

### Enhanced Hero Section with shadcn/ui
```typescript
// components/sections/Hero.tsx
"use client"

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Play } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-deep-ocean via-orca-black to-deep-ocean overflow-hidden">
      {/* Enhanced Background with CSS 4.0 features */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--aqua-glow)_0%,_transparent_50%)] opacity-10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-aqua-glow/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-aqua-glow/20 rounded-full blur-3xl animate-pulse-glow [animation-delay:2s]" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
            Digital Predators.
            <br />
            <span className="bg-gradient-to-r from-aqua-glow to-primary bg-clip-text text-transparent">
              Web Innovators.
            </span>
          </h1>

          <motion.p 
            className="font-body text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Seperti orca yang menguasai lautan, kami menguasai dunia digital dengan 
            strategi yang <span className="text-aqua-glow font-semibold">precision</span> dan 
            <span className="text-aqua-glow font-semibold">collaboration</span> yang kuat.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button variant="orca" size="xl" className="group">
              Mulai Partnership
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="xl" className="group">
              <Play className="mr-2 h-5 w-5" />
              Lihat Portfolio
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-8 pt-12 opacity-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="text-sm font-accent">50+ Successful Partnerships</div>
            <div className="w-1 h-1 bg-aqua-glow rounded-full" />
            <div className="text-sm font-accent">98% Client Retention</div>
            <div className="w-1 h-1 bg-aqua-glow rounded-full" />
            <div className="text-sm font-accent">Jakarta Based</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Action Cards */}
      <motion.div 
        className="absolute bottom-8 left-8 hidden lg:block"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Card className="w-64 bg-card/80 backdrop-blur-sm border-aqua-glow/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-aqua-glow rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">Ready to hunt digital success?</span>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};
```-glow animation-delay-2000" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h1 
          className="font-heading text-5xl md:text-7xl font-bold text-foam-white mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Digital Predators.
          <br />
          <span className="text-aqua-glow">Web Innovators.</span>
        </motion.h1>

        <motion.p 
          className="font-body text-lg md:text-xl text-steel-gray max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Seperti orca yang menguasai lautan, kami menguasai dunia digital dengan 
          strategi yang <span className="text-aqua-glow font-semibold">precision</span> dan 
          <span className="text-aqua-glow font-semibold">collaboration</span> yang kuat.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button variant="primary" size="lg">
            Mulai Partnership
          </Button>
          <Button variant="secondary" size="lg">
            Lihat Portfolio
          </Button>
        </motion.div>
      </div>

      {/* Orca Silhouette Animation */}
      <motion.div 
        className="absolute bottom-10 right-10 opacity-20"
        animate={{ 
          x: [0, 20, 0],
          rotateY: [0, 5, 0] 
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      >
        {/* SVG Orca akan diimplement di sini */}
      </motion.div>
    </section>
  );
};
```

## 🔧 Development Phases

### Phase 1: Foundation (Week 1-2)
**Setup & Core Structure**:
- [ ] Project initialization dan dependency setup
- [ ] Design system implementation (colors, typography, spacing)
- [ ] Basic component library (Button, Card, Input, etc.)
- [ ] Layout components (Header, Footer, PageWrapper)
- [ ] Responsive navigation system

### Phase 2: Core Pages (Week 3-4)
**Homepage Development**:
- [ ] Hero section dengan animations
- [ ] Philosophy section dengan interactive elements
- [ ] Services highlight cards
- [ ] Portfolio showcase grid
- [ ] Contact CTA section

**About Page**:
- [ ] Company story section
- [ ] Team showcase
- [ ] Philosophy deep-dive
- [ ] Values demonstration

### Phase 3: Advanced Features (Week 5-6)
**Portfolio System**:
- [ ] Case study detail pages
- [ ] Filtering dan search functionality
- [ ] Image galleries dengan lightbox
- [ ] Testimonials integration

**Services Pages**:
- [ ] Detailed service explanations
- [ ] Process visualization
- [ ] Pricing atau consultation CTAs
- [ ] FAQ sections

### Phase 4: Polish & Optimization (Week 7-8)
**Performance & SEO**:
- [ ] Image optimization dan lazy loading
- [ ] Meta tags dan structured data
- [ ] Performance auditing dan optimization
- [ ] Accessibility testing dan improvements

**Advanced Interactions**:
- [ ] Complex animations dan transitions
- [ ] Scroll-triggered effects
- [ ] Interactive elements (cursor followers, etc.)
- [ ] Form handling dan validation

## 📋 Development Checklist

### Pre-Development
- [ ] Brand guidelines review dan understanding
- [ ] Technical requirements confirmation
- [ ] Content strategy alignment
- [ ] Design system documentation

### During Development
- [ ] Component-driven development approach
- [ ] Regular responsive testing
- [ ] Performance monitoring
- [ ] Code quality maintenance
- [ ] Git workflow dengan meaningful commits

### Pre-Launch
- [ ] Cross-browser testing
- [ ] Performance audit (Lighthouse scores)
- [ ] Accessibility audit (WCAG compliance)
- [ ] SEO optimization verification
- [ ] Contact form testing
- [ ] Analytics setup

### Post-Launch
- [ ] Performance monitoring setup
- [ ] User behavior tracking
- [ ] Conversion rate tracking
- [ ] Regular content updates
- [ ] Maintenance schedule

## 🎯 Success Metrics & KPIs

### Technical KPIs
- **Page Load Speed**: < 3 seconds
- **Lighthouse Score**: 90+ across all categories
- **Mobile Responsiveness**: Perfect display across devices
- **Accessibility Score**: WCAG 2.1 AA compliance

### Business KPIs
- **Conversion Rate**: Homepage to contact form
- **Bounce Rate**: < 40% untuk homepage
- **Time on Site**: > 2 minutes average
- **Portfolio Engagement**: Case study completion rate

### Brand KPIs
- **Philosophy Understanding**: User feedback pada orca concept
- **Brand Recall**: Recognition dalam target market
- **Partnership Inquiries**: Quality of incoming leads
- **Professional Credibility**: Industry recognition

---
*"Implementation yang strategic dan precise - setiap line of code berkontribusi pada digital dominance."*