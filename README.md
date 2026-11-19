# CampusCart

A quick-ordering web app for campus students. Order snacks, stationery and daily essentials from the campus store and pick them up at a chosen campus location and time slot.

**Inspiration:** Zepto (Y Combinator). CampusCart adapts the quick-commerce idea to campus life with delivery spots, between-class pickup slots and student deals.

## Team
- Sharmin Jameela
- Shwetha S

## Features
- Browse products with search and category filter
- Product details page
- Cart with quantity controls and a total
- Checkout with a campus location and pickup slot
- Order history with status badges
- Student deal badges on budget items

## Pages
| Route | Purpose |
|---|---|
| `/` | Landing page |
| `/products` | Product listing, search and filter |
| `/products/[id]` | Product details |
| `/cart` | Cart and checkout |
| `/orders` | Order history |

## Tech stack
- Next.js (App Router)
- React and React Context (Cart and Order state)
- Tailwind CSS
- Dummy data in `data/` (no backend in this milestone)

## Project structure
```
app/          pages and layout
components/   reusable UI components
context/      CartContext, OrderContext
data/         dummy products and campus options
```

## Run locally
```
git clone <repo-url>
cd campuscart
npm install
npm run dev
```
Then open http://localhost:3000

## Documents
- [PRODUCT-ASSUMPTIONS.md](PRODUCT-ASSUMPTIONS.md)
- [DESIGN-SYSTEM.md](DESIGN-SYSTEM.md)

## Notes
There is no backend yet. Data resets when the page is refreshed.