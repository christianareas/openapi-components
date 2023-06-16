// OpenAPI Info › License component’s children.
import OpenApiInfoLicenseName from "./OpenApiInfoLicense/OpenApiInfoLicenseName"
import OpenApiInfoLicenseIdentifier from "./OpenApiInfoLicense/OpenApiInfoLicenseIdentifier"


// OpenAPI Info › License component’s type definition.
type OpenApiInfoLicenseProps = {
	license: {
		name: string
		identifier: string
	}
}

// OpenAPI Info › License component.
const OpenApiInfoLicense: React.FC<OpenApiInfoLicenseProps> = ({ license }) => (
	<p>
		License: <OpenApiInfoLicenseName name={license.name} /> (<OpenApiInfoLicenseIdentifier identifier={license.identifier} />)
	</p>
)

export default OpenApiInfoLicense