import { createContext } from "react";

export const OptionalProductContext = createContext();

export default function OptionalProductProvider(props) {
    console.log(props)
    const { children } = props
    const value = props

    return (
        <OptionalProductContext.Provider value={value}>
            {children}
        </OptionalProductContext.Provider>
    )
}
