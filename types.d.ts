declare module "openapi-components" {
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

	export function parseOpenApiData(pathToOpenApiFile: string): OpenApiDataType	
}
