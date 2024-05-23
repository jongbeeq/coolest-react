import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedOption: {},
    amount: 1,
    isMaxAmount: false,
    isMinAmount: true
}

export const setSelectedAction = createAsyncThunk('productSelect/setselectedOption', async (option) => {
    try {
        const payload = {
            selectedOption: option,
            isMaxAmount: initialState.amount >= option.balance,
            isMinAmount: initialState.amount <= 1,
        }
        return payload
    } catch (error) {
        console.log(error)
    }
})


const productSelectSlice = createSlice({
    name: 'productSelect',
    initialState,
    reducers: {
        increaseAmount: (state) => {
            if (!state.isMaxAmount) {
                state.amount = state.amount + 1
            }
            state.isMaxAmount = state.amount >= state.selectedOption.balance
            state.isMinAmount = state.amount <= 1
        },
        decreaseAmount: (state) => {
            if (!state.isMinAmount) {
                state.amount = state.amount - 1
            }
            console.log(state.amount)
            state.isMaxAmount = state.amount >= state.selectedOption.balance
            state.isMinAmount = state.amount <= 1
        },
        resetAmount: (state) => {
            state.amount = 1
        },
    },
    extraReducers: (builder) => {
        builder
            // .addCase(setSelectedAction.pending, (state, action) => {
            //     // console.log(action)
            //     // state.loading = true
            // })
            .addCase(setSelectedAction.fulfilled, (state, action) => {
                console.log(action)
                state.selectedOption = { ...state.selectedOption, ...action.payload.selectedOption }
                state.isMaxAmount = action.payload.isMaxAmount
                state.isMinAmount = action.payload.isMinAmount
            })
        // .addCase(setSelectedAction.rejected, (state, action) => {
        //     console.log(action)
        //     state.loading = false
        // })
    }
})

export const { increaseAmount, decreaseAmount, resetAmount, setAmountCondition } = productSelectSlice.actions
export default productSelectSlice.reducer