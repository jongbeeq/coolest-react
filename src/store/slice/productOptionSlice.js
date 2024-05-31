import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    types: [],
    option: [],
    validateExistDataActive: false,
}

const productOptionSlice = createSlice({
    name: 'productOption',
    initialState,
    reducers: {
        createOptionAction: (state, action) => {
            console.log(action.payload)
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
        },
        editTypeTitleAction: (state, action) => {
            console.log(action.payload)
            const [indexType, typeTitle] = action.payload
            state.types[indexType] = typeTitle
            state.option[indexType].title = typeTitle
            state.option[indexType].errorOption.type = Boolean(typeTitle)


            const valueArray = Object.values(state.option[indexType].errorOption)
            console.log('valueArray ', valueArray)
            const validateValue = Object.values(state.option[indexType].errorOption).reduce((prev, next) => prev && next)
            console.log('validateKey ', Object.keys(state.option[indexType].errorOption))
            console.log('validateValue ', validateValue)
            state.option[indexType].finishOption = validateValue
        },
        createItemAction: (state, action) => {
            console.log(action.payload)
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


            const valueArray = Object.values(state.option[indexType].errorOption)
            console.log('valueArray ', valueArray)
            const validateValue = Object.values(state.option[indexType].errorOption).reduce((prev, next) => prev && next)
            console.log('validateKey ', Object.keys(state.option[indexType].errorOption))
            console.log('validateValue ', validateValue)
            state.option[indexType].finishOption = validateValue
        },
        setOptionValidate: (state, action) => {
            state.validateExistDataActive = action.payload
        },
        validateFinishOption: (state, action) => {
            console.log(action.payload)
            const indexType = action.payload
            const valueArray = Object.values(state.option[indexType].errorOption)
            console.log('valueArray ', valueArray)
            const validateValue = Object.values(state.option[indexType].errorOption).reduce((prev, next) => prev && next)
            console.log('validateKey ', Object.keys(state.option[indexType].errorOption))
            console.log('validateValue ', validateValue)
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