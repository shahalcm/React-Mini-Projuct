# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 🛍️ NexoraCart – Modern React E-Commerce App

NexoraCart is a modern e-commerce web application built with React.  
It dynamically fetches product data from an external API and displays it in a responsive grid layout with skeleton loading, wishlist functionality, and professional error handling.

---

## 🚀 Features

- 🛒 Dynamic product listing from API
- ❤️ Wishlist toggle (like/unlike products)
- 💀 Skeleton loading UI (shimmer animation)
- ⚠️ Error handling using try-catch
- 🔁 Retry button for failed API requests
- 🔄 Loading state management
- 📱 Fully responsive layout
- 🎨 Clean and modern UI design

---

## 🛠️ Tech Stack

- React (Functional Components)
- JavaScript (ES6+)
- CSS3
- Fetch API
- FakeStore API / Escuela API

---

## 📦 API Used

Products are fetched from:

https://api.escuelajs.co/api/v1/products

---

## 🧠 React Concepts Used

### 🔹 useState

Used for managing:

- Product data
- Loading state
- Error state
- Wishlist toggle state

Example:

```javascript
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);