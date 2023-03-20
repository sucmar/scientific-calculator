import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ResultState {
  value: string,
  resultEntry: string[]
}

const initialState: ResultState = {
  value: '',
  resultEntry: []
}

export const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    setResult: (state, action: PayloadAction<string>) => {
      state.value += action.payload;
    },
    resetResult: (state) => {
      state.value = '';
    },
    setResultEntry: (state, action: PayloadAction<string>) => {
      state.resultEntry.push(action.payload);
    },
    deleteResultEntry: (state) => {
      state.resultEntry.pop();
      state.value = state.resultEntry.join('')
    },
    removeAllResultEntries: (state) => {
      state.resultEntry = []
    },
  },
})

// Action creators are generated for each case reducer function
export const { setResult, resetResult, setResultEntry, deleteResultEntry, removeAllResultEntries } = resultSlice.actions

export default resultSlice.reducer