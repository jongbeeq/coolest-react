import { useContext } from "react"
import { SlideImageContext } from "../contexts/SlideImageContext"

export default function useSlideImage() {
    return useContext(SlideImageContext)
}
