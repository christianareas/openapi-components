// Dependencies.
import React, { ReactNode, createContext, useState, useEffect, useContext } from "react"
import { fetchAndPrepareOpenApiData } from "./utils/fetchAndPrepareOpenApiData"
import { Oas_3_1_0_Type } from ".."

// Context.
const OpenApiContext = createContext<Oas_3_1_0_Type | null>(null)

// Hook.
export function useOpenApiData(): Oas_3_1_0_Type | null {
	// Get context.
	const context = useContext(OpenApiContext)
	// If there’s no context, throw an error.
	if (context === null ) {
		throw new Error("Couldn’t return the OpenAPI data. Verify you correctly set up the OpenApiDataProvider and try again.")
	}
	return context
}

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
					<strong>OpenApiDataProvider Error</strong>
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
	const [error, setError] = useState<Error | null>(null)

	// Fetch and save the OpenAPI data, and set the states.
	useEffect(() => {
		async function saveOpenApiData() {
			try {
				const openApiData = await fetchAndPrepareOpenApiData(urlToOpenApiFile)
				setError(null)
				setLoading(false)
				setOpenApiData(openApiData)
			} catch (error) {
				console.error(error)
				if (error instanceof Error) {
					setError(error)
					setLoading(false)
				}
			}
		}
		saveOpenApiData()
	}, [urlToOpenApiFile])
	
	// Return the provider.
	return (
		<OpenApiContext.Provider value={openApiData}>
			<OpenApiDataProviderErrorBoundary>
				{
					loading ? <p>Loading…</p> :
					error ? <p>Error: {error.message}</p> :
					children
				}
			</OpenApiDataProviderErrorBoundary>
		</OpenApiContext.Provider>
	)
}
