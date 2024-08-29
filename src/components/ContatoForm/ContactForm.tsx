import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addContact, editContact } from '../../redux/reducers/contactsSlice'
import * as S from './styles'

interface ContactFormProps {
  existingContact?: { id: number, name: string, email: string, phone: string }
  onSave?: () => void; // Callback para indicar que foi salvo
}

const ContactForm: React.FC<ContactFormProps> = ({ existingContact, onSave }) => {
  const [name, setName] = useState(existingContact?.name || '')
  const [email, setEmail] = useState(existingContact?.email || '')
  const [phone, setPhone] = useState(existingContact?.phone || '')

  const dispatch = useDispatch()

  useEffect(() => {
    if (existingContact) {
      setName(existingContact.name)
      setEmail(existingContact.email)
      setPhone(existingContact.phone)
    }
  }, [existingContact])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (existingContact) {
      dispatch(editContact({ id: existingContact.id, name, email, phone }))
    } else {
      dispatch(addContact({ id: Date.now(), name, email, phone }))
    }

    // Limpa os campos após salvar
    setName('')
    setEmail('')
    setPhone('')

    if (onSave) {
      onSave() // Chama a callback para fechar o modo de edição
    }
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <S.Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <S.Input
        type="tel"
        placeholder="Telefone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <S.Button type="submit">{existingContact ? 'Salvar' : 'Adicionar'}</S.Button>
    </S.Form>
  )
}

export default ContactForm
