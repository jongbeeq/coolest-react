import { Link } from 'react-router-dom'
import { LOGO_URL } from '../config/env'
import { useSelector } from 'react-redux'
import LoadingDiv from './LoadingDiv'

export default function LogoButton() {
    const loading = useSelector(state => state.account.loading)
    return (
        loading ?
            <LoadingDiv className={"h-[3.6vw] w-[7vw]"} />
            :
            <Link to="/">
                <img className="min-w-[40px] w-[7.5vw]" src={LOGO_URL} alt="Coolest" />
            </Link>
    )
}
