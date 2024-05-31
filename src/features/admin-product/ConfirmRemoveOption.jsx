import TextDetail from "../../components/TextDetail";
import useOptionalProduct from "../../hooks/use-optionalProduct";
import { InfoIcon } from "../../utils/Icons";

export default function ConfirmRemoveOption() {
    const { setConFirmRemoveOption } = useOptionalProduct()

    const handleClickDelete = () => {
        setConFirmRemoveOption(true)
    }
    const handleClickCancel = () => {
        setConFirmRemoveOption(false)
    }

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="absolute w-full h-full bg-neutral-100 opacity-70"></div>
            <div className="absolute px-[5%] h-[60%] flex flex-col bg-neutral-cross drop-shadow-md">
                <TextDetail className={'flex-grow text-nowrap flex justify-center gap-[3%] items-center text-[max(1vw,10px)]'}>
                    <InfoIcon className={'text-[max(1.5vw,12px)] text-neutral-sub-base'} />
                    Are you sure to delete? Option data will be lost.
                </TextDetail>
                <div className="w-full pb-[2%] flex items-center gap-[10px] justify-end">
                    <div onClick={handleClickDelete}>
                        <TextDetail className={'font-bold cursor-pointer hover:text-neutral-sub-base text-[max(0.4vw,8px)]'}>Delete</TextDetail>
                    </div>
                    <div onClick={handleClickCancel}>
                        <TextDetail className={'font-bold cursor-pointer hover:text-neutral-sub-base text-[max(0.4vw,8px)]'}>Cancel</TextDetail>
                    </div>
                </div>
            </div>
        </div>
    )
}
