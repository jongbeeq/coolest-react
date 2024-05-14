import { useState } from "react";
import LoginForm from "../features/auth/LoginForm";
import RegisterForm from "../features/auth/RegisterForm";
import { useSelector } from "react-redux";
import AlertBox from "../components/AlertBox";

export default function Login() {
    const [isRegistration, setIsRegistration] = useState(false)
    const errorMessage = useSelector(state => state.account.error?.message)

    return (
        <div className="flex flex-col gap-2">
            {isRegistration ? <RegisterForm clickSwitch={setIsRegistration} /> : <LoginForm clickSwitch={setIsRegistration} />}
            <div className="bg-green-500 relative flex justify-center">
                {errorMessage && <AlertBox detail={errorMessage} className={"text-[max(1vw,8px)]"} />}
            </div>
        </div>
    )
}
