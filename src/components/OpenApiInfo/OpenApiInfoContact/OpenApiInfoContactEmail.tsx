// Dependencies.
import React from "react"

// OpenAPI Info › Contact › Name component’s type definition.
type OpenApiInfoContactEmailProps = {
	email: string
}

// OpenAPI Info › Contact › Email component.
const OpenApiInfoContactEmail: React.FC<OpenApiInfoContactEmailProps> = ({ email }) => (
	<span>
		{email}
	</span>
)

export default OpenApiInfoContactEmail
