import useProductDetail from "../../hooks/use-productDetail"
import OptionalItem from "./OptionalItem"

export default function SelectOptionalAction(props) {
    const { type, items } = props
    const { TextTitle } = useProductDetail()
    return (
        <div className="flex items-center justify-center ">
            <TextTitle title={type} />
            <div className='flex flex-wrap content-start px-2 gap-y-1 gap-x-[1%] w-full '>
                {items.map((option, index) => <OptionalItem key={index} title={option.title} src={option.src} />)}
            </div>
        </div>
    )
}
