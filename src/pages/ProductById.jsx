import ProductContainer from "../features/product/ProductContainer"
import SlideImageContextProvider from "../contexts/SlideImageContext"
import ProductDetailProvider from "../contexts/ProductDetailContext"

export default function ProductById() {

    return (
        <SlideImageContextProvider>
            <ProductDetailProvider>
                <ProductContainer />
            </ProductDetailProvider>
        </SlideImageContextProvider>
    )
}
