// Dependencies.
import { load } from "js-yaml"
import { OpenApiDataType } from ".."

// Fetch, validate, and type the OpenAPI data.
export async function fetchAndPrepareOpenApiData(urlToOpenApiFile: string): Promise<OpenApiDataType> {
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
		const oasVersion = unvalidatedOpenApiData.openapi
		const validOasVersion = "3.1"
		const semiValidOasVersion = "3.0"
		const invalidOasVersion = "2"
		const officialSupportMessage = `openapi-components officially supports OAS ${validOasVersion}.x or greater.`
		const oasVersionMessage = `Your OAS version is ${oasVersion}.`
		// If missing.
		if (!oasVersion) {
			throw new Error(`${officialSupportMessage} Your openapi property is missing. Update your OpenAPI specification and try again.`)
		// If invalid (2.x).
		} else if (oasVersion.startsWith(invalidOasVersion)) {
			throw new Error(`${officialSupportMessage} ${oasVersionMessage} Unfortunately, openapi-components doesn’t support OAS 2.x. Consider updating your OpenAPI specification and try again.`)
		// If semi-valid (3.0.x).
		} else if (oasVersion.startsWith(semiValidOasVersion)) {
			console.warn(`${officialSupportMessage} ${oasVersionMessage} You may experience issues. Consider updating your OpenAPI specification.`)
		// Catch-all.
		} else if (!oasVersion.startsWith(validOasVersion)) {
			throw new Error(`${officialSupportMessage} ${oasVersionMessage} Update your OpenAPI specification and try again.`)
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
