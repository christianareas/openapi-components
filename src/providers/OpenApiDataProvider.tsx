// Dependencies.
import React, { ReactNode, createContext, useState, useEffect, useContext } from "react"
import { fetchAndPrepareOpenApiData } from "../utils/fetchAndPrepareOpenApiData"
import { OpenApiDataType } from ".."

// Context.
const OpenApiDataContext = createContext<OpenApiDataType | null>(null)

// Error boundary.
type OpenApiDataProviderErrorBoundaryProps = {
	children: ReactNode
}

type OpenApiDataProviderErrorBoundaryState = {
	hasError: boolean
	error: Error | null
}

class OpenApiDataProviderErrorBoundary extends React.Component<OpenApiDataProviderErrorBoundaryProps, OpenApiDataProviderErrorBoundaryState> {
	// Initialize the state.
	state: OpenApiDataProviderErrorBoundaryState = { hasError: false, error: null }

	// Catch errors.
	static getDerivedStateFromError(error: Error) {
		console.error(error)
		return { hasError: true, error }
	}

	// Render the error or the children.
	render() {
		// If there’s an error, render a fallback component.
		if (this.state.hasError) {
			return (
				<div>
					<h1>OpenApiDataProvider Error</h1>
					<p>{this.state.error?.message}</p>
				</div>
			)
		}
		// Else, render the children.
		return this.props.children
	}
}

// Provider.
type OpenApiDataProviderProps = {
	urlToOpenApiFile: string
	children: ReactNode
}

export function OpenApiDataProvider({ urlToOpenApiFile, children }: OpenApiDataProviderProps) {
	// Initialize the state.
	const [openApiData, setOpenApiData] = useState<OpenApiDataType | null>(null)

	// Fetch the OpenAPI file and set the state.
	useEffect(() => {
		async function fetchOpenApiFile() {
			try {
				const openApiData = await fetchAndPrepareOpenApiData(urlToOpenApiFile)
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
			<OpenApiDataProviderErrorBoundary>
				{children}
			</OpenApiDataProviderErrorBoundary>
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
