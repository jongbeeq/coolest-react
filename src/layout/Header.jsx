import { Link } from "react-router-dom";
import HeaderButton from "../components/HeaderButton";
import { LOGO_URL } from "../config/env";
import SearchProduct from "./SearchProduct";
import AccountAction from "./AccountAction";

export default function Header() {

    return (
        <div className="w-[100vw] z-50 grid grid-cols-3 bg-primary-base px-[5%] py-[1%] border-b-[0.5px] border-neutral-base fixed top-0 shadow-md font-base text-sm font-light">
            <div className="flex gap-[3.5%] items-center w-full">
                <Link className="" to="/">
                    <img className="min-w-[40px] w-[7.5vw] max-w-[85px]" src={LOGO_URL} alt="Coolest" />
                </Link>
                <HeaderButton title="Category" />
            </div>
            <SearchProduct />
            <AccountAction />
        </div>
    )
}
