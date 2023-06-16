// Dependencies.
import { readFileSync } from "fs"
import { load } from "js-yaml"

// Get the OpenAPI object.
const pathToOpenApiFile = "../../../docs/spec/_versions/resume-api-0.1.1.yaml"
const openApiFile = readFileSync(pathToOpenApiFile, "utf8")
const openApiData: any = load(openApiFile) // To-do: Update the object’s type.

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

// OpenAPI Info data object.
export const openApiInfoData: OpenApiInfoData = openApiData.info

export default openApiData
