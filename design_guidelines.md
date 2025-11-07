# Design Guidelines: Data Engineer Portfolio - Color Theme Update

## Design Approach

**Selected Approach**: Design System Enhancement (maintaining existing structure)
- **Rationale**: Preserve the sophisticated, modern portfolio design while refreshing the color palette for improved visual appeal and professionalism
- **Key Principle**: Maintain the clean, data-focused aesthetic with enhanced warmth and depth

## Color Palette Refresh

### Background Strategy
**Primary Backgrounds** (excluding Hero Section):
- **AboutSection**: Warm neutral base (`hsl(240 15% 96%)` light, `hsl(240 18% 12%)` dark)
- **SkillsSection**: Subtle warm card background (`hsl(240 12% 98%)` light, `hsl(240 20% 14%)` dark)
- **ProjectsSection**: Slightly cooler neutral (`hsl(220 18% 97%)` light, `hsl(220 22% 13%)` dark)
- **ContactSection**: Soft warm card tone (`hsl(240 12% 98%)` light, `hsl(240 20% 14%)` dark)

### Supporting Colors
**Decorative Blur Elements**: Maintain primary/accent colors but adjust opacity for new backgrounds
- Primary blurs: `bg-primary/5` for light mode, `bg-primary/8` for dark mode
- Accent blurs: `bg-accent/5` for light mode, `bg-accent/8` for dark mode

**Card Gradients**: Update to complement new backgrounds
- Light mode: `from-card to-primary/3`
- Dark mode: `from-card to-primary/5`

## Typography Hierarchy

**Maintain Existing**:
- Headings: Space Grotesk, bold weights (text-4xl to text-6xl)
- Body: Inter, regular/medium weights
- Section titles: 4xl-6xl with primary color accents
- Subtitles: lg-xl in muted-foreground

## Layout & Spacing System

**Preserve Current Structure**:
- Section padding: `py-24 md:py-32`
- Container max-width: `max-w-6xl` (About/Skills/Contact), `max-w-7xl` (Projects)
- Grid systems: 2-column (About, Projects), 3-column (Skills)
- Card padding: `p-6` to `p-8`

## Component Specifications

### Section Backgrounds
1. **AboutSection**: Warm neutral with subtle texture via decorative elements
2. **SkillsSection**: Card background with clean separation from page background
3. **ProjectsSection**: Cooler neutral to create visual rhythm alternation
4. **ContactSection**: Warm card background matching Skills for consistency

### Decorative Elements
- Positioned blur circles: Maintain existing placements
- Size variations: 64-96 units (w-64 to w-96, h-64 to h-96)
- Blur strength: `blur-3xl` consistently
- Opacity adjustments: Slightly higher for new backgrounds

### Card Treatments
**Skill Cards**: 
- Border: `border-2` with category-specific colors (chart-1 through chart-5)
- Background: Transparent with hover elevation
- Icon containers: Category color at 10% opacity

**Project Cards**:
- Gradient overlays: `from-chart-X/10 to-chart-X/5`
- Border: `border-2`
- Image overlays: `bg-gradient-to-t from-black/60 via-black/20`

**Contact Cards**:
- Form card: `from-card to-primary/5` gradient
- Link cards: `bg-background` with `border-2 border-border`
- Icon backgrounds: Gradient from category colors

## Interactive States

**Maintain Existing Elevate System**:
- `hover-elevate`: Subtle brightness adjustment
- `active-elevate-2`: Stronger brightness for active states
- Transition: `duration-300` for smooth interactions

## Visual Enhancements

### Section Headers
- Decorative lines: `w-12 h-1` in primary/accent colors
- Icons: 8x8 units matching line colors
- Animated progress bars: Gradient fills with 700ms transitions
- SVG curves: 40% opacity accent/primary colors

### Badge & Tag System
- Skill badges: `variant="secondary"` with medium font weight
- Tech badges: Same styling with hover elevation
- Learning badges: `variant="outline"` with border-2

## Accessibility Considerations

**Contrast Requirements**:
- Text on new backgrounds: Minimum 4.5:1 ratio maintained
- Interactive elements: Clear focus states via existing system
- Decorative elements: Don't interfere with readability

## Images

**Hero Section**: Keep existing (unchanged per requirements)

**Project Cards**: 
- Placeholder images with descriptive text overlays
- Dimensions: 800x500px
- Overlay gradient: Dark to transparent for text legibility
- Impact badges: White background with primary color text

**No additional images required** for other sections (maintains current icon-based design)

## Dark Mode Strategy

**Automatic Switching**: Maintain existing dark mode implementation
- Background values: Inverted lightness while preserving hue/saturation
- Elevation overlays: White instead of black with adjusted opacity
- Blur elements: Slightly higher opacity in dark mode for visibility

## Animation Guidelines

**Minimal Approach** (preserve existing):
- Decorative pulse animations: Badge indicators only
- Progress bar fills: 700ms ease-out
- Hover scale: Icons at 110% scale on group hover
- Image transforms: 110% scale on card hover (500ms)

This color refresh enhances the professional, modern aesthetic while maintaining the portfolio's data-focused identity and excellent user experience.