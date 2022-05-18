import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'person',
  initialState: {
    name: 'Bob Boberson',
    ocupation: 'coder',
    location: 'USA',
    metAt: 'React convention',
    company: '100Devs',
  },
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload
    },
    changeOcupation: (state, action) => {
      state.ocupation = action.payload
    },
    changeLocation: (state, action) => {
      state.location = action.payload
    },
    changeMetAt: (state, action) => {
        state.metAt = action.payload
    }, 
    changeCompany: (state, action) => {
        state.company = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer