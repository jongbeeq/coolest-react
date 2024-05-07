import ProductImageSection from './ProductImageSection'

export default function ProductContainer() {

    return (
        <div className="w-full flex justify-between flex-wrap gap-[4%] max-h-[870px]">
            <div className="flex-grow gap-1 flex min-w-[300px] max-w-[48%] max-h-[870px] m-auto relative">
                <ProductImageSection />
            </div>
            <div className="bg-green-400 flex-grow min-w-[300px]">2</div>
        </div>
    )
}
