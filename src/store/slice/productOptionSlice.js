import { createSlice } from "@reduxjs/toolkit";
import log from "../../utils/log";

const initialState = {
    types: [],
    option: [],
    validateExistDataActive: false,
    createNewAvailable: true
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
                const newOption = {
                    title: '',
                    items: [],
                    finishOption: false,
                    errorOption: {
                        type: false,
                        item_title1: false,
                        item_price1: false,
                        item_balance1: false,
                    }
                }
                state.option = [...state.option, newOption]
            }
        },
        editTypeTitleAction: (state, action) => {
            log(action.payload)
            const [indexType, typeTitle] = action.payload
            state.types[indexType] = typeTitle
            state.option[indexType].title = typeTitle
            state.option[indexType].errorOption.type = Boolean(typeTitle)

            const validateValue = Object.values(state.option[indexType].errorOption)
                .reduce((prev, next) => prev && next)
            state.option[indexType].finishOption = validateValue
        },
        createItemAction: (state, action) => {
            console.log('createItemAction -------', action.payload)
            const [indexType, indexItem, itemData] = action.payload
            const prevItemData = state.option[indexType].items[indexItem]
            console.log('prevItemData ', prevItemData)
            const defaultData = { title: null, price: null, balance: null }
            state.option[indexType].items[indexItem] = prevItemData ?
                { ...prevItemData, ...itemData }
                :
                { ...defaultData, ...itemData }
            const errorKey = 'item_' + Object.keys(itemData)[0] + (indexItem + 1)
            state.option[indexType].errorOption[errorKey] = Boolean(Object.values(itemData)[0])


            const validateValue = Object.values(state.option[indexType].errorOption)
                .reduce((prev, next) => prev && next)
            state.option[indexType].finishOption = validateValue
        },
        setOptionValidate: (state, action) => {
            state.validateExistDataActive = action.payload
        },
        validateFinishOption: (state, action) => {
            console.log(action.payload)
            const indexType = action.payload
            const validateValue = Object.values(state.option[indexType].errorOption)
                .reduce((prev, next) => prev && next)
            state.option[indexType].finishOption = validateValue
        },
        resetOptional: (state) => {
            state = initialState
            return state
        },
    },
})

export const { createOptionAction, editTypeTitleAction, createItemAction, setOptionValidate, validateFinishOption, resetOptional } = productOptionSlice.actions
export default productOptionSlice.reducer