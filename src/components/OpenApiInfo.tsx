// Dependencies.
import React from "react"

// Child components.
import {
	OpenApiInfoTitle,
	OpenApiInfoSummary,
	OpenApiInfoDescription,
	OpenApiInfoContact,
	OpenApiInfoLicense,
	OpenApiInfoVersion } from "../"

// Component.
export default function OpenApiInfo() {
	// TSX.
	return (
		<div>
			<OpenApiInfoTitle />
			<OpenApiInfoSummary />
			<OpenApiInfoDescription />
			<OpenApiInfoContact />
			<OpenApiInfoLicense />
			<OpenApiInfoVersion />
		</div>
	)
}
