import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    types: [],
    option: [],
    validateExistDataActive: false,
    createNewAvailable: true
}

const defaultItemData = { title: '', price: '', balance: '' }

const newOption = {
    title: '',
    items: [defaultItemData],
    finishOption: false,
    itemHasData: {
        type: false,
        item_title1: false,
        item_price1: false,
        item_balance1: false,
    },
    optionHasData: false,
    isCollapse: false
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
            state.option[indexType].itemHasData.type = Boolean(typeTitle)

            const validateValue = Object.values(state.option[indexType].itemHasData)
                .reduce((prev, next) => prev && next)
            state.option[indexType].finishOption = validateValue
        },
        createItemAction: (state, action) => {
            const [indexType, indexItem, itemData] = action.payload
            const prevItemData = state.option[indexType].items[indexItem]
            state.option[indexType].items[indexItem] = prevItemData ?
                { ...prevItemData, ...itemData }
                :
                { ...defaultItemData, ...itemData }
            const errorKey = 'item_' + Object.keys(itemData)[0] + (indexItem + 1)
            state.option[indexType].itemHasData[errorKey] = Boolean(Object.values(itemData)[0])

            const validateValue = Object.values(state.option[indexType].itemHasData)
                .reduce((prev, next) => prev && next)
            state.option[indexType].finishOption = validateValue
        },
        setOptionValidate: (state, action) => {
            state.validateExistDataActive = action.payload
        },
        validateFinishOption: (state, action) => {
            const indexType = action.payload
            const validateValue = Object.values(state.option[indexType]?.itemHasData)
                .reduce((prev, next) => prev && next)
            state.option[indexType].finishOption = validateValue
        },
        collapseOptionAction: (state, action) => {
            state.option[action.payload].isCollapse = !state.option[action.payload].isCollapse
        },
        removeOptionAction: (state, action) => {
            state.option = state.option.filter((option, index) => index !== action.payload)
            state.types = state.types.filter((option, index) => index !== action.payload)
        },
        valdateOptionHasDataAction: (state, action) => {
            const indexType = action.payload
            const { title, itemHasData } = state.option[indexType]
            const itemHasDataValue = Object.values(itemHasData).find((item) => item)
            state.option[indexType].optionHasData = Boolean(title) && itemHasDataValue
        },
        resetOptional: (state) => {
            state = initialState
            return state
        },
    },
})

export const { createOptionAction, editTypeTitleAction, createItemAction, setOptionValidate, validateFinishOption, resetOptional, collapseOptionAction, removeOptionAction, valdateOptionHasDataAction } = productOptionSlice.actions
export default productOptionSlice.reducer