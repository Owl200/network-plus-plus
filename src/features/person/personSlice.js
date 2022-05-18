import { createSlice } from '@reduxjs/toolkit'

export const personSlice = createSlice({
  name: 'person',
  initialState: [{
    name: 'Bob Boberson',
    ocupation: 'coder',
    location: 'USA',
    metAt: 'React convention',
    company: '100Devs',
    isEditable: false,
    temp: {},
  }],
  reducers: {
    changeTemp: (state, action) => {
        state[action.payload[1]].temp[action.payload[0]] = action.payload[2]

        console.log(action.payload)
    },
    changeState: (state, action) => {
      state[action.payload] = {
        name: state[action.payload].temp.name ? state[action.payload].temp.name : state[action.payload].name, 
        ocupation: state[action.payload].temp.ocupation ? state[action.payload].temp.ocupation : state[action.payload].ocupation,  
        location: state[action.payload].temp.location ? state[action.payload].temp.location : state[action.payload].location, 
        metAt: state[action.payload].temp.metAt ? state[action.payload].temp.metAt : state[action.payload].metAt,  
        company: state[action.payload].temp.company ? state[action.payload].temp.company : state[action.payload].company, 
        isEditable: false,
        temp: {}
    }
    },
    changeIsEditable: (state, action) => {
        state[action.payload].isEditable = !state[action.payload].isEditable 
    }
  }
})

// Action creators are generated for each case reducer function
export const { changeState, changeIsEditable, changeTemp } = personSlice.actions

export default personSlice.reducer