import ProductContainer from "../features/product/ProductContainer"
import SlideImageContextProvider from "../contexts/SlideImageContext"

export default function ProductById() {

    return (
        <SlideImageContextProvider>
            <ProductContainer />
        </SlideImageContextProvider>
    )
}
