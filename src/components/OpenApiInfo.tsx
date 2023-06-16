// OpenAPI Info component’s children.
import OpenApiInfoTitle from "./OpenApiInfo/OpenApiInfoTitle"
import OpenApiInfoSummary from "./OpenApiInfo/OpenApiInfoSummary"
import OpenApiInfoDescription from "./OpenApiInfo/OpenApiInfoDescription"
import OpenApiInfoContact from "./OpenApiInfo/OpenApiInfoContact"
import OpenApiInfoLicense from "./OpenApiInfo/OpenApiInfoLicense"
import OpenApiInfoVersion from "./OpenApiInfo/OpenApiInfoVersion"

// OpenAPI Info object’s type definition.
type OpenApiInfoProps = {
	title: string
	summary: string
	description: string
	contact: {
		name: string
		email: string
	}
	license: {
		name: string
		identifier: string
	}
	version: string
}

// OpenAPI Info component.
const OpenApiInfo: React.FC<OpenApiInfoProps> = ({
	title,
	summary,
	description,
	contact,
	license,
	version,
}) => (
	<div>
		<OpenApiInfoTitle title={title} />
		<OpenApiInfoSummary summary={summary} />
		<OpenApiInfoDescription description={description} />
		<OpenApiInfoContact contact={contact} />
		<OpenApiInfoLicense license={license} />
		<OpenApiInfoVersion version={version} />
	</div>
)

export default OpenApiInfo
