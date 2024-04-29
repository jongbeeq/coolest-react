import { LOGO_URL } from "../config/env";

export default function Header() {

    return (
        <div className="grid grid-cols-3 bg-amber-500 px-10 py-2 border-b-[0.5px] border-black fixed top-0 w-full shadow-md">
            <div className="flex items-center gap-7 ">
                <a href="/">
                    <img className="min-w-20 max-w-20" src={LOGO_URL} alt="Coolest" />
                </a>
                <div className="">
                    <b>Category</b>
                </div>
            </div>
            <div className="flex items-center justify-center ">
                <input type="text" />
            </div>
            <div className="flex items-center justify-end gap-7">
                <a href="/cart">
                    <b>Cart</b>
                </a>
                <a href="/login">
                    <b>Login</b>
                </a>
            </div>
        </div>
    )
}
