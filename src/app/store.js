import { configureStore } from '@reduxjs/toolkit'
import personSlice from '../features/person/personSlice'

export default configureStore({
  reducer: {
      person: personSlice,
  }
})