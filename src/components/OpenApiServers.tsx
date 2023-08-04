// Dependencies.
import createOpenApiArrayOfComponents from "./utils/createArrayOfObjectsComponent"
import createObjectComponent from "./utils/createObjectComponent"
import createFieldComponent from "./utils/createFieldComponent"

// Create parent component.
const Server = createObjectComponent( "section" )

// Create child components.
const ServerUrl = createFieldComponent( ["servers", "url"], "p" )
const ServerDescription = createFieldComponent( ["servers", "description"], "p" )

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
