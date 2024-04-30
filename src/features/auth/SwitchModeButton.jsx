import { defaultDuration } from "../../config/foundation"

export default function SwitchModeButton(props) {
    const { title } = props
    return (
        <p className={"cursor-pointer text-sm hover:underline underline-offset-4 " + defaultDuration}>{title}</p>
    )
}
