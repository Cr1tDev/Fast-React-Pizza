# 🍕 Fast React Pizza

A modern pizza ordering application built with React, featuring a smooth user experience for browsing the menu, managing your cart, and placing orders.

## ✨ Features

- **User Authentication**: Create and manage your username
- **Menu Browsing**: Browse through available pizzas with detailed information
- **Shopping Cart**: Add items to cart, update quantities, and remove items
- **Order Management**: Create new orders and track existing ones
- **Order Updates**: Update order status and details
- **Responsive Design**: Beautiful, modern UI that works on all devices
- **Real-time Data**: Fetches menu and order data from a REST API

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Redux Toolkit** - State management
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** package manager

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/fast-react-pizza.git
cd fast-react-pizza
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

### Building for Production

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

### Linting

Run ESLint to check for code issues:
```bash
npm run lint
```

## 📁 Project Structure

```
fast-react-pizza/
├── public/              # Static assets
├── src/
│   ├── features/        # Feature-based modules
│   │   ├── cart/        # Shopping cart functionality
│   │   ├── menu/        # Menu display
│   │   ├── order/       # Order management
│   │   └── user/        # User authentication
│   ├── services/        # API services and data loaders
│   ├── ui/              # Reusable UI components
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Main app component with routing
│   ├── main.jsx         # Application entry point
│   ├── store.js         # Redux store configuration
│   └── index.css        # Global styles
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Key Features Explained

### Routing
The app uses React Router for navigation with the following routes:
- `/` - Home page with user creation
- `/menu` - Browse available pizzas
- `/cart` - View and manage cart items
- `/order/new` - Create a new order
- `/order/:orderId` - View and update specific orders

### State Management
Redux Toolkit is used to manage:
- User state (username)
- Cart state (items, quantities, totals)

### API Integration
The app connects to an external API (`react-fast-pizza-api.jonas.io`) for:
- Fetching menu items
- Creating orders
- Retrieving order details
- Updating orders

## 🎨 Styling

The application uses Tailwind CSS for styling, providing:
- Responsive design utilities
- Modern, clean UI components
- Consistent color scheme and typography

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- API provided by [react-fast-pizza-api.jonas.io](https://react-fast-pizza-api.jonas.io)

---

Made with ❤️ using React and Vite
