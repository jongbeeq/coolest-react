import LoginForm from "../features/auth/LoginForm";
import RegisterForm from "../features/auth/RegisterForm";
import { useSelector } from "react-redux";
import AlertBox from "../components/AlertBox";
import { registerModeTerm } from "../config/env";

export default function Login() {
    const errorMessage = useSelector(state => state.account.error?.message)
    const authMode = useSelector(state => state.account.authMode)

    const isRegistration = authMode === registerModeTerm

    return (
        <div className="flex flex-col gap-2">
            {isRegistration ? <RegisterForm /> : <LoginForm />}
            <div className="relative flex justify-center">
                {errorMessage && <AlertBox detail={errorMessage} className={"text-[max(1vw,8px)]"} />}
            </div>
        </div>
    )
}
