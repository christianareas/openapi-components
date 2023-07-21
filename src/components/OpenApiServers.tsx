// Dependencies.
import createOpenApiArrayOfComponents from "./utils/createOpenApiArrayOfComponent"
import createOpenApiObjectComponent from "./utils/createOpenApiObjectComponent"
import createOpenApiFieldComponent from "./utils/createOpenApiFieldComponent"

// Create parent component.
const Server = createOpenApiObjectComponent(
	"section"
)
const OpenApiServers = createOpenApiArrayOfComponents(
	["servers"],
	"section",
	Server
)

// Create child components.
const ServerUrl = createOpenApiFieldComponent(
	["servers", "url"],
	"p"
)
const ServerDescription = createOpenApiFieldComponent(
	["servers", "description"],
	"p"
)

// Attach the child components to their parent component.
Server.Url = ServerUrl
Server.Description = ServerDescription

export default OpenApiServers
