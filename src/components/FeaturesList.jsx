import { useSelector } from "react-redux"
import LoadingDiv from "./LoadingDiv"
import HeaderButton from "./HeaderButton"
import AdminFeatures from "./AdminFeatures"

export default function FeaturesList() {
    const isAdmin = useSelector(state => state.account.data?.isAdmin)
    const loading = useSelector(state => state.loading)
    return (
        <div className="flex-grow flex gap-[5%] max-[418px]:justify-between">
            {
                loading ?
                    <LoadingDiv className={"h-[2vw] w-full"} />
                    :
                    <>
                        <HeaderButton title="Category" />
                        {isAdmin ? <AdminFeatures /> : <div className="w-[114px]"></div>}
                    </>
            }
        </div>
    )
}
