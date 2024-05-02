import { registerTerm, switchToLoginTerm } from "../../config/foundation";
import InputRow from "./InputRow";
import SubmitButton from "./SubmitButton";
import SwitchModeButton from "./SwitchModeButton";
import { useEffect, useState } from "react";
import axios from "../../config/axios";
// import { registerSchema } from "../../validators/auth-validator";
import { useForm } from 'react-hook-form'

export default function RegisterForm(props) {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { clickSwitch } = props
    const [registerData, setRegisterData] = useState({})

    const registerRows = [
        {
            name: "firstName", title: "First Name",
            validateCondition: {
                required: 'First Name is required'
            }
        },
        {
            name: "lastName", title: "Last Name",
            validateCondition: {
                required: 'Last Name is required'
            }
        },
        {
            name: "email", title: "Email",
            validateCondition: {
                required: 'Email is required'
            }
        },
        {
            name: "mobile", title: "Mobile",
            validateCondition: {
                required: 'Mobile is required'
            }
        },
        {
            name: "password", title: "Password", type: "password",
            validateCondition: {
                required: 'Password is required'
            }
        },
        {
            name: "confirmPassword", title: "Confirm Password", type: "password",
            validateCondition: {
                required: 'Confirm Password is required'
            }
        },
        {
            name: "address", title: "Address", validateCondition: {
                required: 'Address is required'
            }
        },
    ]

    useEffect(() => console.log(errors), [errors])

    const handleClickSwitch = () => clickSwitch(false)

    const handleSubmitForm = data => {
        console.log(data)
        // axios.post('/auth/register', registerData).then(console.log()).catch(console.log())
    }

    return (
        <div className="flex flex-col items-center gap-5">
            <h1 className="font-medium text-4xl">{registerTerm}</h1>
            <form className="flex flex-col gap-2" onSubmit={handleSubmit(handleSubmitForm)}>
                {registerRows.map(row => <InputRow register={register} key={row.name} name={row.name} title={row.title} type={row.type} formData={registerData} setFormData={setRegisterData} validateCondition={row.validateCondition} error={errors[row.name]?.message} />)}
                <SubmitButton title={registerTerm} />
            </form>
            <div onClick={handleClickSwitch}>
                <SwitchModeButton title={switchToLoginTerm} />
            </div>
        </div>
    )
}
