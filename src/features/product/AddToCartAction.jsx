import SubmitButton from "../../components/SubmitButton"
import useProductDetail from "../../hooks/use-productDetail"

export default function ProductAction() {
    const { TextTitle, QuntityButton } = useProductDetail()
    return (
        <div className=" flex flex-col gap-2">
            <TextTitle title='Quantity' />
            <div className="flex items-center gap-2 text-xs">
                <QuntityButton title='-' />
                <p className="font-bold">1</p>
                <QuntityButton title='+' />
                <p className="text-neutral-base">balance 10</p>
            </div>
            <div className="text-[10px] ">
                <SubmitButton className=' w-[40%]' title='ADD TO CART' />
            </div>
        </div>
    )
}
