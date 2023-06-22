// Dependencies.
import { readFileSync } from "fs"
import { load } from "js-yaml"

// Type definitions.
export type OpenApiDataType = {
	title: string
	summary: string
	description: string
	contact: {
		name: string
		email: string
	}
	license: {
		name: string
		identifier: string
	}
	version: string
}

// Parse the OpenAPI data.
export default function parseOpenApiData(pathToOpenApiFile: string) {
	// Get the OpenAPI file’s data.
	const openApiFile = readFileSync(pathToOpenApiFile, "utf8")
	const tempOpenApiData: any = load(openApiFile) // ** See below.
	
	// ** Temporary: Once type definition complete, update above’s type, and use it instead. **
	const openApiData: OpenApiDataType = tempOpenApiData.info
	// ** Temporary: Once type definition complete, update above’s type, and use it instead. **

	return openApiData
}
