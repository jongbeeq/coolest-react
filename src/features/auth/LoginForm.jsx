import { loginTerm, switchToRegisterTerm } from "../../config/foundation";
import InputRow from "./InputRow";
import SubmitButton from "./SubmitButton";
import SwitchModeButton from "./SwitchModeButton";

export default function LoginForm(props) {

    const loginRows = [
        {
            name: "emailOrMobile", title: "Email or Mobile", validateCondition: {
                required: 'Must be input email or mobile',

            }
        },
        { name: "password", title: "Password", type: "password" },
    ]

    const { clickSwitch } = props
    const handleClickSwitch = () => clickSwitch(true)

    return (
        <div className="flex flex-col items-center gap-5">
            <h1 className="font-medium text-4xl">{loginTerm}</h1>
            <form className="flex flex-col gap-2">
                {loginRows.map(row => <InputRow key={row.name} name={row.name} title={row.title} type={row.type} />)}
                <SubmitButton title={loginTerm} />
            </form>
            <div onClick={handleClickSwitch}>
                <SwitchModeButton title={switchToRegisterTerm} />
            </div>
        </div>
    )
}
