import { useSelector } from "react-redux";
import HeaderButton from "./HeaderButton";
import LogoButton from "./LogoButton";
import AdminFeatures from "./AdminFeatures";

export default function HeaderFeaturesList() {
    const isAdmin = useSelector(state => state.account.data?.isAdmin)

    return (
        <div className="flex-grow flex justify-between items-center gap-[4%]">
            <LogoButton />
            <div className="flex-grow flex gap-[5%]">
                <HeaderButton title="Category" />
                {isAdmin && <AdminFeatures />}
            </div>
        </div>
    )
}
