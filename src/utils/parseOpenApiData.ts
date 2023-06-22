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

// Parse the OpenAPI data.
export default function parseOpenApiData(pathToOpenApiFile: string) {
	// Get the OpenAPI file’s data.
	const openApiFile = readFileSync(pathToOpenApiFile, "utf8")
	const openApiData: any = load(openApiFile)
	
	// OpenAPI Info data object.
	const openApiInfoData: OpenApiInfoData = openApiData.info

	return {
		openApiInfoData,
	}
}
