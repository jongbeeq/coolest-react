import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import log from "../../utils/log"

export default function AuthenticatedAdmin({ children }) {
    const isAdmin = useSelector((state) => state.account.data?.isAdmin)

    log(isAdmin)

    if (!isAdmin) {
        return <Navigate to="/" />
    }
    return children
}
