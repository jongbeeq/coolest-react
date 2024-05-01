import { registerTerm, switchToLoginTerm } from "../../config/foundation";
import InputRow from "./InputRow";
import SubmitButton from "./SubmitButton";
import SwitchModeButton from "./SwitchModeButton";
import { useEffect, useState } from "react";
import axios from "../../config/axios";
import { registerSchema } from "../../validators/auth-validator";

export default function RegisterForm(props) {
    const { clickSwitch } = props
    const [registerData, setRegisterData] = useState({})

    const registerRows = [
        { name: "firstName", title: "First Name" },
        { name: "lastName", title: "Last Name" },
        { name: "email", title: "Email" },
        { name: "mobile", title: "Mobile" },
        { name: "password", title: "Password", type: "password" },
        { name: "confirmPassword", title: "Confirm Password", type: "password" },
        { name: "address", title: "Address" },
    ]

    useEffect(() => console.log(registerData), [registerData])

    const handleClickSwitch = () => clickSwitch(false)

    const handleSubmit = e => {
        e.preventDefault()
        // const { value, error } = registerSchema.validate(registerData)
        // console.log(value)
        // console.log(error)
        // axios.post('/auth/register', registerData).then(console.log()).catch(console.log())
    }
    return (
        <div className="flex flex-col items-center gap-5">
            <h1 className="font-medium text-4xl">{registerTerm}</h1>
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                {registerRows.map(row => <InputRow key={row.name} name={row.name} title={row.title} type={row.type} formData={registerData} setFormData={setRegisterData} />)}
                <SubmitButton title={registerTerm} />
            </form>
            <div onClick={handleClickSwitch}>
                <SwitchModeButton title={switchToLoginTerm} />
            </div>
        </div>
    )
}
