// Dependencies.
import React, { createContext, useState, useEffect, useContext } from "react"
import parseOpenApiData from "@openapi-components"

// Create context.
const OpenApiContext = createContext(null)

// OpenAPI data provider’s type definition.
type OpenApiDataProviderProps = {
	pathToOpenApiFile: string
	children: React.ReactNode
}

// OpenAPI data provider.
export default function OpenApiDataProvider({ pathToOpenApiFile, children }: OpenApiDataProviderProps) {

}
