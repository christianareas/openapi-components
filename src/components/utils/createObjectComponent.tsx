// Dependencies.
import React, { FC, ReactNode } from "react"

// Factory.
type ObjectComponentProps = {
	className?: string
	children: ReactNode
}

export default function createObjectComponent() {
	const ObjectComponent: FC<ObjectComponentProps> & { [key: string]: any } = ({ className, children }) => (
		<section className={className}>
			{children}
		</section>
	)

	return ObjectComponent
}
