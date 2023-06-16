// OpenAPI Info › Summary component’s type definition.
type OpenApiInfoSummaryProps = {
	summary: string
}

// OpenAPI Info › Summary component.
const OpenApiInfoSummary: React.FC<OpenApiInfoSummaryProps> = ({ summary }) => (
	<h2>{summary}</h2>
)

export default OpenApiInfoSummary
