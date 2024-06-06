import { useDispatch, useSelector } from "react-redux";
import OptionalType from "./OptionalType";
import { createOptionAction, setOptionValidate } from "../../store/slice/productOptionSlice";
import AddOptionalProductButton from "./AddOptionalItemButton";
import log from "../../utils/log";
import CombineItem from "./CombineItem";

export default function AddOptionalProduct() {
    const productOption = useSelector(state => state.productOption.option)
    const dispatch = useDispatch()

    const handleClickAddOption = () => {
        log('click addOption !!!!')
        productOption.length !== 0 && dispatch(setOptionValidate(true))
        dispatch(createOptionAction())
    }

    return (
        <div className="flex flex-col gap-2">
            <AddOptionalProductButton onClick={handleClickAddOption} />
            {productOption.map((item, index) => <OptionalType key={index} index={index} />)}
            {/* <CombineItem /> */}
        </div>
    )
}
