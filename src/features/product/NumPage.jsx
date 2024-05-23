import { useSelector } from "react-redux"

export default function NumPage(props) {
    const slidePage = useSelector((state) => state.productImage.slidePage)
    const { page } = props

    const isSelected = page === slidePage
    const selectedPageStyle = (isSelected) ? "bg-neutral-sub-fade w-full" : "bg-neutral-sub-base w-[65%]"
    const defaultStyle = "aspect-square rounded-full"
    const pageStyle = defaultStyle + " " + selectedPageStyle

    return <div className={pageStyle}></div>
}
