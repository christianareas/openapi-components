// Dependencies.
import React, { createElement, FC, ReactNode } from "react"

// Template.
type ObjectComponentTemplateProps = {
	htmlWrapperElement: string
	className?: string
	children: ReactNode
}

function ObjectComponentTemplate({ htmlWrapperElement, className, children }: ObjectComponentTemplateProps) {
	// TSX.
	return (
		createElement(htmlWrapperElement, { className }, children)
	)
}

// Factory.
type ObjectComponentProps = {
	htmlWrapperElement?: string
	className?: string
	children: ReactNode
}

export default function createObjectComponent(defaultHtmlWrapperElement: string) {
	const ObjectComponent: FC<ObjectComponentProps> & { [key: string]: any } = ({ htmlWrapperElement = defaultHtmlWrapperElement,className, children }) => (
		<ObjectComponentTemplate
			htmlWrapperElement={htmlWrapperElement}
			className={className}
		>
			{children}
		</ObjectComponentTemplate>
	)

	return ObjectComponent
}
