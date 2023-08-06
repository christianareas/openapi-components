// Dependencies.
import React, { createElement, ReactNode, FunctionComponent, createContext } from "react"

// Context.
export const ObjectContext = createContext<any>(null) // Todo: Update this type to something more specific.

// Component template type.
type ObjectComponentTemplateProps = {
	htmlWrapperElement: string
	className?: string
	children?: ReactNode
	data?: any // Todo: Update this type to something more specific.
	isPartOfAnArray?: boolean
}

// Component template.
function ObjectComponentTemplate({
	htmlWrapperElement,
	className,
	children,
	data,
	isPartOfAnArray,
}: ObjectComponentTemplateProps) {
	// If the component is part of an array, return the component template with the context provider.
	if (isPartOfAnArray) {
		return (
			createElement(
				htmlWrapperElement,
				{ className },
				<ObjectContext.Provider
					value={data}
				>
					children
				</ObjectContext.Provider>,
			)				
		)
	}

	// Else, return the component template as-is.
	return (
		createElement(
			htmlWrapperElement,
			{ className },
			children,
		)
	)
}

// Component type.
type ObjectComponentProps = {
	htmlWrapperElement?: string
	className?: string
	children?: ReactNode
	data?: any // Todo: Update this type to something more specific.
	isPartOfAnArray?: boolean
}

// Component factory.
export default function createObjectComponent(
	defaultHtmlWrapperElement: string,
	defaultIsPartOfAnArray: boolean = false,
) {
	// Create the component.
	const ObjectComponent: FunctionComponent<ObjectComponentProps> & { [key: string]: any } = ({ // Todo: Update this type to something more specific.
		htmlWrapperElement = defaultHtmlWrapperElement,
		className,
		children,
		data,
		isPartOfAnArray = defaultIsPartOfAnArray,
	}) => (
		<ObjectComponentTemplate
			htmlWrapperElement={htmlWrapperElement}
			className={className}
			children={children}
			data={data}
			isPartOfAnArray={isPartOfAnArray}
		/>
	)
	
	// Return the component.
	return ObjectComponent
}
