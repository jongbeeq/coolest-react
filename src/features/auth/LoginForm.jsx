import { useDispatch } from "react-redux";
import { loginTerm, switchToRegisterTerm } from "../../config/foundation";
import SubmitButton from "../../components/SubmitButton";
import SwitchModeButton from "./SwitchModeButton";
import { useForm } from "react-hook-form";
import { loginAction, switchAuthMode } from "../../store/slice/authSlice";
import { registerModeTerm } from "../../config/env";
import { setError } from "../../store/slice/errorSlice";
import InputRow from "../../components/InputRow";

export default function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const dispatch = useDispatch()

    const loginRows = [
        {
            name: "emailOrMobile", title: "Email or Mobile", validateCondition: {
                required: 'Email or mobile is required',
                pattern: {
                    value: /\S+@\S+\.+\S|[0-9]{10}/,
                    message: 'Value must be email or mobile'
                }
            }
        },
        {
            name: "password", title: "Password", type: "password", validateCondition: {
                required: 'Password is required',
            }
        },
    ]

    const handleClickSwitch = () => {
        dispatch(setError(null))
        dispatch(switchAuthMode(registerModeTerm))
    }

    const handleSubmitForm = data => {
        console.log(data)
        dispatch(loginAction(data))
    }

    return (
        <div className="flex flex-col items-center gap-5">
            <h1 className="font-medium text-4xl">{loginTerm}</h1>
            <form className="flex flex-col gap-2" onSubmit={handleSubmit(handleSubmitForm)}>
                {loginRows.map(row => <InputRow register={register} key={row.name} name={row.name} title={row.title} type={row.type} validateCondition={row.validateCondition} error={errors[row.name]?.message} info={row.info} />)}
                <SubmitButton title={loginTerm} />
            </form>
            <div onClick={handleClickSwitch}>
                <SwitchModeButton title={switchToRegisterTerm} />
            </div>
        </div>
    )
}
