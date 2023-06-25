// Dependencies.
import React, { createContext, useState, useEffect, useContext } from "react"
import { parseOpenApiData } from "../utils/parseOpenApiData"
import { OpenApiDataType, OpenApiDataProviderProps } from "../"

// Context.
const OpenApiDataContext = createContext<OpenApiDataType | null>(null)

// Provider.
export function OpenApiDataProvider({ urlToOpenApiFile, children }: OpenApiDataProviderProps) {
	// Initialize the state.
	const [openApiData, setOpenApiData] = useState<OpenApiDataType | null>(null)

	// Parse the OpenAPI file and set the state.
	useEffect(() => {
		async function fetchOpenApiFile() {
			try {
				const openApiData = await parseOpenApiData(urlToOpenApiFile)
				setOpenApiData(openApiData)
			} catch (error) {
				console.error(error)
				throw error
			}
		}
		fetchOpenApiFile()
	}, [urlToOpenApiFile])
	
	// Return the provider.
	return (
		<OpenApiDataContext.Provider value={openApiData}>
			{children}
		</OpenApiDataContext.Provider>
	)
}

// Hook.
export function useOpenApiData(): OpenApiDataType | null {
	// Get the context.
	const context = useContext(OpenApiDataContext)
	
	// If undefined, return an error.
	if (context === undefined) {
		throw new Error("useOpenApiData must be used within OpenApiDataProvider")
	}

	// Return the context.
	return context
}
