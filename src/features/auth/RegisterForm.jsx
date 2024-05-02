import { useEffect, useState } from "react";
// import axios from "../../config/axios";
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'

import { registerTerm, switchToLoginTerm } from "../../config/foundation";
import InputRow from "./InputRow";
import SubmitButton from "./SubmitButton";
import SwitchModeButton from "./SwitchModeButton";
import { registerAction } from "../../store/slice/authSlice";


export default function RegisterForm(props) {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { clickSwitch } = props
    const [registerData, setRegisterData] = useState({})
    const [keepPassword, setKeepPassword] = useState(null)
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user.data)

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
                required: 'Email is required',
                pattern: {
                    value: /\S+@\S+\.+\S/,
                    message: 'Email is invalid format'
                }
            }
        },
        {
            name: "mobile", title: "Mobile",
            validateCondition: {
                required: 'Mobile is required',
                minLength: {
                    value: 10,
                    message: 'Mobile must have 10 digits'
                },
                maxLength: {
                    value: 10,
                    message: 'Mobile must have 10 digits'
                },
                pattern: {
                    value: /[0-9]/,
                    message: 'Mobile must be a number'
                },
            }
        },
        {
            name: "password", title: "Password", type: "password",
            validateCondition: {
                required: 'Password is required',
                minLength: {
                    value: 6,
                    message: 'Password must be at least 6 digits'
                },
                pattern: {
                    value: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])[a-zA-Z0-9#?!@$%^&*-]/,
                    message: 'Password is invalid format'
                },
                onChange: e => setKeepPassword(e.target.value)
            }
        },
        {
            name: "confirmPassword", title: "Confirm Password", type: "password",
            validateCondition: {
                required: 'Confirm Password is required',
                onChange: () => console.log(keepPassword),
                validate: (confirmPassword) => confirmPassword === keepPassword || 'Confirm Password must same as Password'
            }
        },
        {
            name: "address", title: "Address", validateCondition: {
                required: 'Address is required'
            }
        },
    ]

    useEffect(() => console.log(keepPassword), [keepPassword])
    useEffect(() => console.log(errors), [errors])

    const handleClickSwitch = () => clickSwitch(false)

    const handleSubmitForm = data => {
        console.log(data)
        dispatch(registerAction(data))
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
