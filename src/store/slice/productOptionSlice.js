import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    types: [],
    option: [],
    validateExistDataActive: false,
    createNewAvailable: true
}

const defaultItemData = { title: '', price: '', balance: '', duplicateItem: -1 }

const newOption = {
    title: '',
    items: [defaultItemData],
    finishOption: false,
    itemHasData: {
        type: '',
        'item_title-1': '',
        'item_price-1': '',
        'item_balance-1': '',
    },
    duplicateType: -1,
    optionHasData: false,
    isCollapse: false
}

const createErrorHasData = (index) => {
    return {
        [`item_title-${index}`]: '',
        [`item_price-${index}`]: '',
        [`item_balance-${index}`]: '',
    }
}

const productOptionSlice = createSlice({
    name: 'productOption',
    initialState,
    reducers: {
        createOptionAction: (state) => {
            const option = [...state.option]
            state.createNewAvailable = state.option.length === 0 ? true : option.reduce((prev, curr) => {
                const prevFinishOption = option.length === 1 ? curr?.finishOption : prev && curr?.finishOption
                return Boolean(prevFinishOption)
            }, true)
            console.log(state.createNewAvailable)
            if (state.createNewAvailable) {
                state.option = [...state.option, newOption]
            }
        },
        editTypeTitleAction: (state, action) => {
            const [indexType, typeTitle] = action.payload
            state.types[indexType] = typeTitle
            state.option[indexType].title = typeTitle
            state.option[indexType].itemHasData.type = typeTitle

            const validateValue = Object.values(state.option[indexType].itemHasData)
                .reduce((prev, next) => Boolean(prev) && Boolean(next))
            state.option[indexType].finishOption = validateValue
        },
        createItemAction: (state, action) => {
            console.log(action.payload)
            const [indexType, indexItem, itemData] = action.payload
            const haveItemData = itemData || {}
            const prevItemData = state.option[indexType].items[indexItem]
            const datailTitle = itemData && Object.keys(itemData)[0] === 'title'
            state.option[indexType].items[indexItem] = prevItemData ?
                { ...prevItemData, ...haveItemData }
                :
                { ...defaultItemData, ...haveItemData }
            if (datailTitle) {
                const prevIndexSameItem = state.option[indexType].items[indexItem].duplicateItem
                const indexSameItem = state.option[indexType].items.findIndex((item, index) =>
                    index !== indexItem && item.title === Object.values(itemData)[0]
                )
                state.option[indexType].items[indexItem].duplicateItem = indexSameItem
                if (indexSameItem !== -1) {
                    state.option[indexType].items[indexSameItem].duplicateItem = indexItem
                } else {
                    prevIndexSameItem !== -1 && (state.option[indexType].items[prevIndexSameItem].duplicateItem = -1)
                }
            }
            if (itemData) {
                const errorKey = 'item_' + Object.keys(itemData)[0] + '-' + (indexItem + 1)
                state.option[indexType].itemHasData[errorKey] = Object.values(itemData)[0]
            } else {
                const errorKeysNew = createErrorHasData(indexItem)
                state.option[indexType].itemHasData = { ...state.option[indexType].itemHasData, ...errorKeysNew }
            }
            const validateValue = Object.values(state.option[indexType].itemHasData)
                .reduce((prev, next) => {
                    console.log(prev)
                    console.log(next)
                    return Boolean(prev) && Boolean(next)
                })
            state.option[indexType].finishOption = validateValue
        },
        setOptionValidate: (state, action) => {
            state.validateExistDataActive = action.payload
        },
        validateFinishOption: (state, action) => {
            const [indexType, valueType] = action.payload
            const validateHaveData = Object.values(state.option[indexType]?.itemHasData)
                .reduce((prev, next) => Boolean(prev) && Boolean(next))
            let finishOption = validateHaveData
            if (state.option.length > 1) {
                const indexSameType = state.types.findIndex((type, index) =>
                    index !== indexType && type === valueType
                )
                const validateUniqueData = indexSameType === -1
                finishOption = finishOption && validateUniqueData
                state.option[indexType].duplicateType = indexSameType
                if (!validateUniqueData) {
                    state.option[indexSameType].duplicateType = indexType
                    state.option[indexSameType].finishOption = finishOption
                }
            }
            state.option[indexType].finishOption = finishOption
        },
        collapseOptionAction: (state, action) => {
            state.option[action.payload].isCollapse = !state.option[action.payload].isCollapse
        },
        removeOptionAction: (state, action) => {
            const indexType = action.payload
            state.option = state.option.filter((option, index) => index !== indexType)
            state.types = state.types.filter((option, index) => index !== indexType)

        },
        valdateOptionHasDataAction: (state, action) => {
            const indexType = action.payload
            const { title, itemHasData } = state.option[indexType]
            const itemHasDataValue = Object.values(itemHasData).find((item) => item)
            state.option[indexType].optionHasData = Boolean(title) && itemHasDataValue
        },
        insertItemAcion: (state, action) => {
            const [indexType, indexNewItem] = action.payload
            state.option[indexType].items.splice(indexNewItem + 1, 0, defaultItemData)
            state.option[indexType].itemHasData = { ...state.option[indexType].itemHasData, ...createErrorHasData(state.option[indexType].items.length) }
        },
        removeItemAcion: (state, action) => {
            const [indexType, indexRemoveItem] = action.payload
            const lastItem = state.option[indexType].items.length
            if (state.option[indexType].items.length === 1) {
                state.option[indexType].items[0] = defaultItemData
            } else {
                state.option[indexType].items.splice(indexRemoveItem, 1)
            }
            for (let key in state.option[indexType].itemHasData) {
                console.log(state.option[indexType].itemHasData)
                console.log(key)
                console.log(lastItem)
                console.log(key.split('-')[1])
                console.log(key.split('-')[1] == lastItem)
                if (key.split('-')[1] == lastItem) {
                    delete state.option[indexType].itemHasData[key]
                }
            }
        },
        resetOptional: (state) => {
            state = initialState
            return state
        },
    },
})

export const { createOptionAction, editTypeTitleAction, createItemAction, setOptionValidate, validateFinishOption, resetOptional, collapseOptionAction, removeOptionAction, valdateOptionHasDataAction, insertItemAcion, removeItemAcion } = productOptionSlice.actions
export default productOptionSlice.reducer