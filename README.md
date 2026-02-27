# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 🛍️ NexoraCart – React E-Commerce Application

NexoraCart is a modern e-commerce web application built using React.  
It fetches products dynamically from a public API and displays them in a clean, responsive product grid layout with wishlist functionality and skeleton loading.

---

## 🚀 Live Features

- 🛒 Dynamic product listing from API
- ❤️ Wishlist toggle button (like/unlike)
- 💀 Skeleton loading animation
- ⚠️ Error handling using try-catch
- 🔄 Loading state management
- 📱 Fully responsive design
- 🎨 Modern professional UI

---

## 🛠️ Tech Stack

- React (Functional Components)
- JavaScript (ES6+)
- CSS3
- Fetch API
- FakeStore API

---

## 📦 API Used

Products are fetched from:

https://fakestoreapi.com/products

---

## 🧠 React Concepts Used

### 🔹 useState

`useState` is used to manage component state.

In this project, useState is used for:

- Storing product data
- Handling loading state
- Handling error state
- Managing wishlist toggle (liked state)

Example:

```javascript
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);