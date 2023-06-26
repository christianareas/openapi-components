// Dependencies.
import React from "react"
import { useOpenApiData } from "../../"

// Component.
export default function OpenApiInfoTitle() {
	// Get the data.
	const openApiData = useOpenApiData()

	// If null, return a loading message.
	if (openApiData === null) return <span>Loading…</span>

	// TSX.
	return (
		<h1>
			{openApiData.title}
		</h1>
	)
}
