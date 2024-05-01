import { registerTerm, switchToLoginTerm } from "../../config/foundation";
import InputRow from "./InputRow";
import SubmitButton from "./SubmitButton";
import SwitchModeButton from "./SwitchModeButton";
import { useState } from "react";

export default function RegisterForm(props) {

    const registerRows = [
        { name: "firstName", title: "First Name" },
        { name: "lasttName", title: "Last Name" },
        { name: "email", title: "Email" },
        { name: "mobile", title: "Mobile" },
        { name: "password", title: "Password", type: "password" },
        { name: "address", title: "Address" }
    ]

    const { clickSwitch } = props
    const handleClickSwitch = () => clickSwitch(false)

    const [registerData, setRegisterData] = useState({})

    // const changeData = (data) => setRegisterDatas(data)

    return (
        <div className="flex flex-col items-center gap-5">
            <h1 className="font-medium text-4xl">{registerTerm}</h1>
            <form className="flex flex-col gap-2">
                {registerRows.map(row => <InputRow key={row.name} name={row.name} title={row.title} type={row.type} registerData={registerData} setRegisterData={setRegisterData} />)}
                <SubmitButton title={registerTerm} />
            </form>
            <div onClick={handleClickSwitch}>
                <SwitchModeButton title={switchToLoginTerm} />
            </div>
        </div>
    )
}
