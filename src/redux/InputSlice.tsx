import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface InputState {
  value: string,
  inputEntry: string[]
}

const initialState: InputState = {
  value: '',
  inputEntry: []
}

export const inputSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    setInput: (state, action: PayloadAction<string>) => {
      state.value += action.payload;
    },
    resetInput: (state) => {
      state.value = '';
    },
    setInputEntry: (state, action: PayloadAction<string>) => {
      state.inputEntry.push(action.payload);
    },
    deleteInputEntry: (state) => {
      state.inputEntry.pop();
      state.value = state.inputEntry.join('')
    },
    removeAllInputEntries: (state) => {
      state.inputEntry = []
    },
  },
})

// Action creators are generated for each case reducer function
export const { setInput, resetInput, setInputEntry, deleteInputEntry, removeAllInputEntries } = inputSlice.actions

export default inputSlice.reducer