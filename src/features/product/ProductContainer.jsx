import ProductDetailSection from "./ProductDetailSection";
import ProductImageSection from "./ProductImageSection";

export default function ProductContainer() {
    return (
        <div>
            <div className="w-[80vw] m-auto flex justify-center flex-wrap gap-[1%]">
                <div className="gap-1 flex w-[50%] min-w-[300px] max-w-[50%] h-full relative">
                    <ProductImageSection />
                </div>
                <div className="min-[766px]:w-[40%] min-[766px]:max-w-[40%] max-[765px]:w-[100%] min-w-[300px] min-h-[34.2vw] h-full flex flex-col bg-neutral-cross shadow-md">
                    <ProductDetailSection />
                </div>
            </div>
        </div>
    )
}
