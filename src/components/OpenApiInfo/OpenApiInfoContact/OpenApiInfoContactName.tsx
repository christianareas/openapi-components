// OpenAPI Info › Contact › Name component’s type definition.
type OpenApiInfoContactNameProps = {
	name: string
}

// OpenAPI Info › Contact › Name component.
const OpenApiInfoContactName: React.FC<OpenApiInfoContactNameProps> = ({ name }) => (
	<span>{name}</span>
)

export default OpenApiInfoContactName
