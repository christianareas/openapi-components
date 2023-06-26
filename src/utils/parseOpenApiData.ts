// Dependencies.
import { load } from "js-yaml"
import { OpenApiDataType } from "../"

// Parse the OpenAPI data.
export async function parseOpenApiData(urlToOpenApiFile: string): Promise<OpenApiDataType> {
	try {
		// Fetch.
		const response = await fetch(urlToOpenApiFile)

		// If the response is not OK, throw an error.
		if (!response.ok) throw new Error(response.statusText)

		// Get the OpenAPI file’s data.
		const openApiFile = await response.text()
		const tempOpenApiData: any = load(openApiFile) // ** See below.

		// ** Temporary: Once type definition complete, consolidate with above. **
		const openApiData: OpenApiDataType = tempOpenApiData
		// ** Temporary: Once type definition complete, consolidate with above. **

		return openApiData
	} catch (error) {
		console.error(error)
		throw error
	}
}
