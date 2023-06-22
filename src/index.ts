// Parse the OpenAPI data function.
import parseOpenApiData from "./utils/parseOpenApiData"

// OpenAPI Info components.
import OpenApiInfo from "./components/OpenApiInfo"
import OpenApiInfoTitle from "./components/OpenApiInfo/OpenApiInfoTitle"
import OpenApiInfoSummary from "./components/OpenApiInfo/OpenApiInfoSummary"
import OpenApiInfoDescription from "./components/OpenApiInfo/OpenApiInfoDescription"
import OpenApiInfoContact from "./components/OpenApiInfo/OpenApiInfoContact"
import OpenApiInfoContactName from "./components/OpenApiInfo/OpenApiInfoContact/OpenApiInfoContactName"
import OpenApiInfoContactEmail from "./components/OpenApiInfo/OpenApiInfoContact/OpenApiInfoContactEmail"
import OpenApiInfoLicense from "./components/OpenApiInfo/OpenApiInfoLicense"
import OpenApiInfoLicenseName from "./components/OpenApiInfo/OpenApiInfoLicense/OpenApiInfoLicenseName"
import OpenApiInfoLicenseIdentifier from "./components/OpenApiInfo/OpenApiInfoLicense/OpenApiInfoLicenseIdentifier"
import OpenApiInfoVersion from "./components/OpenApiInfo/OpenApiInfoVersion"

export default parseOpenApiData

export {
	OpenApiInfo,
	OpenApiInfoTitle,
	OpenApiInfoSummary,
	OpenApiInfoDescription,
	OpenApiInfoContact,
	OpenApiInfoContactName,
	OpenApiInfoContactEmail,
	OpenApiInfoLicense,
	OpenApiInfoLicenseName,
	OpenApiInfoLicenseIdentifier,
	OpenApiInfoVersion,
}
