import { LOGO_URL } from "../config/env";

export default function Header() {

    return (
        <div className="grid grid-cols-3 bg-yellow-500 px-10 py-2 border-b-2 border-black fixed w-full">
            <div className="flex items-center gap-7 ">
                <img className="w-24" src={LOGO_URL} alt="Coolest" />
                <div className="">
                    <h6>Category</h6>
                </div>
            </div>
            <div className="flex items-center justify-center ">
                <input type="text" />
            </div>
            <div className="flex items-center justify-end gap-7">
                <button>Cart</button>
                <button>Login</button>
            </div>
        </div>
    )
}
