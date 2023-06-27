// Dependencies.
import { load } from "js-yaml"
import { OpenApiDataType } from "../"

// Parse the OpenAPI data.
export async function parseOpenApiData(urlToOpenApiFile: string): Promise<OpenApiDataType> {
	try {
		// Fetch.
		const response = await fetch(urlToOpenApiFile)

		// If the response is not OK, throw an error.
		if (!response.ok) {
			throw new Error(response.statusText)
		}

		// Get the OpenAPI file’s data.
		const openApiFile = await response.text()
		const unvalidatedOpenApiData: any = load(openApiFile)

		// Validate the OAS version.
		const validOasVersion = "3.1.0"
		const oasVersion = unvalidatedOpenApiData.openapi
		if (!oasVersion) {
			throw new Error(`openapi-components only supports OAS ${validOasVersion}. Your openapi property is missing. Update your OpenAPI specification and try again.`)
		} else if (oasVersion !== validOasVersion) {
			throw new Error(`openapi-components only supports OAS ${validOasVersion}. Your OAS version is ${oasVersion}. Update your OpenAPI specification and try again.`)
		}

		// Type the OpenAPI data.
		const openApiData: OpenApiDataType = unvalidatedOpenApiData
		
		return openApiData
	} catch (error) {
		console.error(error)
		throw error
	}
}
