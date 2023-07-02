// Dependencies.
import React, { createElement, FC, ReactNode } from "react"

// Component template type.
type ComponentTemplateProps = {
	htmlWrapperElement: string
	className?: string
	children: ReactNode
}

// Component template.
function ComponentTemplate({ htmlWrapperElement, className, children }: ComponentTemplateProps) {
	// TSX.
	return (
		createElement(htmlWrapperElement, { className }, children)
	)
}

// Component type.
type ComponentProps = {
	htmlWrapperElement?: string
	className?: string
	children: ReactNode
}

// Component factory.
export default function createOpenApiObjectComponent(defaultHtmlWrapperElement: string) {
	// Create the component.
	const Component: FC<ComponentProps> & { [key: string]: any } = ({ htmlWrapperElement = defaultHtmlWrapperElement, className, children }) => (
		<ComponentTemplate
			htmlWrapperElement={htmlWrapperElement}
			className={className}
		>
			{children}
		</ComponentTemplate>
	)
	
	// Return the component.
	return Component
}
