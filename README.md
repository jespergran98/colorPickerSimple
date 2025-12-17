ColorPicker component (simple) :

Nettsiden viser en colorSelector på venstre side, der brukeren kan velge mellom 5 forskjellige farger. ColorSelector er en knapp som viser en farge, og når knappen trykkes vises en dropdown der brukeren kan velge mellom 5 farger.

Nettsiden har en ColorBox på høyre side som består av en farge.

Når brukeren endrer fargen i ColorSelector oppdaterer ColorBox farge ved hjelp av props som sendes til ColorBox.

ColorSelector bruker useState for å lagre den valgte fargen.

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
