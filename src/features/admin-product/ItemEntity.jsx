import { useState } from "react";
import ItemActions from "./ItemActions";
import useCreateProduct from "../../hooks/use-createProduct";
import useOptionalProduct from "../../hooks/use-optionalProduct";
import { useDispatch, useSelector } from "react-redux";
import { createItemAction } from "../../store/slice/productOptionSlice";
import ItemEntityRow from "./ItemEntityRow";

export default function ItemEntity({ indexItem }) {
    const [isFocus, setIsFocus] = useState(false)
    const { register, errors, resetField } = useCreateProduct()
    const { index: indexType, validateExistDataActive } = useOptionalProduct()
    const optionItem = useSelector(state => state.productOption.option[indexType].items[indexItem])
    const dispatch = useDispatch()

    const toggleFocus = {
        onBlur: () => setIsFocus(false),
        onFocus: () => setIsFocus(true)
    }

    const errorBeforeCreateNew = (message, condition) => {
        if (validateExistDataActive && condition) {
            return `Plaese fill item ${message} before add new option`
        }
    }

    const createOnchange = (attribute) => {
        const onChange = (data) => {
            const itemData = { [attribute]: data.target.value }
            const payload = [indexType, indexItem, itemData]
            dispatch(createItemAction(payload))
        }
        return onChange
    }


    const itemDataCols = [
        {
            name: `types${indexType + 1}/item-title${indexItem + 1}`,
            value: optionItem?.title,
            errorKey: 'title',
            errorValue: Boolean(!optionItem?.title),
            errorBeforeCreateNew: errorBeforeCreateNew,
            validateCondition: {
                required: 'Item title is required',
                onChange: createOnchange('title')
            }
        },
        {
            name: `types${indexType + 1}/item-price${indexItem + 1}`,
            value: optionItem?.price,
            errorKey: 'price',
            errorValue: Boolean(!optionItem?.price),
            errorBeforeCreateNew: errorBeforeCreateNew,
            validateCondition: {
                required: 'Item price is required',
                pattern: {
                    value: /[0-9]/,
                    message: 'Item price must be a number'
                },
                onChange: createOnchange('price')
            }
        },
        {
            name: `types${indexType + 1}/item-balance${indexItem + 1}`,
            value: optionItem?.balance,
            errorKey: 'balance',
            errorValue: Boolean(!optionItem?.balance),
            errorBeforeCreateNew: errorBeforeCreateNew,
            validateCondition: {
                required: 'Item balance is required',
                pattern: {
                    value: /[0-9]/,
                    message: 'Item balance must be a number'
                },
                onChange: createOnchange('balance')
            }
        },
    ]

    return (
        <div {...toggleFocus} className="w-full flex items-center gap-[2px] relative text-[max(0.8vw,8px)]">
            {itemDataCols.map((col, index) =>
                <ItemEntityRow value={col.value} resetField={resetField} key={index} index={index} name={col.name} errorBeforeCreateNew={col.errorBeforeCreateNew} register={register} validateCondition={col.validateCondition} errorKey={col.errorKey} errorValue={col.errorValue} errors={errors} />
            )}
            <div className='absolute right-[-24px]'>
                {isFocus && <ItemActions />}
            </div>
        </div>
    )
}
