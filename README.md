# OpenAPI Components
`openapi-components` is a (soon-to-be published) NPM module that turns your OpenAPI file into React components. You provide a link to your OpenAPI file (YAML only, for now), it provides you with a set of React components you can use to build your own, custom API docs.


## Install
If you’d like to try `openapi-components` before it’s published, clone the repo:

```bash
gh repo clone christianareas/openapi-components
```

Change to the `openapi-components` directory, install, and build:

```bash
cd openapi-components
npm i
npm run build
```

Link `openapi-components` to your local system:

```bash
npm link
```

Change to your project’s directory and link it to `openapi-components`:

```bash
cd path/to/your-project
npm link openapi-components
```


## Get Started

### Set Up the OpenAPI Provider
Import the OpenAPI provider, use it to wrap your app or the API docs portion of your app, and pass it the URL to your OpenAPI file (YAML only, for now):

```tsx
import { OpenApiDataProvider } from "openapi-components"

...

const urlToOpenApiFile = "https://raw.githubusercontent.com/christianareas/resume/main/docs/spec/_versions/resume-api-0.1.1.yaml"

<OpenApiDataProvider urlToOpenApiFile={urlToOpenApiFile}>
	<App />
</OpenApiDataProvider>
```

### Use the OpenAPI Components
Import any of the available components and start building your API docs. All valid OpenAPI objects and properties are available as components. For example:

```tsx
import { OpenApiInfoTitle } from "openapi-components"

...

<OpenApiInfoTitle />
```


## Uninstall
Change to your project’s directory and unlink it from `openapi-components`:

```bash
cd path/to/your-project
npm unlink openapi-components
```

Change to the `openapi-components` directory, and unlink `openapi-components` from your local system:

```bash
cd path/to/openapi-components
npm unlink -g
```


## Roadmap

### Beta
- Add type definitions for all OpenAPI data objects and properties.
- Add basic error handling.
- Add all possible OpenAPI React components.
- Refactor for a better developer experience (borrowing designs from [Radix](https://www.radix-ui.com)).

### Future
- Themes, templates — or another way to give user’s a head start on their projects.