// Dependencies.
import React, { createContext, useState, useEffect, useContext } from "react"
import parseOpenApiData, { OpenApiDataType } from "../utils/parseOpenApiData"

// Type definitions.
type OpenApiDataProviderProps = {
	urlToOpenApiFile: string
	children: React.ReactNode
}

// Context.
const OpenApiDataContext = createContext<OpenApiDataType | null>(null)

// Provider.
export default function OpenApiDataProvider({ urlToOpenApiFile, children }: OpenApiDataProviderProps) {
	// Initialize the state.
	const [openApiData, setOpenApiData] = useState<OpenApiDataType | null>(null)

	// Parse the OpenAPI data.
	useEffect(() => {
		async function fetchOpenApiFile() {
			try {
				// Parse and update the state.
				const openApiData = await parseOpenApiData(urlToOpenApiFile)
				setOpenApiData(openApiData)
			} catch (error) {
				// If there’s an error, log and throw it.
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
