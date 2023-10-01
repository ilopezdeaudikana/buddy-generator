# Buddy generator

This project was created with `npm create vue@latest`

## Stack

`Vue 3` (composition API), `Typescript`, `vite`, `vitest`, `@vue/test-utils`, `@vueuse/core`, `vite-plugin-mock-server`

## Requirements

- Add ability to select the new team members department
- Add ability to generate new buddy after clicking on the `Generate buddy` button
- Load the new buddy's avatar
- Page should be responsive
- Assume that the first department of each user is the user's primary department
- Randomly select a buddy that does not belong in the same department as the one selected in the dropdown

## Team members type

```
interface Member {
  name: string
  picture: string
  departments: string[]
}
```

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
