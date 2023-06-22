// Dependencies.
import React, { createContext, useState, useEffect, useContext } from "react"
import parseOpenApiData, { OpenApiDataType } from "@openapi-components"

// Type definitions.
type OpenApiDataProviderProps = {
	pathToOpenApiFile: string
	children: React.ReactNode
}

// Context.
const OpenApiDataContext = createContext<OpenApiDataType | null>(null)

// OpenAPI data provider.
export default function OpenApiDataProvider({ pathToOpenApiFile, children }: OpenApiDataProviderProps) {
	// Initialize the state.
	const [openApiData, setOpenApiData] = useState<OpenApiDataType | null>(null)

	// Parse the OpenAPI data.
	useEffect(() => {
		// Parse.
		const openApiData = parseOpenApiData(pathToOpenApiFile)
		// Update the state.
		setOpenApiData(openApiData)
	}, [pathToOpenApiFile])

	// Return the provider.
	return (
		<OpenApiDataContext.Provider value={openApiData}>
			{children}
		</OpenApiDataContext.Provider>
	)
}

