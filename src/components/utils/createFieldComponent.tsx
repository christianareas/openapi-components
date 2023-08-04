// Dependencies.
import React, { useMemo, createElement, FunctionComponent } from "react"
import { useOpenApiData, Oas_3_1_0_Type } from "../.."
import get from "lodash/get"
import { Parser, HtmlRenderer } from "commonmark"

// Component template type.
type ComponentTemplateProps = {
	pathToOpenApiData: string[]
	htmlWrapperElement: string
	className?: string
}

// Component template.
function ComponentTemplate({
	pathToOpenApiData,
	htmlWrapperElement,
	className,
}: ComponentTemplateProps) {
	// Get the OpenAPI data.
	const openApiData: Oas_3_1_0_Type | null = useOpenApiData()
	const openApiFieldData = get(openApiData, pathToOpenApiData)

	// If there’s no OpenAPI data, return null.
	if (!openApiFieldData) return null

	// Define special fields.
	const markdownFields = new Set(["info.description"])
	const urlFields = new Set(["info.termOfService", "info.contact.url", "info.license.url"])
	const emailFields = new Set(["info.contact.email"])

	// Instantiate the markdown parser and HTML renderer.
	const markdownParser = new Parser()
	const htmlRenderer = new HtmlRenderer()

	// Identify special fields.
	const isMarkdownField = markdownFields.has(pathToOpenApiData.join("."))
	const isUrlField = urlFields.has(pathToOpenApiData.join("."))
	const isEmailField = emailFields.has(pathToOpenApiData.join("."))

	// If the field is markdown, convert it to HTML.
	if (isMarkdownField) {
		const parsedMarkdown = useMemo(() => markdownParser.parse(openApiFieldData), [openApiFieldData])
		const renderedHtml = useMemo(() => htmlRenderer.render(parsedMarkdown), [parsedMarkdown])
		return (
			createElement(
				htmlWrapperElement,
				{ className, dangerouslySetInnerHTML: { __html: renderedHtml } },
			)
		)
	}

	// If the field is a URL, add an href="…" attribute.
	if (isUrlField && htmlWrapperElement === "a") {
		return (
			createElement(
				htmlWrapperElement,
				{ className, href: openApiFieldData },
				openApiFieldData,
			)
		)
	}

	// If the field is an email, add an href="mailto:…" attribute.
	if (isEmailField && htmlWrapperElement === "a") {
		return (
			createElement(
				htmlWrapperElement,
				{ className, href: `mailto:${openApiFieldData}` },
				openApiFieldData,
			)
		)
	}

	// Else, return the component template as-is.
	return (
		createElement(
			htmlWrapperElement,
			{ className },
			openApiFieldData,
		)
	)
}

// Component type.
type ComponentProps = {
	htmlWrapperElement?: string
	className?: string
}

// Component factory.
export default function createFieldComponent(
	pathToOpenApiData: string[],
	defaultHtmlWrapperElement: string,
) {
	// Create the component.
	const Component: FunctionComponent<ComponentProps> = ({
		htmlWrapperElement = defaultHtmlWrapperElement,
		className,
	}) => (
		<ComponentTemplate
			pathToOpenApiData={pathToOpenApiData}
			htmlWrapperElement={htmlWrapperElement}
			className={className}
		/>
	)

	// Return the component.
	return Component
}
