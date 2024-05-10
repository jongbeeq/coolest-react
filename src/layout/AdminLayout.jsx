import { Outlet } from "react-router-dom";
import Authenticateadmin from "../features/auth/Authenticateadmin";

export default function AdminLayout() {
    return (
        <Authenticateadmin>
            <Outlet />
        </Authenticateadmin>
    )
}
