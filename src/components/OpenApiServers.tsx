// Dependencies.
import createOpenApiArrayOfComponents from "./utils/createOpenApiArrayOfObjectsComponent"
import createOpenApiObjectComponent from "./utils/createOpenApiObjectComponent"
import createOpenApiFieldComponent from "./utils/createOpenApiFieldComponent"

// Create parent component.
const Server = createOpenApiObjectComponent( "section" )

// Create child components.
const ServerUrl = createOpenApiFieldComponent( ["servers", "url"], "p" )
const ServerDescription = createOpenApiFieldComponent( ["servers", "description"], "p" )

// Attach the child components to their parent component.
Server.Url = ServerUrl
Server.Description = ServerDescription

// Extend the array of components type.
type OpenApiServersExtendedType = ReturnType<typeof createOpenApiArrayOfComponents> & {
	Server: typeof Server
}

// Create the array of components.
const OpenApiServers: OpenApiServersExtendedType = createOpenApiArrayOfComponents( ["servers"], "section", Server ) as OpenApiServersExtendedType

// Attach parent component to the array of components.
OpenApiServers.Server = Server

export default OpenApiServers
