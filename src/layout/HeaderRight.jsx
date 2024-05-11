import HeaderAccountAction from "../components/HeaderAccountAction";
import SearchProduct from "../components/SearchProduct";

export default function HeaderRight() {
    return (
        <div className="flex-grow flex justify-end gap-[2vw] max-[418px]:justify-between">
            <SearchProduct />
            <HeaderAccountAction />
        </div>
    )
}
