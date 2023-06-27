// Dependencies.
import { load } from "js-yaml"
import { OpenApiDataType } from "../"

// 
export async function parseOpenApiData(urlToOpenApiFile: string): Promise<OpenApiDataType> {
	try {
		// Fetch the OpenAPI file.
		const fetchResponse = await fetch(urlToOpenApiFile)

		// If the response is not OK, throw an error.
		if (!fetchResponse.ok) {
			throw new Error(`Couldn’t fetch your OpenAPI specification. Verify the file is at: ${urlToOpenApiFile}. Status: ${fetchResponse.status} ${fetchResponse.statusText}.`)
		}

		// Save the OpenAPI file.
		const openApiFile = await fetchResponse.text()
		
		// Validate the OpenAPI file’s format and save the data as an object.
		let unvalidatedOpenApiData: any
		try {
			unvalidatedOpenApiData = load(openApiFile)
		} catch (error) {
			throw new Error(`openapi-components only supports YAML files. Your file is not a YAML file. Update your OpenAPI specification and try again.`)
		}

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
		
		// Return the OpenAPI data.
		return openApiData
	} catch (error) {
		if (error instanceof TypeError) {
			console.error(error)
			throw new Error(`There’s an issue with the network. Verify the URL and try again. If the issue persists, try again later. Error: ${error.message}.`)
		} else {
			console.error(error)
		}
		throw error
	}
}
