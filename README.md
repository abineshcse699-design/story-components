# UPOV UI - design system library for Angular

Based on Angular Material and Angular CDK, UPOV UI provides a set of reusable UI components and styles to help you build consistent and visually appealing web applications.

## Development App server

To start a local development app server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. 

The DEV application will automatically reload whenever you modify any of the source files in the library.
This is a simple Angular application in which you can test the components of the UPOV UI library during development instead of
preparing a storybook story for each component.

To be able to import your new component into the DEV application, make sure:

- to export it from the library's barrel file located in `projects/upov-ui/src/lib/index.ts`
  - please respect the folder structure when exporting the components, e.g. if your component is located in `projects/upov-ui/src/lib/components/my-component/`,
    the export statement should be added to `projects/upov-ui/src/lib/components/index.ts` first.
- to import the corresponding component in the `App` component of the DEV application located in `src/app/app.ts`

## Storybook

### Development

To start Storybook dev for the UPOV UI library, run:

```bash
npm run storybook
```

Then access Storybook at `http://localhost:6006/`.

### Build

To build the Storybook for production, run:

```bash
npm run build:storybook
```

This will generate a static version of the Storybook in the `dist/storybook/upov-ui` directory.

You can then serve the static files using a web server of your choice.

You can test the build locally by running:

```bash
  npm run serve:storybook-build
```

Then access Storybook at `http://localhost:3200` or `http://127.0.0.1:3200/`.

## Code scaffolding

### Using the project generator

To generate a new component using the project generator, run:

```bash
npm run g c <my-component-name>
```

This will create a new component in the `projects/upov-ui/src/lib/components/<my-component-name>/` directory, along with the necessary files and updates to barrel files.

See generator documentation in the [GENERATOR.md](GENERATOR.md) file.

### Using Angular CLI directly

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component <my-component-name> --project=upov-ui
```
or using the shorthand command:

```bash
ng g c <my-component-name> --project=upov-ui
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

Using Angular CLI directly does not automatically update barrel files. You will need to manually add export statements to the appropriate `index.ts` files.
Your component must be exported from the library's barrel file located in `projects/upov-ui/src/lib/index.ts` to be accessible when the library is consumed.

## Building

To build the library run:

```bash
npm run build
```

This will compile the library and store the build artifacts in the `dist/upov-ui` directory. This is the directory that you would publish to npm.

## Publishing

To be defined, depending on the platform where the library will be published.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
npm run test
```
or
```bash
ng test upov-ui
```

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
