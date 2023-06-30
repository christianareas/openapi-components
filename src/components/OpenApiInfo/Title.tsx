// Dependencies.
import React from "react"
import { useOpenApiData, Oas_3_1_0_Type } from "../../"

// Component.
type TitleProps = {
	className?: string
}

export default function Title({ className }: TitleProps) {
	// Get the OpenAPI data.
	const info: Oas_3_1_0_Type["info"] | undefined = useOpenApiData()?.info

	// If there’s no OpenAPI data, return null.
	if (!info?.title) return null

	// TSX.
	return (
		<h1 className={className}>
			{info.title}
		</h1>
	)
}
