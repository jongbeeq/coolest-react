import ProductContainer from "../features/product/ProductContainer"
import ProductDetailProvider from "../contexts/ProductDetailContext"

export default function ProductById() {

    return (
        <ProductDetailProvider>
            <ProductContainer />
        </ProductDetailProvider>
    )
}
