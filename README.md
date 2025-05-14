# 🛍️ Product Card Component – Frontend Intern Take-Home Test

A React + TypeScript application implementing a dynamic product card that supports:

- Product fetching via API (TanStack Query)
- Cart state management (Redux Toolkit)
- Favorite status with `localStorage` persistence
- Light/Dark theme toggle
- MVC-style code organization

---

## 📁 Code Structure

The project follows an MVC-like architecture:

src/
├── api/ # Controller: API logic using TanStack Query
│ └── productService.ts
├── components/ # View: Presentational UI components
│ └── ProductCard.tsx
├── hooks/ # Controller: Business logic hooks
│ ├── useCart.ts
│ └── useFavorites.ts
├── models/ # Model: TypeScript types & interfaces
│ └── Product.ts
├── redux/ # Cart state management
│ ├── cartSlice.ts
│ └── store.ts
├── theme/ # Theme management logic
│ └── useTheme.ts
├── App.tsx # Main App with product grid + theme toggle
└── main.tsx # React app entry point


---

## 🧠 Key Features

### ✅ Product API Integration
- Data fetched from `https://fakestoreapi.com/products` using TanStack Query
- Includes loading and error states

### 🛒 Cart Management (Redux Toolkit)
- Add to cart
- Increment/decrement quantity (minimum 1)
- Cart count persists across re-renders

### ❤️ Favorite Toggle
- Heart icon toggles favorite status
- Persisted in `localStorage`

### 🌗 Light/Dark Mode
- 🌞 / 🌙 toggle button
- Uses Tailwind's `dark:` utility
- Theme persisted in `localStorage`

---

## ⚔️ Challenges Faced

1. **Combining Redux with TanStack Query**
   - Needed to carefully decouple global state (cart) from query-cached data (products).

2. **Dark Mode Compatibility**
   - Tailwind’s `dark:` prefix required adding `darkMode: 'class'` and manual class toggling on `<html>`.

3. **Persistent State via localStorage**
   - Syncing favorites and theme with `localStorage` while keeping React state in sync was tricky.

---

## 🤝 Trade-offs Made

| Feature | Decision | Reason |
|--------|----------|--------|
| Redux vs Zustand | ✅ Redux Toolkit | Chosen for better familiarity and testability |
| Global Favorites State | ❌ Not used | Kept local inside hook to avoid unnecessary global state |
| API Caching Strategy | `react-query` defaults | Simple `useQuery` suffices for this use case |
| Component Modularization | Single `ProductCard` | Enough for the scope; can be refactored if scaling up |

---

## 🚀 How to Run

1. Clone the repo
2. Install dependencies  
   ```bash
   npm install
