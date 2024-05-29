import AddOptionalItemButton from "./AddOptionalItemButton";
import OptionalType from "./OptionalType";

export default function AddOptionalItem() {
    // const { titleRow, balanceRow, priceRow, descriptioneRow, register, errors } = useCreateProduct()
    return (
        <div className="flex flex-col gap-2">
            <AddOptionalItemButton onClick={() => { }} />
            <OptionalType />
        </div>
    )
}
