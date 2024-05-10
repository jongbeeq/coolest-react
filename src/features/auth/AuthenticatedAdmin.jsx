import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export default function AuthenticatedAdmin({ children }) {
    const isAdmin = useSelector((state) => state.account.data?.isAdmin)

    console.log(isAdmin)

    if (!isAdmin) {
        return <Navigate to="/" />
    }
    return children
}
