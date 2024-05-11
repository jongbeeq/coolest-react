import { Outlet } from "react-router-dom";
import AuthenticatedAdmin from "../features/auth/AuthenticatedAdmin";
import { useSelector } from "react-redux";

export default function AdminLayout() {
    const loading = useSelector(state => state.account.loading)

    return (
        loading ? <div className="animate-pulse bg-black w-[100vw] h-[100vh] absolute"></div>
            :
            < AuthenticatedAdmin >
                <Outlet />
            </ AuthenticatedAdmin>
    )
}
