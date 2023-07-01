// Dependencies.
import React, { createElement, FC, ReactNode } from "react"

// Template.
type ObjectComponentTemplateProps = {
	label?: string
	htmlWrapperElement: string
	className?: string
	children: ReactNode
}

function ObjectComponentTemplate({ label, htmlWrapperElement, className, children }: ObjectComponentTemplateProps) {
	// TSX.
	return (
		<>
			{label && <span>{label} </span>}
			{createElement(htmlWrapperElement, { className }, children)}
		</>
	)
}

// Factory.
type ObjectComponentProps = {
	label?: string
	className?: string
	children: ReactNode
}

export default function createObjectComponent(htmlWrapperElement: string) {
	const ObjectComponent: FC<ObjectComponentProps> & { [key: string]: any } = ({ label, className, children }) => (
		<ObjectComponentTemplate
			label={label}
			htmlWrapperElement={htmlWrapperElement}
			className={className}
		>
			{children}
		</ObjectComponentTemplate>
	)

	return ObjectComponent
}
