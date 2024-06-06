import CombineItemHeader from "./CombineItemHeader";
import CombineItemInput from "./CombineItemInput";

export default function CombineItem() {
    const finishCombineItem = false
    const validateExistDataActive = false

    const validateCombineItemStyle = finishCombineItem ? 'border-neutral-sub-base' : 'border-error-base'
    const style = validateExistDataActive ? validateCombineItemStyle : 'border-neutral-sub-base'
    return (
        <div className={'flex flex-col items-center gap-[0.5vw] pt-[2%] pb-[5%] border' + ' ' + style}>
            <CombineItemHeader />
            <CombineItemInput />
        </div>
    )
}
