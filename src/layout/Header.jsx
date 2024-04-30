import { Link } from "react-router-dom";
import HeaderButton from "../components/HeaderButton";
import { LOGO_URL } from "../config/env";
import { CartIcon, SearchIcon } from "../utils/Icons";

export default function Header() {

    return (
        <div className="grid grid-cols-3 bg-primary-base px-10 py-2 border-b-[0.5px] border-neutral-base fixed top-0 w-full shadow-md font-base text-sm font-light">
            <div className="flex items-center gap-7 ">
                <Link to="/">
                    <img className="min-w-20 max-w-20" src={LOGO_URL} alt="Coolest" />
                </Link>
                <b className=" hover:text-neutral-200 cursor-pointer">Category</b>
            </div>
            <div className="flex items-center justify-center ">
                <form className="flex items-center gap-2 outline outline-1 outline-red-800">
                    <input type="text" />
                    <SearchIcon />
                </form>
            </div>
            <div className="flex items-center justify-end gap-7">
                <HeaderButton to={"/cart"}>
                    <CartIcon />
                </HeaderButton>
                <HeaderButton to={"/login"} title={"Login"} />
            </div>
        </div>
    )
}
