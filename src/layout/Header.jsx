import { Link } from "react-router-dom";
import HeaderButton from "../components/HeaderButton";
import { LOGO_URL } from "../config/env";
import { CartIcon, SearchIcon } from "../utils/Icons";
import { defaultDuration, loginTerm } from "../config/foundation";

export default function Header() {

    return (
        <div className="grid grid-cols-3 bg-primary-base px-10 py-2 border-b-[0.5px] border-neutral-base fixed top-0 w-full shadow-md font-base text-sm font-light">
            <div className="flex items-center gap-7 ">
                <Link to="/">
                    <img className="min-w-20 max-w-20" src={LOGO_URL} alt="Coolest" />
                </Link>
                <b className={"hover:text-neutral-200 cursor-pointer" + defaultDuration}>Category</b>
            </div>
            <div className="flex items-center justify-center ">
                <form className="flex items-center gap-2">
                    <input className="rounded-md ring-transparent py-1 px-3 outline-none bg-primary-sub-base border border-1 border-neutral-base " type="text" />
                    <button type="submit" className={" hover:text-neutral-fade" + defaultDuration}>
                        <SearchIcon />
                    </button>
                </form>
            </div>
            <div className="flex items-center justify-end gap-7">
                <HeaderButton to={"/cart"}>
                    <CartIcon />
                </HeaderButton>
                <HeaderButton to={"/login"} title={loginTerm} />
            </div>
        </div>
    )
}
