// Dependencies.
import React, { Children, cloneElement, createElement, isValidElement, FunctionComponent, ReactNode } from "react"
import { useOpenApiData, Oas_3_1_0_Type } from "../.."
import get from "lodash/get"

// Component template type.
type ComponentTemplateProps = {
	pathToOpenApiData: string[]
	htmlWrapperElement: string
	className?: string
	children: ReactNode
}

// Component template.
function ComponentTemplate({ pathToOpenApiData, htmlWrapperElement, className, children }: ComponentTemplateProps) {
	// Get the OpenAPI data.
	const openApiData: Oas_3_1_0_Type | null = useOpenApiData()
	const openApiObjectData = get(openApiData, pathToOpenApiData)

	// If there’s no OpenAPI data, return null.
	if (!openApiObjectData) return null

	// Return the component template.
	return (
		createElement(
			htmlWrapperElement,
			{ className },
			Children.map(children, (child) => {
				if (isValidElement(child)) {
					return cloneElement(child, { openApiObjectData })
				}
				return child
			})
		)
	)
}

// Component type.
type ComponentProps = {
	pathToOpenApiData: string[]
	htmlWrapperElement?: string
	className?: string
	children: ReactNode
}

// Component factory.
export default function createOpenApiObjectComponent(defaultHtmlWrapperElement: string) {
	// Create the component.
	const Component: FunctionComponent<ComponentProps> & { [key: string]: any } = ({ pathToOpenApiData, htmlWrapperElement = defaultHtmlWrapperElement, className, children }) => (
		<ComponentTemplate
			pathToOpenApiData={pathToOpenApiData}
			htmlWrapperElement={htmlWrapperElement}
			className={className}
		>
			{children}
		</ComponentTemplate>
	)
	
	// Return the component.
	return Component
}
