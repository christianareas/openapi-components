// Dependencies.
import React, { createElement, FC } from "react"
import { useOpenApiData, Oas_3_1_0_Type } from "../.."
import get from "lodash/get"

// Array of components template type.
type ArrayOfComponentsTemplateProps = {
	pathToOpenApiData: string[]
	htmlWrapperElement: string
	className?: string
	ChildComponent: React.FC<any>
}

// Array of components template.
function ArrayOfComponentsTemplate({ pathToOpenApiData, htmlWrapperElement, className, ChildComponent }: ArrayOfComponentsTemplateProps) {
	// Get the OpenAPI data.
	const openApiData: Oas_3_1_0_Type | null = useOpenApiData()
	const openApiArrayData = get(openApiData, pathToOpenApiData)

	// If there's no OpenAPI data or the data isn’t an array, return null.
	if (!openApiArrayData || !Array.isArray(openApiArrayData)) return null

	// Return the array of components template.
	return createElement(
		htmlWrapperElement,
		{ className },
		openApiArrayData.map((item, index) => (
			<ChildComponent
				data={item}
				key={index}
			/>
		)
	))
}

// Array of components type.
type ArrayOfComponentsProps = {
	htmlWrapperElement?: string
	className?: string
}

// Array of components factory.
export default function createOpenApiArrayOfComponents(pathToOpenApiData: string[], defaultHtmlWrapperElement: string, ChildComponent: React.FC<any>) {
	// Create the array of components.
	const ArrayOfComponents: FC<ArrayOfComponentsProps> = ({ htmlWrapperElement = defaultHtmlWrapperElement, className }) => (
		<ArrayOfComponentsTemplate
			pathToOpenApiData={pathToOpenApiData}
			htmlWrapperElement={htmlWrapperElement}
			className={className}
			ChildComponent={ChildComponent}
		/>
	)

	// Return the component.
	return ArrayOfComponents
}
