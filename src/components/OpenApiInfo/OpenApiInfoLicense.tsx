// Dependencies.
import React from "react"

// Child components.
import {
	OpenApiInfoLicenseName,
	OpenApiInfoLicenseIdentifier } from "../../"

// Component.
export default function OpenApiInfoLicense() {
	// TSX.
	return (
		<p>
			License: <OpenApiInfoLicenseName /> (<OpenApiInfoLicenseIdentifier />)
		</p>
	)
}
