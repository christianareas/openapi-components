// OpenAPI Info › License › Identifier component’s type definition.
type OpenApiInfoLicenseIdentifierProps = {
	identifier: string
}

// OpenAPI Info › License › Identifier component.
const OpenApiInfoLicenseIdentifier: React.FC<OpenApiInfoLicenseIdentifierProps> = ({ identifier }) => (
	<span>{identifier}</span>
)

export default OpenApiInfoLicenseIdentifier
