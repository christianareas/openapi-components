// Dependencies.
import React from "react"

// Child components.
import OpenApiInfoLicenseName from "./OpenApiInfoLicense/OpenApiInfoLicenseName"
import OpenApiInfoLicenseIdentifier from "./OpenApiInfoLicense/OpenApiInfoLicenseIdentifier"

// Component.
export default function OpenApiInfoLicense() {
	// TSX.
	return (
		<p>
			License: <OpenApiInfoLicenseName /> (<OpenApiInfoLicenseIdentifier />)
		</p>
	)
}
