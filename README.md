# 🏢 RUANG TENGAH STUDIO

A modern React landing page built with Vite, TypeScript, and ESLint for optimal development experience.

## 👨‍💻 Creator

[I Wayan Dirgayusa](https://github.com/yusadankamu)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Tech Stack

- [React 18](https://react.dev/) - A JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [ESLint](https://eslint.org/) - Code linting tool

## 📦 Project Structure

```
ruang-tengah-studio/
├── src/
│   ├── assets/      # Static assets
│   ├── components/  # React components
│   ├── App.tsx      # Main application component
│   └── main.tsx     # Application entry point
├── public/          # Public static files
└── ...config files
```

## ✨ Features

- ⚡️ Lightning fast HMR with Vite
- 🔍 TypeScript for better type safety
- 📝 ESLint configuration for code quality
- 🎨 Modern React with hooks
- 🔧 Production-ready build setup

## 🧩 Development

### ESLint Configuration

The project includes a comprehensive ESLint setup for React and TypeScript. To enable type-aware lint rules, update the configuration as follows:

1. Configure `parserOptions`:
```js
export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

2. Use type-checked configurations:
- Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked`
- Optionally add `tseslint.configs.stylisticTypeChecked`

## 📄 License

MIT License © 2024 Ruang Tengah Studio

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request