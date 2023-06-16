// OpenAPI Info › Contact component’s children.
import OpenApiInfoContactName from "./OpenApiInfoContact/OpenApiInfoContactName"
import OpenApiInfoContactEmail from "./OpenApiInfoContact/OpenApiInfoContactEmail"

// OpenAPI Info › Contact component’s type definition.
type OpenApiInfoContactProps = {
	contact: {
		name: string
		email: string
	}
}

// OpenAPI Info › Contact component.
const OpenApiInfoContact: React.FC<OpenApiInfoContactProps> = ({ contact }) => (
	<p>
		Contact: <OpenApiInfoContactName name={contact.name} /> (<OpenApiInfoContactEmail email={contact.email} />)
	</p>
)

export default OpenApiInfoContact
