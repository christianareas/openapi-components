// Dependencies.
import React, { ReactNode } from "react"

// Child components.
import Title from "./OpenApiInfo/Title"

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
