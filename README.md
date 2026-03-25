Тестовое задание: веб-приложение для управления объявлениями с AI-помощником.

## Функционал
В приложении используется мок-API (эмуляция запросов), архитектура подготовлена для интеграции с реальным backend.
В рамках ограниченного времени не удалось полностью реализовать некоторые части функционала:
- Интеграция с реальным backend (API-запросы)
- Полноценная реализация AI-функций (используется заглушка / планируется интеграция с LLM)
- Расширенная обработка характеристик в зависимости от категории
- Дополнительные UX-улучшения (например, loading-состояния, debounce поиска)
При этом основное внимание было уделено:
- корректной архитектуре приложения
- проработке пользовательского интерфейса
- реализации ключевой бизнес-логики
В случае необходимости готова доработать весь недостающий функционал

### Список объявлений
- Отображение карточек объявлений
- Поиск по названию
- Сортировка (по цене, по новизне)
- Фильтрация:
  - по категории
  - только требующие доработок
- Пагинация (по 10 объявлений)
- Отображение статуса "Требует доработок"


### Страница объявления
- Название и цена
- Дата публикации
- Изображение (placeholder)
- Характеристики товара
- Описание
- Блок "Требуются доработки" (с автоматическим определением незаполненных полей)
- Навигация:
  - назад к списку
  - переход к редактированию


### Редактирование объявления
- Форма редактирования:
  - категория (обязательное поле)
  - название (обязательное)
  - цена (обязательное)
  - характеристики
  - описание (со счётчиком символов)


## Стек технологий

- React 18
- TypeScript
- Vite
- React Router
- Ant Design
- Local state management (React hooks)


## УСТАНОВКА И ЗАПУСК

```bash
npm install
npm run dev

//Костарева Анна

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
