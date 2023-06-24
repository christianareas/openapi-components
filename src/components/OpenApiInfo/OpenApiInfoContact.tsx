// Dependencies.
import React from "react"

// Child components.
import OpenApiInfoContactName from "./OpenApiInfoContact/OpenApiInfoContactName"
import OpenApiInfoContactEmail from "./OpenApiInfoContact/OpenApiInfoContactEmail"

// Component.
export default function OpenApiInfoContact() {
	// TSX.
	return (
		<p>
			Contact: <OpenApiInfoContactName /> (<OpenApiInfoContactEmail />)
		</p>
	)
}
