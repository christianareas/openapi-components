// OpenAPI Info › Title component’s type definition.
type OpenApiInfoTitleProps = {
	title: string
}

// OpenAPI Info › Title component.
const OpenApiInfoTitle: React.FC<OpenApiInfoTitleProps> = ({ title }) => (
	<h1>{title}</h1>
)

export default OpenApiInfoTitle
