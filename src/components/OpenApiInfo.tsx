// Dependencies.
import React from "react"

// Child components.
import OpenApiInfoTitle from "./OpenApiInfo/OpenApiInfoTitle"
import OpenApiInfoSummary from "./OpenApiInfo/OpenApiInfoSummary"
import OpenApiInfoDescription from "./OpenApiInfo/OpenApiInfoDescription"
import OpenApiInfoContact from "./OpenApiInfo/OpenApiInfoContact"
import OpenApiInfoLicense from "./OpenApiInfo/OpenApiInfoLicense"
import OpenApiInfoVersion from "./OpenApiInfo/OpenApiInfoVersion"

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
