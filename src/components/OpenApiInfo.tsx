// Dependencies.
import React, { ReactNode } from "react"

// Child components.
import Title from "./OpenApiInfo/Title"
import Summary from "./OpenApiInfo/Summary"
import Description from "./OpenApiInfo/Description"

// Component.
type OpenApiInfoProps = {
	children: ReactNode
}

export default function OpenApiInfo({ children }: OpenApiInfoProps) {
	// TSX.
	return (
		<section>
			{children}
		</section>
	)
}

OpenApiInfo.Title = Title
OpenApiInfo.Summary = Summary
OpenApiInfo.Description = Description
