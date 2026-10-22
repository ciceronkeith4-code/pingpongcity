---
name: Urban Kinetic Sports
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#e9bcb8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#af8783'
  outline-variant: '#5e3f3c'
  surface-tint: '#ffb3ad'
  primary: '#ffb3ad'
  on-primary: '#680009'
  primary-container: '#ff544f'
  on-primary-container: '#5c0007'
  inverse-primary: '#c0001a'
  secondary: '#ffffff'
  on-secondary: '#373100'
  secondary-container: '#fde400'
  on-secondary-container: '#716500'
  tertiary: '#87ceff'
  on-tertiary: '#00344d'
  tertiary-container: '#3499d0'
  on-tertiary-container: '#002d43'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb3ad'
  on-primary-fixed: '#410003'
  on-primary-fixed-variant: '#930012'
  secondary-fixed: '#fde400'
  secondary-fixed-dim: '#dec800'
  on-secondary-fixed: '#201c00'
  on-secondary-fixed-variant: '#504700'
  tertiary-fixed: '#c8e6ff'
  tertiary-fixed-dim: '#87ceff'
  on-tertiary-fixed: '#001e2e'
  on-tertiary-fixed-variant: '#004c6d'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  headline-xl:
    fontFamily: Barlow Condensed
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Barlow Condensed
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Barlow Condensed
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Barlow Condensed
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: 0em
  headline-sm:
    fontFamily: Barlow Condensed
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 22px
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Barlow Condensed
    fontSize: 16px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.08em
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-desktop: 2.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies the high-velocity, electric tempo of an urban competitive table tennis arena. Drawing from athletic editorial print, tournament scoreboards, and brutalist precision, the aesthetic is visceral, sharp, and disciplined.

Targeted at competitive athletes, urban league members, and modern club visitors, the UI rejects generic SaaS gradients, playful pastel fluff, and translucent glassmorphism. Instead, it prioritizes uncompromising high contrast, razor-sharp technical gridlines, bold typography, and dense data layouts reminiscent of tournament brackets and timing gear. The interface feels fast, tactile, and physically grounded—communicating stadium-level energy and industrial sports credibility.

## Colors

The palette is engineered around high visual friction and kinetic focus. Dark mode serves as the default state to reflect floodlit court conditions and high-focus competition environments.

- **Primary Action (Racing Red - `#F20D27`):** The engine of the UI. Used for primary interactive triggers, active match states, live broadcast indicators, and urgent call-to-actions.
- **Secondary / Accent (Signal Yellow - `#FFE600`):** Inspired by match balls and referee warnings. Reserved strictly for tactical accents: tournament seed badges, live ball counters, winner pips, and micro-metric highlights.
- **Surfaces & Grounds:**
  - Base canvas: `#101010` (Near Black).
  - Component containers & panels: `#181818` (Surface Dark).
  - Elevated court cards & hover tiers: `#222222` (Elevated Dark).
- **Text & Structural Rules:**
  - High-emphasis display & text: `#FFFFFF`.
  - Secondary details & borders: `#E5E5E5` and `#F4F4F4` (used primarily at low opacity or as razor-thin 1px court grid markers).
  - Muted technical data: `#707070`.

## Typography

The typographical hierarchy combines the condensed, mechanical tension of sports editorial displays (`Barlow Condensed`) with the clinical legibility of `Inter`.

- **Headlines & Big Numbers:** Set in uppercase `Barlow Condensed` with heavy weights (700–800) and tight leading to emulate stadium signage, electronic scoreboards, and court markers.
- **Body & Data:** Standardized on `Inter` for fast scanning across table availability, player stats, and schedule grids.
- **Micro Labels & Metadata:** Transformed to uppercase with open letter spacing (`0.04em` to `0.08em`) to preserve legibility when set against dark surfaces.

## Layout & Spacing

The layout is built upon an architectural grid with visible, crisp structure:
- **Grid Architecture:** 12-column layout on desktop screens with 24px gutters; collapses to 4 columns on mobile with 16px gutters.
- **Court Lines:** Grid columns and module panels are separated by 1px solid dividers (`rgba(255, 255, 255, 0.1)` or `#222222`) mirroring the white boundary striping on professional table tennis tables.
- **Rhythm:** Modular increments of 4px and 8px govern element alignments. Layout density leans compact and data-forward, minimizing unnecessary ambient whitespace in favor of rapid visual indexing during live match tracking and table booking.

## Elevation & Depth

This design system avoids soft, blurred drop shadows. Depth and hierarchy are achieved through tonal layering and technical boundary lines:

- **Flat Tonal Hierarchy:** Deepest level is Canvas (`#101010`), mid-level is Module Card (`#181818`), and the highest tier is Court Highlight (`#222222`).
- **Technical Insets & Borders:** Elevation boundaries are established using 1px solid structural rules (`rgba(255, 255, 255, 0.12)`). Active, selected, or focused containers switch to a 1px or 2px solid `#F20D27` border.
- **Z-Index Overlays:** Modals and bottom sheets use pure `#181818` with a hard 1px `#FFFFFF` edge separator and a sharp 80% opacity dark scrim (`#000000`).

## Shapes

The shape system adopts a zero-radius or near-zero geometric philosophy. 

- **Primary Geometry:** Completely sharp corners (`0px` / `roundedness: 0`) reinforce technical precision, brutalist urban athleticism, and scoreboard industrial design.
- **Accent Elements:** Subtle 45-degree chamfered corners or clipped tab edges can be used on primary action buttons and tournament bracket badges to mimic rubber paddle cuts and geometric court tape lines.
- **Pips & Counters:** Small indicators (such as live ball dots or status lights) remain strict 1:1 circles (`border-radius: 9999px`) to visually mimic the ping pong ball against the rectilinear architectural layout.

## Components

### Buttons
- **Primary Action:** Solid Racing Red (`#F20D27`) background, pure white bold uppercase text (`Barlow Condensed`, tracking wide), `0px` border radius, 12px vertical by 24px horizontal padding. On hover: shifts to pure white background with `#101010` text. Active: slightly depressed by 1px.
- **Secondary / Ghost:** Transparent background with a 1px solid `#FFFFFF` border, white uppercase text. On hover: fills `#222222` with a `#F20D27` left-accent indicator stripe.
- **Scoreboard Stepper:** Square 44x44px buttons, `#181818` background, 1px solid `#333333`, sharp edges.

### Chips & Badges
- **Status Badges (e.g., Live Match, Court Open):** Compact, uppercase `label-sm`. Live states feature a `#F20D27` or `#FFE600` background with contrasting dark text.
- **Filter Chips:** 1px `#333333` outline, dark background. When selected: invert to white background with `#101010` text and no corner rounding.

### Input Fields
- Monolithic rectangular blocks with `#181818` background and 1px solid `#333333` borders.
- Labels are fixed above fields in uppercase `label-md` `#888888`.
- Focus state replaces the border with 2px solid `#F20D27` without blur or glow rings.

### Cards & Match Panels
- Built on `#181818` with a 1px solid border at `#222222`.
- Score displays use oversized numbers in `Barlow Condensed` 800-weight, stacked vertically or side-by-side with a 1px central vertical divider.
- Selected table cards display a 3px solid `#F20D27` left boundary bar.

### Lists & Tournament Brackets
- Rows styled with flush bottom dividers (`1px solid #222222`), alternating slightly between `#141414` and `#181818`.
- Bracket nodes are interconnected with rigid 2px solid `#333333` orthogonal paths, switching to `#F20D27` for the advancing winner line.