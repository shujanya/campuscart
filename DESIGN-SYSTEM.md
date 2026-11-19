# CampusCart Design System

A small, consistent visual system for CampusCart. Every value maps to a Tailwind class used in the code, so this document and the app match.

## 1. Colors

| Role | Hex | Tailwind | Used for |
|---|---|---|---|
| Primary | `#2563EB` | `blue-600` | Primary buttons, logo, links, active filter |
| Primary hover | `#1D4ED8` | `blue-700` | Button hover |
| Secondary / Deal | `#7E22CE` on `#F3E8FF` | `purple-700` / `purple-100` | "Student deal" badge |
| Background | `#F9FAFB` | `gray-50` | Page background |
| Surface | `#FFFFFF` | `white` | Cards, navbar, modal |
| Text | `#111827` | `gray-900` | Headings and body text |
| Secondary text | `#6B7280` | `gray-500` | Prices per item, dates, helper text |
| Border | `#E5E7EB` | `gray-200` | Card and navbar borders |
| Success | `#15803D` on `#DCFCE7` | `green-700` / `green-100` | In stock, Delivered |
| Warning | `#B45309` on `#FEF3C7` | `amber-700` / `amber-100` | Out of stock, Preparing |
| Error / Danger | `#DC2626` | `red-600` | Remove button, cart count bubble |

## 2. Typography

**Font family:** Arial, Helvetica, sans-serif (set in `app/globals.css`).

| Style | Size / Weight | Tailwind | Used for |
|---|---|---|---|
| Hero heading | 36-48px / Bold | `text-4xl sm:text-5xl font-bold` | Landing page headline |
| H1 | 30px / Bold | `text-3xl font-bold` | Page titles |
| H2 | 20-24px / Bold | `text-xl` / `text-2xl font-bold` | Section titles |
| Body | 16px / Regular | default | Paragraphs, inputs |
| Button text | 16px / Medium | `font-medium` | All buttons |
| Small | 14px / Regular | `text-sm` | Secondary info, nav links |
| Badge / caption | 12px / Medium | `text-xs font-medium` | Badges, cart count |

## 3. Spacing and shape

- Page container: `max-w-6xl mx-auto px-4 py-6`
- Cards: `rounded-xl`, `p-4`, 1px border, light shadow
- Buttons and inputs: `rounded-lg`
- Badges: `rounded-full`
- Grid gaps: `gap-4`
- Responsive: product grid is 2 columns on mobile, 4 on desktop

## 4. UI Components

| Component | File | Notes |
|---|---|---|
| Button | `components/Button.js` | Variants: primary, secondary, danger. Supports disabled |
| Badge | `components/Badge.js` | Tones: neutral, success, warning, deal |
| Navbar | `components/Navbar.js` | Sticky, live cart count |
| Input | `components/Input.js` | Text input used for search |
| ProductCard | `components/ProductCard.js` | Image placeholder, badges, price, add to cart |
| Modal | `components/Modal.js` | Order confirmation, closes on backdrop click |
| EmptyState | `components/EmptyState.js` | Empty cart, no orders, not found |

## 5. UI decisions

- **Blue as the primary color** keeps the app clean and gives strong contrast on white.
- **Purple is reserved for student deals** so offers are instantly recognisable.
- **Status colors are consistent:** green means good or done, amber means in progress or attention, red means destructive.
- **Disabled buttons** use reduced opacity so users see why an action is unavailable (for example, Place order before choosing a location and slot).
- **Mobile first:** layouts collapse to one or two columns.