// Dependencies.
import React, { createElement, FC } from "react"
import { useOpenApiData, Oas_3_1_0_Type } from "../.."
import get from "lodash/get"

// Template.
type FieldComponentTemplateProps = {
	pathToOpenApiData: string[]
	htmlWrapperElement: string
	className?: string
}

function FieldComponentTemplate({ pathToOpenApiData, htmlWrapperElement, className }: FieldComponentTemplateProps) {
	// Get the OpenAPI field data.
	const openApiData: Oas_3_1_0_Type | null = useOpenApiData()
	const openApiFieldData = get(openApiData, pathToOpenApiData)

	// If there’s no OpenAPI field data, return null.
	if (!openApiFieldData) return null

	// TSX.
	return (
		createElement(htmlWrapperElement, { className }, openApiFieldData)
	)
}

// Factory.
type FieldComponentProps = {
	className?: string
}

export default function createFieldComponent(pathToOpenApiData: string[], htmlTag: string) {
	const FieldComponent: FC<FieldComponentProps> = ({ className }) => (
		<FieldComponentTemplate
			pathToOpenApiData={pathToOpenApiData}
			htmlWrapperElement={htmlTag}
			className={className}
		/>
	)
	
	return FieldComponent
}
