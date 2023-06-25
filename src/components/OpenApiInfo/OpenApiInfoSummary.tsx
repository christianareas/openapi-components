// Dependencies.
import React from "react"
import { useOpenApiData } from "../../"

// Component.
export default function OpenApiInfoSummary() {
	// Get the data.
	const openApiData = useOpenApiData()

	// If null, return a loading message.
	if (openApiData === null) return <span>Loading…</span>

	// TSX.
	return (
		<h2>
			{openApiData.summary}
		</h2>
	)
}
