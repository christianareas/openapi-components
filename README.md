# OpenAPI Components
`openapi-components` is a (soon-to-be published) NPM module that turns your OpenAPI specification into React components. You provide a link to your OpenAPI file, it provides you with a React hook and set of React components you can use to build your own, custom API docs.

This package officially supports OAS 3.1.x YAML files. You may be able to use it with OAS 3.0.x YAML files, though you might experience issues. If you’d like to use this package, consider upgrading your OpenAPI specification.

JSON-file support is on the roadmap. In the meantime, use [`js-yaml`](https://www.npmjs.com/package/js-yaml) or similar to convert your file to YAML.

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

### Set Up the OpenAPI Data Provider
Import `OpenApiDataProvider`, use it to wrap your app or the API docs portion of your app, and pass it the URL to your OpenAPI file (YAML only, for now):

```tsx
import { OpenApiDataProvider } from "openapi-components"
import OpenApiDoc from "./components/OpenApiDoc"

...

export default function DocsApiPage() {
	const urlToOpenApiFile = "https://raw.githubusercontent.com/christianareas/resume/main/docs/spec/_versions/resume-api-0.1.1.yaml"

	return (
		<OpenApiDataProvider urlToOpenApiFile={urlToOpenApiFile}>
			<OpenApiDoc />
		</OpenApiDataProvider>
	)
}
```

### Use the OpenAPI Data Hook
Import `useOpenApiData`, use it to save your OpenAPI data, and start building your API docs. All the valid OpenAPI objects and properties you passed to `OpenApiDataProvider` are available. For example:

```tsx
import { useOpenApiData } from "openapi-components"

...

export default function OpenApiDoc() {
	const openApiData = useOpenApiData()

	return (
		<div>
			<h1>
				{openApiData.info.title}
			</h1>
			
			...
			
		</div>
	)
}
```

**TypeScript:**
If you’d like to type your OpenAPI data, import `Oas_3_1_0_Type` and use it to type `openApiData`:

```tsx
import { useOpenApiData, Oas_3_1_0_Type } from "openapi-components"

...

export default function OpenApiDoc() {
	const openApiData: Oas_3_1_0_Type = useOpenApiData()
```

### Use the OpenAPI Components
To-Do.


## Uninstall
Change to your project’s directory and unlink it from `openapi-components`:

```bash
cd path/to/your-project
npm unlink openapi-components
```

Change to the `openapi-components` directory and unlink `openapi-components` from your local system:

```bash
cd path/to/openapi-components
npm unlink -g
```


## Roadmap

### Beta
- ~~Add OpenAPI type definition (based on OAS 3.1).~~
- ~~Add basic error handling.~~
- ~~Add OpenAPI hook.~~
- Add OpenAPI components (improve DevEx by borrowing design cues from [Radix](https://www.radix-ui.com)).
- Add basic caching.
- Add a docs site (Docusaurus) and publish it to GitHub Pages.
- Add JSON support.


### Future
- Add OAS 3.0 support.
- Themes, templates — or another way to give user’s a head start on their projects.