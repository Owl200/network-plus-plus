import { configureStore } from '@reduxjs/toolkit'
import addPersonSlice from '../features/addPerson/addPersonSlice'
import personSlice from '../features/person/personSlice'
import chatSlice from '../features/chat/chatSlice'

export default configureStore({
  reducer: {
      person: personSlice,
      addPerson: addPersonSlice,
      chat: chatSlice
  }
})