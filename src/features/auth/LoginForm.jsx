import { loginTerm, switchToRegisterTerm } from "../../config/foundation";
import InputRow from "./InputRow";
import SubmitButton from "./SubmitButton";
import SwitchModeButton from "./SwitchModeButton";

export default function LoginForm(props) {

    const loginTitles = ["Email or Mobile", "Password"]

    const { clickSwitch } = props
    const handleClickSwitch = () => clickSwitch(true)

    return (
        <div className="flex flex-col items-center gap-5">
            <h1 className="font-medium text-4xl">{loginTerm}</h1>
            <form className="flex flex-col gap-2">
                {loginTitles.map(title => <InputRow key={title} title={title} />)}
                <SubmitButton title={loginTerm} />
            </form>
            <div onClick={handleClickSwitch}>
                <SwitchModeButton title={switchToRegisterTerm} />
            </div>
        </div>
    )
}
