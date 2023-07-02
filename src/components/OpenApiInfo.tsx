// Dependencies.
import createOpenApiObjectComponent from "./utils/createOpenApiObjectComponent"
import createOpenApiFieldComponent from "./utils/createOpenApiFieldComponent"

// Create parent component.
const OpenApiInfo = createOpenApiObjectComponent("section")

// Create child components.
const Title = createOpenApiFieldComponent(["info", "title"], "h1")
const Summary = createOpenApiFieldComponent(["info", "summary"], "h2")
const Description = createOpenApiFieldComponent(["info", "description"], "p")
const TermsOfService = createOpenApiFieldComponent(["info", "termsOfService"], "a")
const Contact = createOpenApiObjectComponent("p")
const ContactName = createOpenApiFieldComponent(["info", "contact", "name"], "span")
const ContactUrl = createOpenApiFieldComponent(["info", "contact", "url"], "a")
const ContactEmail = createOpenApiFieldComponent(["info", "contact", "email"], "a")
const License = createOpenApiObjectComponent("p")
const LicenseName = createOpenApiFieldComponent(["info", "license", "name"], "span")
const LicenseIdentifier = createOpenApiFieldComponent(["info", "license", "identifier"], "span")
const LicenseUrl = createOpenApiFieldComponent(["info", "license", "url"], "a")
const Version = createOpenApiFieldComponent(["info", "version"], "p")

// Attach the child components to their parent component.
OpenApiInfo.Title = Title
OpenApiInfo.Summary = Summary
OpenApiInfo.Description = Description
OpenApiInfo.TermsOfService = TermsOfService
OpenApiInfo.Contact = Contact
OpenApiInfo.Contact.Name = ContactName
OpenApiInfo.Contact.Url = ContactUrl
OpenApiInfo.Contact.Email = ContactEmail
OpenApiInfo.License = License
OpenApiInfo.License.Name = LicenseName
OpenApiInfo.License.Identifier = LicenseIdentifier
OpenApiInfo.License.Url = LicenseUrl
OpenApiInfo.Version = Version

export default OpenApiInfo