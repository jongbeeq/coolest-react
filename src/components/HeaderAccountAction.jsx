import { useDispatch, useSelector } from "react-redux";
import HeaderButton from "./HeaderButton";
import { CartIcon, ProfileIcon } from "../utils/Icons";
import { logOut } from "../store/slice/authSlice";
import { loginTerm, logoutTerm } from "../config/foundation";

export default function HeaderAccountAction() {
    const dispatch = useDispatch()
    const account = useSelector(state => state.account.data)

    const handleLogOut = () => dispatch(logOut())

    return (
        <div className="w-[9vw] min-w-[60px] flex justify-evenly items-center">
            <HeaderButton to={"/cart"}>
                <CartIcon className={"text-[max(1.2vw,8px)]"} />
            </HeaderButton>

            {
                account ?
                    (
                        <>
                            <HeaderButton to={'/profile'}>
                                <ProfileIcon className={"text-[max(1.2vw,8px)]"} />
                            </HeaderButton>
                            <div onClick={handleLogOut}>
                                <HeaderButton title={logoutTerm} />
                            </div>
                        </>
                    )
                    :
                    <HeaderButton to={"/login"} className={"text-[max(1vw,8px)]"} title={loginTerm} />
            }
        </div >
    )
}
