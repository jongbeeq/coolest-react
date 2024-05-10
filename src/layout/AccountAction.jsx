import { useDispatch, useSelector } from "react-redux";
import HeaderButton from "../components/HeaderButton";
import { CartIcon, ProfileIcon } from "../utils/Icons";
import { logOut } from "../store/slice/authSlice";
import { loginTerm, logoutTerm } from "../config/foundation";

export default function AccountAction() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.account.data)

    const handleLogOut = () => dispatch(logOut())
    return (
        <div className="flex items-center justify-end gap-[5%]">
            <HeaderButton to={"/cart"}>
                <CartIcon className={"text-[max(1.2vw,8px)]"} />
            </HeaderButton>

            {
                user ?
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
        </div>
    )
}
