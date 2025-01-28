# Wiki Millionaire Brand Identity Guide

## Core Brand Values
- Knowledge & Learning
- Entertainment & Fun
- Achievement & Success
- Trust & Reliability
- Innovation & Technology

## Color Palette

### Primary Colors
- **Deep Knowledge Blue** `#1A237E`
  - Main brand color
  - Used for headers, primary buttons
  - Represents wisdom and trust

- **Victory Gold** `#FFD700`
  - Achievement color
  - Used for prizes, celebrations
  - Represents success and rewards

- **Royal Wisdom** `#4A148C`
  - Secondary accent
  - Used for important information
  - Represents depth of knowledge

- **Fortune Green** `#00695C`
  - Progress indicator
  - Used for correct answers, success states
  - Represents growth and advancement

### Supporting Colors
- **Paper White** `#F5F5F5`
  - Primary background
  - Clean, readable surfaces

- **Subtle Gray** `#ECEFF1`
  - Secondary background
  - Card backgrounds, dividers

- **Ink Black** `#263238`
  - Main text color
  - Strong contrast, readability

### Functional Colors
- **Alert Red** `#D32F2F`
  - Wrong answers
  - Time running out
  - Critical actions

- **Success Green** `#2E7D32`
  - Correct answers
  - Completion states

## Typography

### Primary Font: Roboto
```css
font-family: 'Roboto', sans-serif;
```
- Headings: Roboto Medium (500)
- Body: Roboto Regular (400)
- Buttons: Roboto Bold (700)

### Secondary Font: Montserrat
```css
font-family: 'Montserrat', sans-serif;
```
- Used for prize amounts
- Special headings
- Important numbers

### Font Sizes
```scss
// Headers
h1: 2.5rem (40px)
h2: 2rem (32px)
h3: 1.75rem (28px)
h4: 1.5rem (24px)

// Body
body: 1rem (16px)
small: 0.875rem (14px)
```

## Logo
Let me create the logo in SVG format that represents our brand values:

## Component Styling

### Buttons
```scss
// Primary Button
.q-btn--primary {
  background: $deep-knowledge-blue;
  color: white;
  border-radius: 8px;
  font-weight: 700;
  text-transform: none;
  padding: 8px 24px;
  
  &:hover {
    background: lighten($deep-knowledge-blue, 10%);
  }
}

// Question Choice Button
.choice-button {
  background: white;
  border: 2px solid $deep-knowledge-blue;
  color: $ink-black;
  border-radius: 8px;
  text-align: left;
  min-height: 56px;
  
  &:hover {
    background: rgba($deep-knowledge-blue, 0.05);
  }
  
  &.correct {
    background: $success-green;
    color: white;
  }
  
  &.incorrect {
    background: $alert-red;
    color: white;
  }
}
```

### Cards
```scss
.q-card {
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: $paper-white;
  
  &__section {
    padding: 24px;
  }
}
```

### Prize Ladder
```scss
.prize-level {
  padding: 12px 16px;
  border-bottom: 1px solid $subtle-gray;
  
  &--current {
    background: $deep-knowledge-blue;
    color: white;
  }
  
  &--milestone {
    border-bottom: 2px solid $victory-gold;
  }
}
```

## Usage Guidelines

### Logo Usage
- Minimum size: 32px height
- Clear space: 25% of logo height on all sides
- Acceptable backgrounds: White, Deep Knowledge Blue
- Don't: Stretch, rotate, or alter colors

### Color Application
- Use Deep Knowledge Blue for primary actions and headers
- Victory Gold for achievements and important highlights
- Royal Wisdom for secondary information
- Fortune Green sparingly for success states
- Alert Red only for critical actions or errors

### Typography Rules
- Maintain hierarchy with consistent header sizes
- Body text should be Roboto Regular for optimal readability
- Use Montserrat for numerical values and special emphasis
- Minimum body text size: 14px
- Optimal line height: 1.5

### Responsive Design
- Mobile-first approach
- Maintain padding ratios: 16px base, 24px medium, 32px large
- Button minimum touch target: 44px
- Card padding scales with viewport

### Animation Guidelines
- Use subtle transitions (0.2s - 0.3s)
- Ease-in-out timing function
- Hover states should be immediate (0.1s)
- Loading states should use the brand colors
- Success/failure animations should be clear but not overwhelming

Would you like me to:
1. Create a CSS/SCSS file implementing these styles?
2. Show how to apply this brand identity to specific components?
3. Create any additional visual assets?