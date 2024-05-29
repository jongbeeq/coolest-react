import { useDispatch, useSelector } from "react-redux"
import { removeShowImagesAction, setShowImage } from "../../store/slice/productImageSlice"
import { removeImagesUploadAction } from "../../store/slice/productUploadSlice"
import { viewProductModeTerm } from "../../config/env"
import CircleCustomButton from "../../components/CircleCustomButton"

export default function IconImage(props) {
    const { image } = props
    const dispatch = useDispatch()

    const showImage = useSelector((state) => state.productImage.showImage)
    const productMode = useSelector((state) => state.productMode)

    const handleClickRemove = () => {
        dispatch(removeShowImagesAction(image.id))
        dispatch(removeImagesUploadAction())
    }

    const handleClickImage = () => {
        dispatch(setShowImage(image))
    }

    const isShowImage = (image.id === showImage.id) && " " + "border-primary-header"

    return (
        <div className='relative'>
            {productMode !== viewProductModeTerm &&
                <div onClick={handleClickRemove} className='absolute right-0'>
                    <CircleCustomButton className={'w-[1vw] min-w-[12px] bg-neutral-cross text-neutral-sub-base border border-neutral-sub-base shadow-xl hover:bg-neutral-sub-fade hover:text-neutral-base hover:border-neutral-base text-[max(0.5vw,6px)] font-bold'}>x</CircleCustomButton>
                </div>}
            <img onClick={handleClickImage} className={"aspect-square mb-[10.5%] object-cover cursor-pointer border border-1" + isShowImage} src={image.src}></img>
        </div>
    )
}
