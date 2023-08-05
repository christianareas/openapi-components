// Dependencies.
import React, { createElement, ReactNode, FunctionComponent } from "react"
import { useOpenApiData, Oas_3_1_0_Type } from "../.."
import get from "lodash/get"
import createObjectComponent from "./createObjectComponent"

// Array of components template type.
type ArrayOfObjectsComponentTemplateProps = {
	pathToOpenApiData: string[]
	htmlWrapperElement: string
	className?: string
	ChildComponent: FunctionComponent<any> // Todo: Update this type to something more specific.
	children?: ReactNode
}

// Array of components template.
function ArrayOfObjectsComponentTemplate({
	pathToOpenApiData,
	htmlWrapperElement,
	className,
	ChildComponent,
	children
}: ArrayOfObjectsComponentTemplateProps) {
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
type ArrayOfObjectsComponentProps = {
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
	const ArrayOfObjectsComponent: FunctionComponent<ArrayOfObjectsComponentProps> = ({
		htmlWrapperElement = defaultHtmlWrapperElement,
		className,
		children,
}) => (
		<ArrayOfObjectsComponentTemplate
			pathToOpenApiData={pathToOpenApiData}
			htmlWrapperElement={htmlWrapperElement}
			className={className}
			ChildComponent={ChildComponent}
		>
			{children}
		</ArrayOfObjectsComponentTemplate>
	)

	// Return the component.
	return ArrayOfObjectsComponent
}
