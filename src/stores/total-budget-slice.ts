import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { setDataToStorage } from '@/helpers/storageHelper'
import { TotalAmountPayload } from '@/types/total-amount'

type TotalBudgetState = {
  amount: number
}

const initialState: TotalBudgetState = {
  amount: 0,
}

export const totalBudgetSlice = createSlice({
  name: 'totalBudget',
  initialState,
  reducers: {
    addTBudgetIncome: (state, action: PayloadAction<number>) => {
      state.amount += action.payload
      setDataToStorage('totalBudgetData', { totalAmount: state.amount })
    },

    addButgetExpense: (state, action: PayloadAction<number>) => {
      state.amount -= action.payload
      setDataToStorage('totalBudgetData', { totalAmount: state.amount })
    },

    resetTotalBudget: (state) => {
      state.amount = 0
      setDataToStorage('totalBudgetData', { totalAmount: state.amount })
    },

    setTotalBudget: (state, action: PayloadAction<TotalAmountPayload>) => {
      debugger
      if (action.payload && action.payload.totalAmount !== undefined) {
        state.amount = action.payload.totalAmount
      } else {
        state.amount = 0
      }
    },
  },
})

export const {
  addTBudgetIncome,
  addButgetExpense,
  resetTotalBudget,
  setTotalBudget,
} = totalBudgetSlice.actions
export default totalBudgetSlice.reducer
