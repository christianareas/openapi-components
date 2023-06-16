// Dependencies.
import { openApiInfoData } from "@/openapi-components/src/utils/parseOpenApi"

// OpenAPI Info › Contact › Email component.
const OpenApiInfoContactEmail: React.FC = () => (
	<span>
		{openApiInfoData.contact.email}
	</span>
)

export default OpenApiInfoContactEmail
