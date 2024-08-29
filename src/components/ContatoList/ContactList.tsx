import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store/store'
import { removeContact } from '../../redux/reducers/contactsSlice'
import ContactForm from '../ContatoForm/ContactForm'
import * as S from './styles'
import { Contact } from '../../redux/reducers/contactsSlice' // Importe o tipo Contact corretamente


const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts)
  const dispatch = useDispatch()
  const [contactToEdit, setContactToEdit] = useState<Contact | null>(null)

  const handleSave = () => {
    setContactToEdit(null) // Fecha o modo de edição após salvar
  }

  return (
    <>
      {contactToEdit && (
        <ContactForm existingContact={contactToEdit} onSave={handleSave} />
      )}
      <S.List>
        {contacts.map((contact) => (
          <S.ListItem key={contact.id}>
            <span>{contact.name} - {contact.email} - {contact.phone}</span>
            <div>
              <S.EditButton onClick={() => setContactToEdit(contact)}>
                Editar
              </S.EditButton>
              <S.Button onClick={() => dispatch(removeContact(contact.id))}>
                Remover
              </S.Button>
            </div>
          </S.ListItem>
        ))}
      </S.List>
    </>
  )
}

export default ContactList
