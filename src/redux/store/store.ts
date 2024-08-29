import { configureStore } from '@reduxjs/toolkit'
import contactsReducer from '../reducers/contactsSlice'

export const store = configureStore({
  reducer: {
    contacts: contactsReducer
  }
})

// Tipos para uso com TypeScript
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
