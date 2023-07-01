// Dependencies.
import createObjectComponent from "./utils/createObjectComponent"
import createFieldComponent from "./utils/createFieldComponent"

// Create parent component.
const OpenApiInfo = createObjectComponent("section")

// Create child components.
const Title = createFieldComponent(["info", "title"], "h1")
const Summary = createFieldComponent(["info", "summary"], "h2")
const Description = createFieldComponent(["info", "description"], "p")
const TermsOfService = createFieldComponent(["info", "termsOfService"], "a")
const Contact = createObjectComponent("p")
const ContactName = createFieldComponent(["info", "contact", "name"], "span")
const ContactUrl = createFieldComponent(["info", "contact", "url"], "a")
const ContactEmail = createFieldComponent(["info", "contact", "email"], "a")
const License = createObjectComponent("p")
const LicenseName = createFieldComponent(["info", "license", "name"], "span")
const LicenseIdentifier = createFieldComponent(["info", "license", "identifier"], "span")
const LicenseUrl = createFieldComponent(["info", "license", "url"], "a")
const Version = createFieldComponent(["info", "version"], "span")

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