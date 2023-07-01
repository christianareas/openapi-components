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
	className?: string
	children: ReactNode
}

export default function createObjectComponent(htmlWrapperElement: string) {
	const ObjectComponent: FC<ObjectComponentProps> & { [key: string]: any } = ({ className, children }) => (
		<ObjectComponentTemplate
			htmlWrapperElement={htmlWrapperElement}
			className={className}
		>
			{children}
		</ObjectComponentTemplate>
	)

	return ObjectComponent
}
