import SubmitButton from "../../components/SubmitButton"
import useProductDetail from "../../hooks/use-productDetail"

export default function ProductAction() {
    const { TextTitle, selectedOption, quantity, isMaxQuantity, isMinQuantity, increaseQuantity, decreaseQuantity } = useProductDetail()

    const disbleQuantityStyle = (condition) => {
        const style = condition ? " " + "border-neutral-fade text-neutral-fade" : " " + "border-neutral-base text-neutral-base hover:bg-neutral-fade cursor-pointer"
        return style
    }

    const QuntityButton = (props) => {
        const { title, onClick, condition } = props
        return <div onClick={onClick} className={"w-[6%] flex items-center justify-center text-xs font-bold bg-neutral-cross border border-1 aspect-square" + disbleQuantityStyle(condition)}>{title}</div>
    }

    return (
        <div className=" flex flex-col gap-2">
            <TextTitle title='Quantity' />
            <div className="flex items-center gap-2 text-xs">
                <QuntityButton onClick={decreaseQuantity} condition={isMinQuantity} title='-' />
                <p className="font-bold">{quantity}</p>
                <QuntityButton onClick={increaseQuantity} condition={isMaxQuantity} title='+' />
                <p className="text-neutral-base">balance {selectedOption.balance}</p>
            </div>
            <div className="text-[10px] ">
                <SubmitButton className=' w-[40%]' title='ADD TO CART' />
            </div>
        </div>
    )
}
