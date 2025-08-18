# VorcaStudio - Design System

## 🎨 Color Palette

### Primary Colors
```css
:root {
  --deep-ocean-blue: #001F3F;    /* Primary background, hero section */
  --orca-black: #0A0A0A;          /* Logo, typography headline */
  --foam-white: #FDFDFD;          /* Text, contrast color */
  --aqua-glow: #00C2FF;           /* Accent, buttons, links */
  --steel-gray: #6B7280;          /* Secondary text, UI elements */
}
```

### Color Usage Guidelines
- **Deep Ocean Blue**: Hero backgrounds, section dividers, premium elements
- **Orca Black**: Primary headings, logo, high-impact text
- **Foam White**: Body text, card backgrounds, clean spaces
- **Aqua Glow**: CTAs, hover states, progress indicators, highlights
- **Steel Gray**: Supporting text, form labels, subtle UI elements

### Color Psychology
- **Blue**: Kepercayaan, profesionalisme, kedalaman expertise
- **Black**: Kekuatan, authority, precision
- **Aqua**: Inovasi, teknologi, future-forward thinking
- **Gray**: Balance, sophistication, modern approach

## 🔤 Typography System

### Font Stack
```css
/* Headings - Bold & Geometric */
.heading {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 600-700;
}

/* Body Text - Clean & Readable */
.body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 400-500;
}

/* Accent Text - Techy Feel */
.accent {
  font-family: 'Space Grotesk', monospace;
  font-weight: 500;
}
```

### Typography Scale
```css
/* Display */
--text-display: 3.75rem;        /* 60px - Hero titles */
--text-display-sm: 3rem;        /* 48px - Section titles */

/* Headings */
--text-h1: 2.25rem;             /* 36px */
--text-h2: 1.875rem;            /* 30px */
--text-h3: 1.5rem;              /* 24px */
--text-h4: 1.25rem;             /* 20px */

/* Body */
--text-lg: 1.125rem;            /* 18px - Lead paragraph */
--text-base: 1rem;              /* 16px - Regular text */
--text-sm: 0.875rem;            /* 14px - Captions */
--text-xs: 0.75rem;             /* 12px - Fine print */
```

### Line Height & Letter Spacing
```css
--leading-tight: 1.25;          /* Headlines */
--leading-normal: 1.5;          /* Body text */
--leading-relaxed: 1.75;        /* Long-form content */

--tracking-tight: -0.025em;     /* Large headings */
--tracking-normal: 0;           /* Regular text */
--tracking-wide: 0.025em;       /* Buttons, labels */
```

## 🌊 Visual Elements

### Logo Specifications
- **Primary Logo**: Orca silhouette melengkung membentuk huruf V
- **Minimum Size**: 32px height (digital), 1.5cm (print)
- **Clear Space**: Minimum 2x logo height di semua sisi
- **Variations**: 
  - Full color (Deep Ocean Blue + Aqua Glow)
  - Monochrome white (dark backgrounds)
  - Monochrome black (light backgrounds)

### Iconography Style
- **Style**: Outline icons, 2px stroke weight
- **Color**: Inherit from parent atau menggunakan Aqua Glow untuk accent
- **Size**: 16px, 20px, 24px, 32px standard sizes
- **Family**: Lucide React icons untuk consistency

### Pattern & Textures
- **Wave Patterns**: Subtle SVG waves untuk section dividers
- **Fluid Shapes**: Organic curves untuk background elements
- **Gradient Flows**: Linear gradients dari Deep Ocean Blue ke transparan
- **Bioluminescent Effects**: Subtle glow effects dengan Aqua Glow

## 📐 Spacing System

### Spacing Scale (Tailwind-based)
```css
--space-xs: 0.25rem;    /* 4px */
--space-sm: 0.5rem;     /* 8px */
--space-md: 1rem;       /* 16px */
--space-lg: 1.5rem;     /* 24px */
--space-xl: 2rem;       /* 32px */
--space-2xl: 3rem;      /* 48px */
--space-3xl: 4rem;      /* 64px */
--space-4xl: 6rem;      /* 96px */
--space-5xl: 8rem;      /* 128px */
```

### Component Spacing
- **Section Padding**: 4xl (mobile), 5xl (desktop)
- **Card Padding**: lg (mobile), xl (desktop)
- **Button Padding**: sm md (vertical horizontal)
- **Form Elements**: md spacing between fields

## 🎭 Animation Guidelines

### Micro-interactions
- **Hover Transitions**: 300ms ease-out
- **Button States**: Scale transform + color change
- **Link Hovers**: Underline animation dari kiri ke kanan
- **Card Hovers**: Subtle lift dengan shadow increase

### Page Transitions
- **Fade In**: Elements muncul dengan opacity 0 to 1
- **Slide Up**: Content masuk dari bawah (translateY)
- **Ripple Effect**: Untuk loading states dan interactions
- **Wave Animation**: Background elements dengan gentle movement

### Performance Guidelines
- Gunakan `transform` dan `opacity` untuk animations (GPU accelerated)
- Maksimal 60fps untuk semua animations
- Fallback untuk `prefers-reduced-motion`

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
--breakpoint-sm: 640px;      /* Small tablets */
--breakpoint-md: 768px;      /* Tablets */
--breakpoint-lg: 1024px;     /* Laptops */
--breakpoint-xl: 1280px;     /* Desktops */
--breakpoint-2xl: 1536px;    /* Large screens */
```

### Grid System
- **Mobile**: Single column, full-width cards
- **Tablet**: 2-3 column grid untuk content cards
- **Desktop**: Complex layouts dengan sidebar dan multi-column

---
*Design system ini adalah foundation untuk menciptakan digital presence yang powerful dan consistent seperti kekuatan orca di lautan digital.*