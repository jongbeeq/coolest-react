import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { infoPassword, registerTerm, switchToLoginTerm } from "../../config/foundation";
import InputRow from "./InputRow";
import SubmitButton from "./SubmitButton";
import SwitchModeButton from "./SwitchModeButton";
import { registerAction } from "../../store/slice/authSlice";


export default function RegisterForm(props) {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { clickSwitch } = props
    const [keepPassword, setKeepPassword] = useState(null)
    const dispatch = useDispatch()

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
                onChange: value => {
                    console.log(value)
                    setKeepPassword(value)
                }
            },
            info: infoPassword
        },
        {
            name: "confirmPassword", title: "Confirm Password", type: "password",
            validateCondition: {
                required: 'Confirm Password is required',
                validate: (confirmPassword) => confirmPassword === keepPassword || 'Confirm Password must same as Password'
            }
        },
        {
            name: "address", title: "Address", validateCondition: {
                required: 'Address is required'
            }
        },
    ]

    const handleClickSwitch = () => clickSwitch(false)

    const handleSubmitForm = data => {
        console.log(data)
        dispatch(registerAction(data))
    }

    useEffect(() => {
        console.log(keepPassword)
    }, [keepPassword])

    return (
        <div className="flex flex-col items-center gap-5">
            <h1 className="font-medium text-4xl">{registerTerm}</h1>
            <form className="flex flex-col gap-2" onSubmit={handleSubmit(handleSubmitForm)}>
                {registerRows.map(row => <InputRow register={register} key={row.name} name={row.name} title={row.title} type={row.type} validateCondition={row.validateCondition} error={errors[row.name]?.message} info={row.info} />)}
                <SubmitButton title={registerTerm} />
            </form>
            <div onClick={handleClickSwitch}>
                <SwitchModeButton title={switchToLoginTerm} />
            </div>
        </div>
    )
}
