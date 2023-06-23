"use client"

// Dependencies.
import React, { createContext, useState, useEffect, useContext } from "react"
import parseOpenApiData, { OpenApiDataType } from "../../src/"

// Type definitions.
type OpenApiDataProviderProps = {
	pathToOpenApiFile: string
	children: React.ReactNode
}

// Context.
const OpenApiDataContext = createContext<OpenApiDataType | null>(null)

// Provider.
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
