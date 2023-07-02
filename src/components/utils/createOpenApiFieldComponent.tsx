// Dependencies.
import React, { createElement, FC } from "react"
import { useOpenApiData, Oas_3_1_0_Type } from "../.."
import get from "lodash/get"

// Component template type.
type ComponentTemplateProps = {
	pathToOpenApiData: string[]
	htmlWrapperElement: string
	className?: string
}

// Component template.
function ComponentTemplate({ pathToOpenApiData, htmlWrapperElement, className }: ComponentTemplateProps) {
	// Get the OpenAPI data.
	const openApiData: Oas_3_1_0_Type | null = useOpenApiData()
	const openApiFieldData = get(openApiData, pathToOpenApiData)

	// If there’s no OpenAPI data, return null.
	if (!openApiFieldData) return null

	// TSX.
	return (
		createElement(htmlWrapperElement, { className }, openApiFieldData)
	)
}

// Component type.
type ComponentProps = {
	htmlWrapperElement?: string
	className?: string
}

// Component factory.
export default function createOpenApiFieldComponent(pathToOpenApiData: string[], defaultHtmlWrapperElement: string) {
	// Create the component.
	const Component: FC<ComponentProps> = ({ htmlWrapperElement = defaultHtmlWrapperElement, className }) => (
		<ComponentTemplate
			pathToOpenApiData={pathToOpenApiData}
			htmlWrapperElement={htmlWrapperElement}
			className={className}
		/>
	)

	// Return the component.
	return Component
}
