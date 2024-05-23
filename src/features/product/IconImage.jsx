import { useDispatch, useSelector } from "react-redux"
import { setShowImage } from "../../store/slice/productImageSlice"

export default function IconImage(props) {
    const { image } = props
    const showImage = useSelector((state) => state.productImage.showImage)
    const dispatch = useDispatch()

    const handleClickImage = () => {
        dispatch(setShowImage(image))
    }

    const isShowImage = (image.id === showImage.id) && " " + "border-primary-header"

    return (
        <img onClick={handleClickImage} className={"aspect-square mb-[10.5%] object-cover cursor-pointer border border-1" + isShowImage} src={image.src}></img>
    )
}
