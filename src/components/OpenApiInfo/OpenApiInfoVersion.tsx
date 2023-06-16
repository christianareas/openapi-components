// OpenAPI Info › Version component’s type definition.
type OpenApiInfoVersionProps = {
	version: string
}

// OpenAPI Info › Version component.
const OpenApiInfoVersion: React.FC<OpenApiInfoVersionProps> = ({ version }) => (
	<p>Version: {version}</p>
)

export default OpenApiInfoVersion
