import { Link } from "react-router-dom"

export default function HeaderButton(props) {
    const { to, title, children } = props

    return (
        <>
            <Link to={to}>
                <b className="hover:text-neutral-fade">
                    {title}{children}
                </b>
            </Link>
        </>
    )
}
