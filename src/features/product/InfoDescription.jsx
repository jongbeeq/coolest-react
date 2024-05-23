import { useEffect, useState } from "react"
import { PressDownIcon } from "../../utils/Icons"
import TextTitle from "../../components/TextTitle"
import TextDetail from "../../components/TextDetail"

export default function InfoDescription() {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    useEffect(() => console.log(open), [open])

    const hideDescription = !open && ' hidden'
    const dropdownRight = !open && ' -rotate-90'

    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-between">
                <TextTitle>Description</TextTitle>
                <div onClick={handleClick} className={"cursor-pointer hover:bg-neutral-fade rounded-full flex justify-center items-center w-[6%] aspect-square" + dropdownRight}>
                    <PressDownIcon />
                </div>
            </div>
            <TextDetail className={'text-pretty text-ellipsis' + hideDescription}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae distinctio impedit veniam ipsa natus temporibus aspernatur quaerat maiores, rerum, odit nihil itaque beatae praesentium provident quae vitae reprehenderit ab, atque doloribus sed. Quis, molestiae libero asperiores ipsum itaque atque reprehenderit nemo quae hic possimus ea tempora magni eius cupiditate odit cum perferendis voluptates nihil. In ut, omnis sapiente neque ab, quo tempore eius sint perferendis inventore dolore praesentium deserunt unde sit distinctio asperiores cumque corrupti! Sequi cumque expedita pariatur natus ipsam dicta iure eveniet, dolore facere, eum aliquam eligendi non consectetur dolores ipsa quam veniam perferendis ipsum, dolor corrupti enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aspernatur, tenetur optio iusto distinctio corporis eveniet corrupti placeat illum laudantium a dolore sunt illo minus non alias, nostrum totam odit? Perferendis nesciunt veritatis nobis minus debitis quisquam sint eligendi delectus tempore corrupti qui, corporis minima maiores inventore! Numquam, dolorem, porro ullam aut soluta nesciunt omnis eum sunt eaque illo animi repellat? Numquam minus nemo, quibusdam nisi veritatis labore natus repudiandae iure modi inventore, itaque aut, eaque eveniet accusantium laudantium ipsa. Tempore dignissimos perspiciatis quis sapiente ipsam reprehenderit esse consectetur aperiam, facilis excepturi vero fuga, modi iste et facere perferendis numquam!
            </TextDetail>
        </div>
    )
}
