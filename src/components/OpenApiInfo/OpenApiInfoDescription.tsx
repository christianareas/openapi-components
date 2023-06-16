// OpenAPI Info › Description component’s type definition.
type OpenApiInfoDescriptionProps = {
	description: string
}

// OpenAPI Info › Description component.
const OpenApiInfoDescription: React.FC<OpenApiInfoDescriptionProps> = ({ description }) => (
	<p>{description}</p>
)

export default OpenApiInfoDescription
