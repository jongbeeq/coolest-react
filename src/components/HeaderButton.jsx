import { Link } from "react-router-dom"
import { defaultDuration } from "../config/foundation"

export default function HeaderButton(props) {
    const { to, title, children } = props

    return (
        <>
            <Link to={to}>
                <b className={"text-[max(1.2vw,8px)] hover:text-neutral-fade " + defaultDuration}>
                    {title}{children}
                </b>
            </Link>
        </>
    )
}
