// import { useDispatch } from "react-redux";
import useCreateProduct from "../../hooks/use-createProduct";
import CombineItemEntityCol from "./CombineItemEntityCol";

export default function CombineItemEntity({ combinItemOrder }) {
    const { register, errors, resetField, validateExistDataActive } = useCreateProduct()
    // const dispatch = useDispatch()

    // const errorBeforeCreateNew = (message, ...condition) => {
    // if (validateExistDataActive && condition[0]) {
    //     return `Plaese fill item ${message} before add new option`
    // }
    // if (condition[1]) {
    //     return `Item ${message} must be number`
    // }
    // if (condition[2]) {
    //     // return `Item title '${optionItem[message]}' is already exist. (at 'Item${optionItem?.duplicateItem + 1})`
    // }
    // }

    // const createOnchange = (attribute) => {
    //     const onChange = (data) => {
    //         const itemData = { [attribute]: data.target.value }
    //         const payload = [indexType, indexItem, itemData]
    //         dispatch(createItemAction(payload))
    //     }
    //     return onChange
    // }

    const combineItemDataCols = [
        {
            name: `types${'indexType + 1'}/item-title${'indexItem + 1'}`,
            // value: optionItem?.title,
            errorKey: 'title',
            // errorValue: [Boolean(!optionItem?.title), null, titleIsDuplicate],
            // errorBeforeCreateNew: errorBeforeCreateNew,
            validateCondition: {
                required: 'Item title is required',
                // onChange: createOnchange('title')
            }
        },
        {
            name: `types${'indexType + 1'}/item-price${'indexItem + 1'}`,
            // value: optionItem?.price,
            errorKey: 'price',
            // errorValue: [Boolean(!optionItem?.price), isNaN(optionItem?.price)],
            // errorBeforeCreateNew: errorBeforeCreateNew,
            validateCondition: {
                required: 'Item price is required',
                pattern: {
                    value: /[0-9]/,
                    message: 'Item price must be a number'
                },
                // onChange: createOnchange('price')
            }
        },
        {
            name: `types${'indexType + 1'}/item-balance${'indexItem + 1'}`,
            // value: optionItem?.balance,
            errorKey: 'balance',
            // errorValue: [Boolean(!optionItem?.balance), isNaN(optionItem?.balance)],
            // errorBeforeCreateNew: errorBeforeCreateNew,
            validateCondition: {
                required: 'Item balance is required',
                pattern: {
                    value: /[0-9]/,
                    message: 'Item balance must be a number'
                },
                // onChange: createOnchange('balance')
            }
        },
    ]

    const combinItemOrderStyle = `bg-neutral-sub-fade h-[1px] w-[${98 - (combinItemOrder * 3)}%]`

    return (
        <div className="flex flex-col items-end">
            <div className="w-full flex items-center gap-[2px] relative text-[max(0.8vw,8px)]">
                {combineItemDataCols.map((col, index) =>
                    <CombineItemEntityCol combinItemOrder={combinItemOrder} value={col.value} resetField={resetField} key={index} index={index} name={col.name} errorBeforeCreateNew={col.errorBeforeCreateNew} register={register} validateCondition={col.validateCondition} errorKey={col.errorKey} errorValue={col.errorValue} errors={errors} />
                )}
            </div>
            <div className={combinItemOrderStyle}></div>
        </div>
    )
}
