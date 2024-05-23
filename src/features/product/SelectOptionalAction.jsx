import TextTitle from "../../components/TextTitle"
import OptionalItem from "./OptionalItem"

export default function SelectOptionalAction(props) {
    const { type, items } = props

    return (
        <div className="flex items-center justify-center ">
            <TextTitle>{type}</TextTitle>
            <div className='flex flex-wrap content-start px-2 gap-y-1 gap-x-[1%] w-full '>
                {items.map((option, index) => <OptionalItem key={index} optionProps={option} id={option.id} title={option.title} src={option.src} />)}
            </div>
        </div>
    )
}
