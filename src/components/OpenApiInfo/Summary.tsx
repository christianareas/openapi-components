// Dependencies.
import React from "react"
import { useOpenApiData, Oas_3_1_0_Type } from "../.."

// Component.
type SummaryProps = {
	className?: string
}

export default function Summary({ className }: SummaryProps) {
	// Get the OpenAPI data.
	const info: Oas_3_1_0_Type["info"] | undefined = useOpenApiData()?.info

	// If there’s no OpenAPI data, return null.
	if (!info?.summary) return null

	// TSX.
	return (
		<h2 className={className}>
			{info.summary}
		</h2>
	)
}
