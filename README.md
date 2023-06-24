# OpenAPI Components (`openapi-components`)
*An NPM module that turns your OpenAPI file into React components.*

You provide the OpenAPI file (YAML only, for now), it give you a set of React components that you can use to build your own custom API documentation.

Note: This is a work in progress. A beta release, more features, and more docs are on the way!

## Get Started

First, install the package (not yet published):

```bash
npm install openapi-components
```

Then, import the provider and use it to wrap your app:

```tsx
import { OpenApiDataProvider } from "openapi-components"

...

const urlToOpenApiFile = "https://raw.githubusercontent.com/christianareas/resume/main/docs/spec/_versions/resume-api-0.1.1.yaml"

<OpenApiDataProvider urlToOpenApiFile={urlToOpenApiFile}>
	<App />
</OpenApiDataProvider>
```

Finally, use any of the available components in your app. For example:

```tsx
import { OpenApiInfoTitle } from "openapi-components"

...

<OpenApiInfoTitle />
```
