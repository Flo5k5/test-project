# test-project

Hey! :wave:

This project is a mono-repository.
It is composed of:

- `dev-packages` containing only dev configurations.
- `packages` containing `web` (main react application) and `ui` (react component library for UX/UI purposed) projects.

The stack used in here is yarn workspace, TypeScript, React, Redux (with redux toolkit), Styled-components, Storybook (broken, i didn't have time to investigate).

The code lint is ensured by eslint and prettier with a set of airbnb and custom rules (you can check the configuration under `dev-packages/eslint-config-flo5k5`).

## Let's play with this **_"awesome"_** project!

The main commands:

- `yarn start:web` launch the projects (ui and web) in watch mode
- `yarn build:web` build them
- `yarn storybook` launch the awesome missing stories from storybook **_still broken_**
- `yarn deploy:web` deploy this to GH-Pages:

## Or..

You can try it online here: [https://test-project.5k5.me/](https://test-project.5k5.me/)

Have a nice day!
