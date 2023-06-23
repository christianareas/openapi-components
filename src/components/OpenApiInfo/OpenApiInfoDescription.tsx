// Dependencies.
import React from "react"
import { useOpenApiData } from "../../../src"

// Component.
export default function OpenApiInfoDescription() {
	// Get the data.
	const openApiData = useOpenApiData()

	// If null, return a loading message.
	if (openApiData === null) return <span>Loading…</span>

	// TSX.
	return (
		<p>
			{openApiData.description}
		</p>
	)
}
