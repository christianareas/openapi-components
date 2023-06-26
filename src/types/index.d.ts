//
// OpenAPI 3.1.0 Type Definitions
// Based on OAS 3.1: https://spec.openapis.org/oas/latest.html
//
export type OpenApiDataType = {
	openapi: string
	info: Info
	servers?: Server[]
	paths: Paths
	webhooks?: Map<PathItem> | Map<Reference>
	components?: Components
	security?: SecurityRequirement[]
	tags?: Tag[]
	externalDocs?: ExternalDocs
}

// Helper
type Map<T> = {
	[key: string]: T
}

// Info
type Info = {
	title: string
	summary?: string
	description?: string
	termsOfService?: string
	contact?: {
		name?: string
		url?: string
		email?: string
	}
	license?: {
		name: string
		identifier?: string
		url?: string
	}
	version: string
}

// Server
type Server = {
	url: string
	description?: string
	variables?: Map<{
		enum?: string[]
		default: string
		description?: string
	}>
}

// Paths
type Paths = {
	[path: string]: PathItem
}

// Path Item
type PathItem = {
	$ref?: string
	summary?: string
	description?: string
	get?: Operation
	put?: Operation
	post?: Operation
	delete?: Operation
	options?: Operation
	head?: Operation
	patch?: Operation
	trace?: Operation
	servers?: Server[]
	parameters?: Parameter[] | Reference[]
}

// Operation
type Operation = {
	tags?: string[]
	summary?: string
	description?: string
	externalDocs?: ExternalDocs
	operationId?: string
	parameters?: Parameter[] | Reference[]
	requestBody?: RequestBody | Reference
	responses: Responses
	callbacks?: Map<Callback> | Map<Reference>
	deprecated?: boolean
	security?: SecurityRequirement[]
	servers?: Server[]
}

// Components
type Components = {
	schemas?: Map<Schema>
	responses?: Map<Response> | Map<Reference>
	parameters?: Map<Parameter> | Map<Reference>
	examples?: Map<Example> | Map<Reference>
	requestBodies?: Map<RequestBody> | Map<Reference>
	headers?: Map<Header> | Map<Reference>
	securitySchemes?: Map<SecurityScheme> | Map<Reference>
	links?: Map<Link> | Map<Reference>
	callbacks?: Map<Callback> | Map<Reference>
	pathItems?: Map<PathItem> | Map<Reference>
}

// Schema
type Schema = {
	title?: string
	multipleOf?: number
	maximum?: number
	exclusiveMaximum?: boolean
	minimum?: number
	exclusiveMinimum?: boolean
	maxLength?: number
	minLength?: number
	pattern?: string
	maxItems?: number
	minItems?: number
	uniqueItems?: boolean
	maxProperties?: number
	minProperties?: number
	required?: string[]
	enum?: string[] | number[]
	type?: string
	allOf?: (Schema | Reference)[]
	oneOf?: (Schema | Reference)[]
	anyOf?: (Schema | Reference)[]
	not?: Schema | Reference
	items?: Schema | Reference
	properties?: Map<Schema | Reference>
	additionalProperties?: Schema | Reference | boolean
	description?: string
	format?: "int32" | "int64" | "float" | "double" | "string" | "boolean" | "byte" | "binary" | "date" | "date-time" | "password"
	default?: any
	nullable?: boolean
	discriminator?: Discriminator
	readOnly?: boolean
	writeOnly?: boolean
	xml?: Xml
	externalDocs?: ExternalDocs
	example?: any
	deprecated?: boolean
}

type Discriminator = {
	propertyName: string
	mapping?: Map<string>
}

type Xml = {
	name?: string
	namespace?: string
	prefix?: string
	attribute?: boolean
	wrapped?: boolean
}

type Parameter = {
	name: string
	in: "query" | "header" | "path" | "cookie"
	description?: string
	required?: boolean
	deprecated?: boolean
	allowEmptyValue?: boolean // NOT RECOMMENDED
	style?: string
	explode?: boolean
	allowReserved?: boolean
	schema?: Schema | Reference
	example?: any
	examples?: Map<Example | Reference>
	content?: Map<MediaType>
}


// Request Body
type RequestBody = {
	description?: string
	content: Map<MediaType>
	required?: boolean
}

type MediaType = {
	schema?: Schema
	example?: any
	examples?: Map<Example> | Map<Reference>
	encoding?: Map<Encoding>
}

type Encoding = {
	contentType?: string
	headers?: Map<Header> | Map<Reference>
	style?: string
	explode?: boolean
	allowReserved?: boolean
}

// Responses
type Responses = {
	default?: Response | Reference
} & {
	[httpStatusCode in HttpStatusCodes]?: Response | Reference
}

type Response = {
	description: string
	headers?: Map<Header> | Map<Reference>
	content?: Map<MediaType>
	links?: Map<Link> | Map<Reference>
}

// Based on the IANA Status Code Registry: https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
// via: https://spec.openapis.org/oas/latest.html#http-status-codes
type HttpStatusCodes =
	| "100" | "101" | "102" | "103"
	| "200" | "201" | "202" | "203" | "204" | "205" | "206" | "207" | "208"
	| "226"
	| "300" | "301" | "302" | "303" | "304" | "305" | "306" | "307" | "308"
	| "400" | "401" | "402" | "403" | "404" | "405" | "406" | "407" | "408" | "409"
	| "410" | "411" | "412" | "413" | "414" | "415" | "416" | "417"
	| "421" | "422" | "423" | "424" | "425" | "426" | "428" | "429"
	| "431"
	| "451"
	| "500" | "501" | "502" | "503" | "504" | "505" | "506" | "507" | "508"
	| "511"

type Header = {
	description?: string
	required?: boolean
	deprecated?: boolean
	allowEmptyValue?: boolean // NOT RECOMMENDED
	style?: string
	explode?: boolean
	allowReserved?: boolean // **
	schema?: Schema | Reference
	example?: any
	examples?: Map<Example | Reference>
	content?: Map<MediaType>
}


// Security Scheme
type SecurityScheme = {
	type: "apiKey" | "http" | "mutualTLS" | "oauth2" | "openIdConnect"
	description?: string
	name?: string // apiKey
	in?: "query" | "header" | "cookie" // apiKey
	scheme?: string // http
	bearerFormat?: string // http
	flows?: {
		implicit?: {
			authorizationUrl: string
			refreshUrl?: string
			scopes: Map<string>
		}
		password?: {
			tokenUrl: string
			refreshUrl?: string
			scopes: Map<string>
		}
		clientCredentials?: {
			tokenUrl: string
			refreshUrl?: string
			scopes: Map<string>
		}
		authorizationCode?: {
			authorizationUrl: string
			tokenUrl: string
			refreshUrl?: string
			scopes: Map<string>
		}
	}
	openIdConnectUrl?: string
}

// Link
type Link = {
	operationRef?: string
	operationId?: string
	parameters?: Map<any> // add specifics
	requestBody?: any // add specifics
	description?: string
	server?: Server
}

// Callback
type Callback = {
	[expression: string]: PathItem | Reference
}

// Example
type Example = {
	summary?: string
	description?: string
	value?: any
	externalValue?: string
}

// Reference
type Reference = {
	$ref: string
	summary?: string
	description?: string
}

// Security Requirement
type SecurityRequirement = {
	[name: string]: string[]
}

// Tag
type Tag = {
	name: string
	description?: string
	externalDocs?: ExternalDocs
}

// External Documentation
type ExternalDocs = {
	description?: string
	url: string
}
