// Dependencies.
import React, { createElement, ReactNode, FunctionComponent } from "react"
import { useOpenApiData, Oas_3_1_0_Type } from "../.."
import get from "lodash/get"
import createObjectComponent from "./createObjectComponent"

// Array of components template type.
type ArrayOfComponentsTemplateProps = {
	pathToOpenApiData: string[]
	htmlWrapperElement: string
	className?: string
	ChildComponent: FunctionComponent<any> // Update this type to match other code.
	children?: ReactNode
}

// Array of components template.
function ArrayOfComponentsTemplate({
	pathToOpenApiData,
	htmlWrapperElement,
	className,
	ChildComponent,
	children
}: ArrayOfComponentsTemplateProps) {
	// Get the OpenAPI data.
	const openApiData: Oas_3_1_0_Type | null = useOpenApiData()
	const openApiArrayOfObjectsData = get(openApiData, pathToOpenApiData)

	// If there's no OpenAPI data or the data isn’t an array, return null.
	if (!openApiArrayOfObjectsData || !Array.isArray(openApiArrayOfObjectsData)) return null

	// Return the array of components template.
	return createElement(
		htmlWrapperElement,
		{ className },
		openApiArrayOfObjectsData.map((item, index) => (
			<ChildComponent
				data={item}
				key={index}
			>
				{children}
			</ChildComponent>
		)
	))
}

// Array of components type.
type ArrayOfComponentsProps = {
	htmlWrapperElement?: string
	className?: string
	children?: ReactNode
}

// Array of components factory.
export default function createArrayOfObjectsComponent(
	pathToOpenApiData: string[],
	defaultHtmlWrapperElement: string,
	ChildComponent: ReturnType<typeof createObjectComponent>,
) {
	// Create the array of components.
	const ArrayOfComponents: FunctionComponent<ArrayOfComponentsProps> = ({
		htmlWrapperElement = defaultHtmlWrapperElement,
		className,
		children,
}) => (
		<ArrayOfComponentsTemplate
			pathToOpenApiData={pathToOpenApiData}
			htmlWrapperElement={htmlWrapperElement}
			className={className}
			ChildComponent={ChildComponent}
		>
			{children}
		</ArrayOfComponentsTemplate>
	)

	// Return the component.
	return ArrayOfComponents
}
