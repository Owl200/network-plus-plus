import { createSlice } from '@reduxjs/toolkit'

export const chatSlice = createSlice({
    name: 'chat',
    initialState: [{
            add: false,
            chatInfo: {
                date: [],
                content: []
            },
            temp: {},
    }],
    reducers: {
        addChat: (state, action) => { state[action.payload].add = !state[action.payload].add},
        changeTemp: (state, action) => { state[action.payload[1]].temp[action.payload[0]] = action.payload[2] },
        saveChat: (state, action) => {
            state[action.payload].chatInfo.date.push(state[action.payload].temp.date);
            state[action.payload].chatInfo.content.push(state[action.payload].temp.content);
            state[action.payload].add = !state[action.payload].add
        },
    },
    extraReducers: {
        ['person/addToArray']: (state) => {state.push({add: false, chatInfo: { date: [], content: []}, temp: {}})}
    }
})

export const { addChat, changeTemp, saveChat } = chatSlice.actions
export default chatSlice.reducer
