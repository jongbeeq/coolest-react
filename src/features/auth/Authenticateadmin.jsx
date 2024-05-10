import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export default function Authenticateadmin({ children }) {
    const isAdmin = useSelector((state) => state.user.data?.admin)

    if (!isAdmin) {
        return <Navigate to="/" />
    }
    return children
}
