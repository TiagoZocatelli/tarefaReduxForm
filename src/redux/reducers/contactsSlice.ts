import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Definindo a interface para o contato
export interface Contact {  // Exportando a interface
  id: number
  name: string
  email: string
  phone: string
}

// Definindo o estado inicial
interface ContactsState {
  contacts: Contact[]
}

const initialState: ContactsState = {
  contacts: []
}

// Criando o slice
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload)
    },
    removeContact: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      )
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const index = state.contacts.findIndex(
        (contact) => contact.id === action.payload.id
      )
      if (index !== -1) {
        state.contacts[index] = action.payload
      }
    }
  }
})

export const { addContact, removeContact, editContact } = contactsSlice.actions
export default contactsSlice.reducer
