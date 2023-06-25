// Dependencies.
import React from "react"

// Child components.
import {
	OpenApiInfoContactName,
	OpenApiInfoContactEmail } from "../../"

// Component.
export default function OpenApiInfoContact() {
	// TSX.
	return (
		<p>
			Contact: <OpenApiInfoContactName /> (<OpenApiInfoContactEmail />)
		</p>
	)
}
