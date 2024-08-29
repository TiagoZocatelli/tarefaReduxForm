import React from 'react'
import ContactList from './components/ContatoList/ContactList'
import ContactForm from './components/ContatoForm/ContactForm'
import { Container } from './styles/styles'
import { GlobalStyle } from './styles/global'
const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <h1>Contact List</h1>
        <ContactForm />
        <ContactList />
      </Container>
    </>
  )
}

export default App
