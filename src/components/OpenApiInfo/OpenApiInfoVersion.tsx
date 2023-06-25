// Dependencies.
import React from "react"
import { useOpenApiData } from "../../"

// Component.
export default function OpenApiInfoVersion() {
	// Get the data.
	const openApiData = useOpenApiData()

	// If null, return a loading message.
	if (openApiData === null) return <span>Loading…</span>

	// TSX.
	return (
		<p>
			Version: {openApiData.version}
		</p>
	)
}
