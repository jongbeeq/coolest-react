import ItemActions from "./ItemActions";
import useCreateProduct from "../../hooks/use-createProduct";
import useOptionalProduct from "../../hooks/use-optionalProduct";
import { useDispatch, useSelector } from "react-redux";
import { createItemAction, editItemBalanceAction, editItemPriceAction, editItemTitleAction } from "../../store/slice/productOptionSlice";
import ItemEntityCol from "./ItemEntityCol";
import { useEffect } from "react";

export default function ItemEntity({ indexItem }) {
    const { register, errors, resetField, validateExistDataActive } = useCreateProduct()
    const { index: indexType, isFocus, setIsFocus } = useOptionalProduct()
    const item = useSelector(state => state.productOption.option[indexType].items[indexItem])
    const optionItems = useSelector(state => state.productOption.option[indexType]).items
    const defaultItemData = useSelector(state => state.productOption.defaultItemData)
    const dispatch = useDispatch()

    const toggleFocus = {
        onFocus: () => setIsFocus(indexItem)
    }

    const errorBeforeCreateNew = (message, ...condition) => {
        if (validateExistDataActive && condition[0]) {
            return `Plaese fill item ${message} before add new option`
        }
        if (condition[1]) {
            return `Item ${message} must be number`
        }
        if (condition[2]) {
            return `Item title '${item[message]}' is already exist. (at 'Item${item?.duplicateItem + 1})`
        }
    }

    const createOnchange = (action) => {
        const onChange = (data) => {
            const payload = [indexType, indexItem, data.target.value]
            dispatch(action(payload))
        }
        return onChange
    }
    // const createOnchange = (attribute) => {
    //     const onChange = (data) => {
    //         const itemData = { [attribute]: data.target.value }
    //         const payload = [indexType, indexItem, itemData]
    //         dispatch(createItemAction(payload))
    //     }
    //     return onChange
    // }

    const titleIsDuplicate = optionItems.length > 1 && item?.duplicateItem !== -1
    const price = item?.price.isSpecific ? item?.price.specific : item?.price.defaultPrice

    const itemDataCols = [
        {
            name: `types${indexType + 1}/item-title${indexItem + 1}`,
            value: item?.title,
            errorKey: 'title',
            errorValue: [Boolean(!item?.title), null, titleIsDuplicate],
            errorBeforeCreateNew: errorBeforeCreateNew,
            validateCondition: {
                required: 'Item title is required',
                onChange: createOnchange(editItemTitleAction)
            }
        },
        {
            name: `types${indexType + 1}/item-price${indexItem + 1}`,
            value: price,
            defaultValue: item?.price,
            errorKey: 'price',
            errorValue: [Boolean(!price), isNaN(price)],
            errorBeforeCreateNew: errorBeforeCreateNew,
            validateCondition: {
                required: 'Item price is required',
                pattern: {
                    value: /[0-9]/,
                    message: 'Item price must be a number'
                },
                onChange: createOnchange(editItemPriceAction)
            }
        },
        {
            name: `types${indexType + 1}/item-balance${indexItem + 1}`,
            value: item?.balance,
            errorKey: 'balance',
            errorValue: [Boolean(!item?.balance), isNaN(item?.balance)],
            errorBeforeCreateNew: errorBeforeCreateNew,
            validateCondition: {
                required: 'Item balance is required',
                pattern: {
                    value: /[0-9]/,
                    message: 'Item balance must be a number'
                },
                onChange: createOnchange(editItemBalanceAction)
            }
        },
    ]

    useEffect(() => {
        dispatch(editItemPriceAction([indexType, indexItem]))
    }, [defaultItemData])

    return (
        <div {...toggleFocus} className="w-full flex items-center gap-[2px] relative text-[max(0.8vw,8px)]">
            {itemDataCols.map((col, index) =>
                <ItemEntityCol defaultValue={col.defaultValue} value={col.value} resetField={resetField} key={index} indexItem={indexItem} name={col.name} errorBeforeCreateNew={col.errorBeforeCreateNew} register={register} validateCondition={col.validateCondition} errorKey={col.errorKey} errorValue={col.errorValue} errors={errors} />
            )}
            <div className='absolute right-[-24px]'>
                {isFocus === indexItem && <ItemActions indexItem={indexItem} />}
            </div>
        </div>
    )
}
