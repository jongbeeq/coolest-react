import SlideImageContextProvider from '../../contexts/SlideImageContext'
import ProductContainerContent from './ProductContainerContent'

export default function ProductContainer() {

    return (
        <SlideImageContextProvider>
            <ProductContainerContent />
        </SlideImageContextProvider>
    )
}
