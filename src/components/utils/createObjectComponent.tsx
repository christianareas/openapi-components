// Dependencies.
import React, { createElement, ReactNode, FunctionComponent, createContext } from "react"

// Context.
const ObjectContext = createContext<any>(null) // Todo: Update this type to something more specific.

// Component template type.
type ObjectComponentTemplateProps = {
	htmlWrapperElement: string
	className?: string
	children?: ReactNode
	data?: any // Todo: Update this type to something more specific.
}

// Component template.
function ObjectComponentTemplate({
	htmlWrapperElement,
	className,
	children,
	data,
}: ObjectComponentTemplateProps) {
	//
	const childrenWithProvidedData = (
		<ObjectContext.Provider
			value={data}
		>
			{children}
		</ObjectContext.Provider>
	)

	// Return the component template.
	return (
		createElement(
			htmlWrapperElement,
			{ className },
			childrenWithProvidedData,
		)
	)
}

// Component type.
type ObjectComponentProps = {
	htmlWrapperElement?: string
	className?: string
	children?: ReactNode
	data?: any // Todo: Update this type to something more specific.
}

// Component factory.
export default function createObjectComponent(
	defaultHtmlWrapperElement: string,
) {
	// Create the component.
	const ObjectComponent: FunctionComponent<ObjectComponentProps> & { [key: string]: any } = ({ // Todo: Update this type to something more specific.
		htmlWrapperElement = defaultHtmlWrapperElement,
		className,
		children,
		data,
	}) => (
		<ObjectComponentTemplate
			htmlWrapperElement={htmlWrapperElement}
			className={className}
			children={children}
			data={data}
		/>
	)
	
	// Return the component.
	return ObjectComponent
}
