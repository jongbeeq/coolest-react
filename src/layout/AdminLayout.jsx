import { Outlet } from "react-router-dom";
import AuthenticatedAdmin from "../features/auth/AuthenticatedAdmin";

export default function AdminLayout() {
    return (
        <AuthenticatedAdmin>
            <Outlet />
        </AuthenticatedAdmin>
    )
}
