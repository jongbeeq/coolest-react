import useSlideImage from "../../hooks/use-slideImage"

export default function IconImage(props) {
    const { image } = props
    const { switchShowImage, showImage } = useSlideImage()

    const handleClickImage = () => {
        switchShowImage(image)
    }

    const isShowImage = (image.id === showImage.id) && " " + "border-primary-header"

    return (
        <img onClick={handleClickImage} className={"aspect-square mb-[10.5%] object-cover cursor-pointer border border-1" + isShowImage} src={image.src}></img>
    )
}
