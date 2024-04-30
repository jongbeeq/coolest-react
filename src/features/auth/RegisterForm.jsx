import { registerTerm, switchToLoginTerm } from "../../config/foundation";
import InputRow from "./InputRow";
import SubmitButton from "./SubmitButton";
import SwitchModeButton from "./SwitchModeButton";

export default function RegisterForm(props) {

    const registerTitles = ["Email", "Mobile", "Password", "Address"]

    const { clickSwitch } = props
    const handleClickSwitch = () => clickSwitch(false)

    return (
        <div className="flex flex-col items-center gap-5">
            <h1 className="font-medium text-4xl">{registerTerm}</h1>
            <form className="flex flex-col gap-2">
                {registerTitles.map(title => <InputRow key={title} title={title} />)}
                <SubmitButton title={registerTerm} />
            </form>
            <div onClick={handleClickSwitch}>
                <SwitchModeButton title={switchToLoginTerm} />
            </div>
        </div>
    )
}
