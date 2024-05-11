import { Link } from 'react-router-dom'
import { LOGO_URL } from '../config/env'

export default function LogoButton() {
    return (
        <Link className="" to="/">
            <img className="min-w-[40px] w-[7.5vw]" src={LOGO_URL} alt="Coolest" />
        </Link>
    )
}
