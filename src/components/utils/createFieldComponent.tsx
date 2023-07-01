// Dependencies.
import React, { createElement, FC } from "react"
import { useOpenApiData, Oas_3_1_0_Type } from "../.."
import get from "lodash/get"

// Template.
type FieldComponentTemplateProps = {
	pathToOpenApiField: string[]
	htmlTag: string
	className?: string
}

function FieldComponentTemplate({ pathToOpenApiField, htmlTag, className }: FieldComponentTemplateProps) {
	// Get the OpenAPI field data.
	const openApiData: Oas_3_1_0_Type | null = useOpenApiData()
	const openApiFieldData = get(openApiData, pathToOpenApiField)

	// If there’s no OpenAPI field data, return null.
	if (!openApiFieldData) return null

	// TSX.
	return (
		createElement(htmlTag, { className }, openApiFieldData)
	)
}

// Factory.
type FieldComponentProps = {
	className?: string
}

export default function createFieldComponent(pathToOpenApiField: string[], htmlTag: string) {
	const FieldComponent: FC<FieldComponentProps> = ({ className }) => (
		<FieldComponentTemplate
			pathToOpenApiField={pathToOpenApiField}
			htmlTag={htmlTag}
			className={className}
		/>
	)
	
	return FieldComponent
}
