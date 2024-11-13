import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
    count: number
    isReady: boolean
}

const initialState: CounterState = {
    count: 5,
    isReady: false
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    initCounterState: (state, action: PayloadAction<number>) => {
      if(!state.isReady) {
        state.count = action.payload
        state.isReady = true
      }
      return
    },
    addOne: (state) => {
      state.count++
    },
    substractOne: (state) => {

      state.count = Math.max(0, state.count - 1)
    },
    resetCounter: (state, action: PayloadAction<number>) => {

      state.count = Math.max(0, action.payload)
    },

  }
});

export const {addOne, substractOne, resetCounter, initCounterState} = counterSlice.actions

export default counterSlice.reducer