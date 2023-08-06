// Dependencies.
import React, { useContext, createElement, ReactNode, FunctionComponent } from "react"
import { ObjectContext } from "./createObjectComponent"

// Array of components template type.
type ArrayOfObjectsComponentTemplateProps = {
	htmlWrapperElement: string
	className?: string
	children?: ReactNode
}

// Array of components template.
function ArrayOfObjectsComponentTemplate({
	htmlWrapperElement,
	className,
	children,
}: ArrayOfObjectsComponentTemplateProps) {
	// Get the OpenAPI data.
	const openApiArrayOfObjectsData = useContext(ObjectContext)

	// If there's no OpenAPI data or the data isn’t an array, return null.
	if (!openApiArrayOfObjectsData || !Array.isArray(openApiArrayOfObjectsData)) return null

	// Return the array of components template.
	return createElement(
		htmlWrapperElement,
		{ className },
		openApiArrayOfObjectsData.map((item, index) => (
			<ObjectContext.Provider
				value={item}
				key={index}
			>
				{children}
			</ObjectContext.Provider>
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
	defaultHtmlWrapperElement: string,
) {
	// Create the array of components.
	const ArrayOfObjectsComponent: FunctionComponent<ArrayOfObjectsComponentProps> = ({
		htmlWrapperElement = defaultHtmlWrapperElement,
		className,
		children,
}) => (
		<ArrayOfObjectsComponentTemplate
			htmlWrapperElement={htmlWrapperElement}
			className={className}
		/>
	)

	// Return the component.
	return ArrayOfObjectsComponent
}
