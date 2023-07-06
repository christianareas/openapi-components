// Dependencies.
import createOpenApiObjectComponent from "./utils/createOpenApiObjectComponent"
import createOpenApiFieldComponent from "./utils/createOpenApiFieldComponent"

// Create parent component.
const OpenApiServers = createOpenApiObjectComponent("section")

// Create child components.
const Server = createOpenApiObjectComponent("section")
const ServerUrl = createOpenApiFieldComponent(["servers", "url"], "p")
const ServerDescription = createOpenApiFieldComponent(["servers", "description"], "p")

// Attach the child components to their parent component.
OpenApiServers.Server = Server
OpenApiServers.Server.Url = ServerUrl
OpenApiServers.Server.Description = ServerDescription

export default OpenApiServers
