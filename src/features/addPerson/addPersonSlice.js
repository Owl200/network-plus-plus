import { createSlice } from '@reduxjs/toolkit'

export const addPersonSlice = createSlice({
  name: 'addPerson',
  initialState: {
    name: '',
    ocupation: '',
    location: '',
    metAt: '',
    company: '',
    isEditable: false,
    temp: {},
  },
  reducers: {
    toggleAdd: (state) => {state.isEditable = !state.isEditable},
    changeName: (state, action) => {state.name = action.payload},
    changeOcupation: (state, action) => {state.ocupation = action.payload},
    changeLocation: (state, action) => {state.location = action.payload},
    changeMetAt: (state, action) => {state.metAt = action.payload},
    changeCompany: (state, action) => {state.company = action.payload},
  }
})

// Action creators are generated for each case reducer function
export const { toggleAdd, changeName, changeOcupation, changeLocation, changeMetAt, changeCompany } = addPersonSlice.actions

export default addPersonSlice.reducer