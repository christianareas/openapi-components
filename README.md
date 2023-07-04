# OpenAPI Components
`openapi-components` is a (soon-to-be published) NPM module that turns your OpenAPI specification into React components. You provide a link to your OpenAPI specification, it provides you with a React hook and a set of semantic, un-styled, compound React components. Use them to build your custom API documentation.

This package officially supports OAS 3.1.x YAML files with no references (`$ref`). You may be able to use it with OAS 3.0.x YAML files, but will likely experience issues. If you’d like to use this package, consider upgrading your OpenAPI specification.

JSON-file and reference support are on the roadmap. In the meantime, use [`js-yaml`](https://www.npmjs.com/package/js-yaml) (or its equivalent) to convert your file to YAML, and [json-ref-resolver](https://github.com/stoplightio/json-ref-resolver) or [swagger-cli](https://github.com/APIDevTools/swagger-cli) to resolve your references.


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
The OpenAPI data provider gives the OpenAPI data hook and OpenAPI components access to the data from your OpenAPI specification. You **must** set this up before you can use the hook or the components.

To set it up, import `OpenApiDataProvider`, use it to wrap your app or the API docs portion of your app, and pass it the URL to your OpenAPI file (YAML only, for now):

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
The OpenAPI data hook gives you direct access to the data from your OpenAPI specification. The hook is great for those who want the most control over the elements of their OpenAPI specification.

To get started, import `useOpenApiData`, use it to save your OpenAPI data, and start building your API documentation. All the OpenAPI objects and fields you passed to `OpenApiDataProvider` are available through the hook. For example:

```tsx
import { useOpenApiData } from "openapi-components"

...

export default function OpenApiDoc() {
	const openApiData = useOpenApiData()

	return (
		<div>
			<h1>
				{openApiData.info.title} (<span>{openApiData.info.version}</span>)
			</h1>
			
			...
			
		</div>
	)
}
```

#### TypeScript
If you’d like to type your OpenAPI data, import `Oas_3_1_0_Type` and use it to type `openApiData`:

```tsx
import { useOpenApiData, Oas_3_1_0_Type } from "openapi-components"

...

export default function OpenApiDoc() {
	const openApiData: Oas_3_1_0_Type = useOpenApiData()

...
```

### Use the OpenAPI Components
The OpenAPI components give you access to a set of semantic, un-styled, compound components that are based on your OpenAPI specification. The components give you an easy way to customize your API documentation.

To get started, import one of the available parent components, add its child components, and start building out your API documentation. You can style your components by passing `className`, and override a component’s HTML wrapper element by passing `htmlWrapperElement`. For example:


```tsx
import { OpenApiInfo } from "openapi-components"

...

export default function Info() {
	return (
		<OpenApiInfo>
			<OpenApiInfo.Title className="text-3xl" />
			<OpenApiInfo.Summary />
			<OpenApiInfo.Description />
			<OpenApiInfo.Contact>
				<span>Contact:</span> <OpenApiInfo.Contact.Name /> (<OpenApiInfo.Contact.Email />)
			</OpenApiInfo.Contact>
			<OpenApiInfo.License>
				<span>License:</span> <OpenApiInfo.License.Name /> (<OpenApiInfo.License.Identifier />)
			</OpenApiInfo.License>
			<p>
				<span>Version:</span> <OpenApiInfo.Version htmlWrapperElement="span" />
			</p>
		</OpenApiInfo>
	)
}
```


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
- Add OpenAPI components.
- Add a docs site (Docusaurus) and publish it to GitHub Pages.
- Add JSON support.
- Add reference (`$ref`) support.


### Future
- Add basic caching.
- Add OAS 3.0 support.
- Themes, templates — or another way to give user’s a head start on their projects.