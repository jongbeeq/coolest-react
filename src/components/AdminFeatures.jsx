import HeaderButton from "./HeaderButton";

export default function AdminFeatures() {
    return (
        <>
            <HeaderButton title="Account" />
            <HeaderButton title="Purchase" />
            <HeaderButton title="Product" to="/admin/product" />
        </>
    )
}
