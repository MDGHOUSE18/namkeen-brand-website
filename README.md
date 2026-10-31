# NamkeenBrandWebsite

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.19.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Free Deployment on GitHub Pages

This repository is configured for 100% free hosting on GitHub Pages with two easy methods:

### Method A: Automated GitHub Actions CI/CD (Recommended)
Every commit pushed to the `main` branch automatically triggers the `.github/workflows/deploy.yml` workflow to build and publish the latest site.

To enable GitHub Pages in your repository:
1. Go to your repository on GitHub: `https://github.com/MDGHOUSE18/namkeen-brand-website`
2. Click **Settings** > **Pages** (in the left sidebar).
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. That's it! Your site will be live at: `https://mdghouse18.github.io/namkeen-brand-website/`

### Method B: Manual One-Click Deploy via CLI
You can also build and deploy directly to the `gh-pages` branch using npm:

```bash
npm run deploy
```

This script automatically:
- Builds the Angular production bundle with `--base-href /namkeen-brand-website/`
- Copies `index.html` to `404.html` so client-side SPA routes (e.g. `/about`, `/products`, `/contact`) work on browser reload
- Creates `.nojekyll` to prevent GitHub from ignoring underscore-prefixed asset files
- Pushes the built bundle to the `gh-pages` branch

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
