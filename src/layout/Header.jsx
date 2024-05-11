import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

export default function Header() {


    return (
        <div className="w-[100vw] z-50 flex justify-between flex-wrap gap-[10%] min-w-[375px] bg-primary-base px-[5%] py-[1%] border-b-[0.5px] border-neutral-base fixed top-0 shadow-md font-base text-sm font-light">
            <HeaderLeft />
            <HeaderRight />
        </div>
    )
}
