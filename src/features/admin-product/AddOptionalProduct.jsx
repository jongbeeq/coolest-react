import { useDispatch, useSelector } from "react-redux";
import OptionalType from "./OptionalType";
import { createOptionAction, setOptionValidate } from "../../store/slice/productOptionSlice";
import AddOptionalProductButton from "./AddOptionalItemButton";

export default function AddOptionalProduct() {
    const productOption = useSelector(state => state.productOption.option)
    const dispatch = useDispatch()

    const handleClickAddOption = () => {
        console.log('click addOption !!!!')
        // const typesData = { title: '', items: [], finishOption: true, prevFinishOption: { initial: true } }
        productOption.length !== 0 && dispatch(setOptionValidate(true))
        const addNewAvailable = productOption.length === 0 || productOption.finishOption
        // addNewAvailable && dispatch(createOptionAction(typesData))
        addNewAvailable && dispatch(createOptionAction())
    }


    return (
        <div className="flex flex-col gap-2">
            <AddOptionalProductButton onClick={handleClickAddOption} />
            {productOption.map((item, index) => <OptionalType key={index} index={index} />)}
        </div>
    )
}
