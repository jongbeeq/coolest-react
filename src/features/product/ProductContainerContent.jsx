import ProductDetailSection from "./ProductDetailSection";
import ProductImageSection from "./ProductImageSection";

export default function ProductContainerContent() {
    return (
        <div>
            <div className="w-full flex justify-center flex-wrap max-h-[870px] gap-[1%]">
                <div className="flex-grow gap-1 flex min-w-[300px] max-w-[50%] h-full relative">
                    <ProductImageSection />
                </div>
                <div className="flex-grow min-w-[300px] max-w-[40%] min-h-[482px] h-full flex flex-col bg-neutral-cross shadow-md">
                    {/* <ProductDetailSection /> */}
                </div>
            </div>
        </div>
    )
}
