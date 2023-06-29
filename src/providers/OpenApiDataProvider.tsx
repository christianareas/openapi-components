// Dependencies.
import React, { ReactNode, createContext, useState, useEffect, useContext } from "react"
import { fetchAndPrepareOpenApiData } from "../utils/fetchAndPrepareOpenApiData"
import { Oas_3_1_0_Type } from ".."

// Context.
const OpenApiDataContext = createContext<Oas_3_1_0_Type | null>(null)

// Error boundary.
type OpenApiDataProviderErrorBoundaryProps = {
	children: ReactNode
}

type OpenApiDataProviderErrorBoundaryState = {
	hasError: boolean
	error: Error | null
}

class OpenApiDataProviderErrorBoundary extends React.Component<OpenApiDataProviderErrorBoundaryProps, OpenApiDataProviderErrorBoundaryState> {
	// Initialize the states.
	state: OpenApiDataProviderErrorBoundaryState = { hasError: false, error: null }

	// Catch errors.
	static getDerivedStateFromError(error: Error) {
		console.error(error)
		return { hasError: true, error }
	}

	// If there’s an error, render a fallback component. Else, render the children.
	render() {
		if (this.state.hasError) {
			return (
				<div>
					<h2>OpenApiDataProvider Error</h2>
					<p>{this.state.error?.message}</p>
				</div>
			)
		}
		return this.props.children
	}
}

// Provider.
type OpenApiDataProviderProps = {
	urlToOpenApiFile: string
	children: ReactNode
}

export function OpenApiDataProvider({ urlToOpenApiFile, children }: OpenApiDataProviderProps) {
	// Initialize states.
	const [openApiData, setOpenApiData] = useState<Oas_3_1_0_Type | null>(null)
	const [loading, setLoading] = useState(true)

	// Fetch the OpenAPI file and set the states.
	useEffect(() => {
		async function fetchOpenApiFile() {
			try {
				const openApiData = await fetchAndPrepareOpenApiData(urlToOpenApiFile)
				setOpenApiData(openApiData)
				setLoading(false)
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
				{loading ? <p>Loading…</p> : children}
			</OpenApiDataProviderErrorBoundary>
		</OpenApiDataContext.Provider>
	)
}

// Hook.
export function useOpenApiData(): Oas_3_1_0_Type | null {
	// Get the context.
	const context = useContext(OpenApiDataContext)
	
	// If undefined, return an error.
	if (context === undefined || context === null) {
		throw new Error("You must use useOpenApiData() within the OpenApiDataProvider.")
	}

	// Return the context.
	return context
}
