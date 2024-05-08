import useProductDetail from "../../hooks/use-productDetail"

export default function Detailnfo() {
    const { TextTitle } = useProductDetail()

    return (
        <>
            <div className="h-[15%] flex items-baseline">
                <TextTitle title="Category:" />
                <div className='flex gap-[2%] px-[2%] items-center w-[60%] overflow-hidden'>
                    <span className='text-[12px] font-semibold italic cursor-pointer hover:text-neutral-sub-base'>Toy</span>
                </div>
            </div>
            <div className="h-[75%] overflow-hidden">
                <TextTitle title="Description" />
                <p className='h-[80%] text-pretty text-[12px] text-ellipsis'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae distinctio impedit veniam ipsa natus temporibus aspernatur quaerat maiores, rerum, odit nihil itaque beatae praesentium provident quae vitae reprehenderit ab, atque doloribus sed. Quis, molestiae libero asperiores ipsum itaque atque reprehenderit nemo quae hic possimus ea tempora magni eius cupiditate odit cum perferendis voluptates nihil. In ut, omnis sapiente neque ab, quo tempore eius sint perferendis inventore dolore praesentium deserunt unde sit distinctio asperiores cumque corrupti! Sequi cumque expedita pariatur natus ipsam dicta iure eveniet, dolore facere, eum aliquam eligendi non consectetur dolores ipsa quam veniam perferendis ipsum, dolor corrupti enim.
                </p>
            </div>
        </>
    )
}
