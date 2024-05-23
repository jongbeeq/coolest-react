import { useDispatch, useSelector } from "react-redux"
import SubmitButton from "../../components/SubmitButton"
import QuantityButton from "./QuantityButton"
import { decreaseAmount, increaseAmount } from "../../store/slice/productSelectSlice"
import TextTitle from "../../components/TextTitle"
import TextDetail from "../../components/TextDetail"

export default function ProductAction() {
    const dispatch = useDispatch()
    const selectedOption = useSelector(state => state.productSelect.selectedOption)
    const isMaxAmount = useSelector(state => state.productSelect.isMaxAmount)
    const isMinAmount = useSelector(state => state.productSelect.isMinAmount)
    const amount = useSelector(state => state.productSelect.amount)

    return (
        <div className=" flex flex-col gap-2">
            <TextTitle>Quantity</TextTitle>
            <div className="flex items-center gap-2 text-xs">
                <QuantityButton onClick={() => { dispatch(decreaseAmount()) }} condition={isMinAmount} title='-' />
                <TextDetail className={'font-bold'}>{amount}</TextDetail>
                <QuantityButton onClick={() => { dispatch(increaseAmount()) }} condition={isMaxAmount} title='+' />
                <TextDetail>balance {selectedOption.balance}</TextDetail>
            </div>
            <SubmitButton className='w-[30%] max-[765px]:w-[20%] py-[2%] text-[max(0.8vw,8px)]' title='ADD TO CART' />
        </div>
    )
}
