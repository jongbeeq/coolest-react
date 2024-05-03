import { useState } from "react";
import LoginForm from "../features/auth/LoginForm";
import RegisterForm from "../features/auth/RegisterForm";

export default function Login() {
    const [isRegistration, setIsRegistration] = useState(false)

    return (
        <>
            {isRegistration ? <RegisterForm clickSwitch={setIsRegistration} /> : <LoginForm clickSwitch={setIsRegistration} />}
            {/* <RegisterForm clickSwitch={setIsRegistration} /> */}
        </>
    )
}
