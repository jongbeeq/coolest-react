import useSlideImage from "../../hooks/use-slideImage"

export default function IconImage(props) {
    const { src } = props
    const { switchShowImage } = useSlideImage()

    const handleClickImage = () => {
        switchShowImage(src)
    }
    return (
        <img onClick={handleClickImage} className="aspect-square mb-[10.5%] object-cover cursor-pointer hover:border border-1 border-primary-header" src={src}></img>
    )
}
