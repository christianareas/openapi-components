// Dependencies.
import React from "react"
import { useOpenApiData, Oas_3_1_0_Type } from "../.."

// Component.
type DescriptionProps = {
	className?: string
}

export default function Description({ className }: DescriptionProps) {
	// Get the OpenAPI data.
	const info: Oas_3_1_0_Type["info"] | undefined = useOpenApiData()?.info

	// If there’s no OpenAPI data, return null.
	if (!info?.description) return null

	// TSX.
	return (
		<p className={className}>
			{info.description}
		</p>
	)
}
