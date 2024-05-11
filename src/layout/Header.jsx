import SearchProduct from "../components/SearchProduct";
import HeaderAccountAction from "../components/HeaderAccountAction";
import HeaderFeaturesList from "../components/HeaderFeaturesList";
import { useSelector } from "react-redux";

export default function Header() {
    const loading = useSelector(state => state.account.loading)

    return (
        <div className="w-[100vw] z-50 flex justify-between flex-wrap gap-[10%] bg-primary-base px-[5%] py-[1%] border-b-[0.5px] border-neutral-base fixed top-0 shadow-md font-base text-sm font-light">
            {loading ?
                <div className="animate-pulse bg-black w-[100vw] h-[100vh] absolute"></div>
                :

                <>
                    <HeaderFeaturesList />
                    <div className="flex-grow flex justify-end">
                        <SearchProduct />
                        <HeaderAccountAction />
                    </div>
                </>
            }
            {/* <div className="animate-pulse bg-black w-[100vw] h-[100vh] absolute"></div> */}
            {/* <div className="bg-black h-[3.723vw]"></div> */}
        </div>
    )
}
