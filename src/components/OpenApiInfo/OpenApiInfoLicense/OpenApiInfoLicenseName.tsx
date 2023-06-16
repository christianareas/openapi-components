// OpenAPI Info › License › Name component’s type definition.
type OpenApiInfoLicenseNameProps = {
	name: string
}

// OpenAPI Info › License › Name component.
const OpenApiInfoLicenseName: React.FC<OpenApiInfoLicenseNameProps> = ({ name }) => (
	<span>{name}</span>
)

export default OpenApiInfoLicenseName
