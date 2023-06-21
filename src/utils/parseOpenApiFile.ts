// Dependencies.
import { readFileSync } from "fs"
import { load } from "js-yaml"

// OpenAPI Info data object’s type definition.
type OpenApiInfoData = {
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

// Parse the OpenAPI file.
export default function parseOpenApiFile(pathToOpenApiFile: string) {
	console.log(`Path from the module: ${pathToOpenApiFile}`)
	const openApiFile = readFileSync(pathToOpenApiFile, "utf8")
	const openApiData: any = load(openApiFile) // To-do: Improve the type definition, and add error handling (try/catch).
	
	// OpenAPI Info data object.
	const openApiInfoData: OpenApiInfoData = openApiData.info

	return {
		openApiInfoData,
	}
}
