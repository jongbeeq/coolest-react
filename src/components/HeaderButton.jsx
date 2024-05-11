import { Link } from "react-router-dom"
import { defaultDuration } from "../config/foundation"

export default function HeaderButton(props) {
    const { to, title, children, className } = props

    return (
        <>
            <Link to={to}>
                <b className={"text-[max(1vw,8px)] hover:text-neutral-fade text-nowrap" + defaultDuration + " " + className}>
                    {title}{children}
                </b>
            </Link>
        </>
    )
}
