import { Outlet } from "react-router-dom";
import AuthenticatedAdmin from "../features/auth/AuthenticatedAdmin";
import { useSelector } from "react-redux";
import LoadingPage from "../components/LoadingPage";

export default function AdminLayout() {
    const account = useSelector(state => state.account.data)

    return (
        !account ? <LoadingPage />
            :
            < AuthenticatedAdmin >
                <Outlet />
            </ AuthenticatedAdmin>
    )
}
