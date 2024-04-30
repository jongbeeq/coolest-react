import { Link } from "react-router-dom"
import { defaultDuration } from "../config/foundation"

export default function HeaderButton(props) {
    const { to, title, children } = props

    return (
        <>
            <Link to={to}>
                <b className={"hover:text-neutral-fade" + defaultDuration}>
                    {title}{children}
                </b>
            </Link>
        </>
    )
}
