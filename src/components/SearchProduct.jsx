import { useSelector } from "react-redux";
import { defaultDuration } from "../config/foundation";
import { SearchIcon } from "../utils/Icons";
import LoadingDiv from "./LoadingDiv";

export default function SearchProduct() {
    const loading = useSelector(state => state.loading)
    return (
        <form className="flex items-center gap-[2%] justify-center">
            {
                loading ?
                    <LoadingDiv className={"h-[2vw] w-[24vw]"} />
                    :
                    <>
                        <input className="text-[max(1.2vw,8px)] w-full pl-[2%] py-[2%] h-[2vw] min-h-[16px] outline-none bg-primary-sub-base border border-1 border-neutral-base rounded-md ring-transparent" type="text" />
                        <button type="submit" className={"hover:text-neutral-fade" + " " + defaultDuration}>
                            <SearchIcon className={" text-[max(1vw,8px)]"} />
                        </button>
                    </>
            }
        </form>
    )
}
