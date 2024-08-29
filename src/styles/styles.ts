import styled from 'styled-components'

export const Container = styled.div`
  max-width: 900px;  /* Largura máxima aumentada para mais espaço */
  margin: 50px auto;
  padding: 30px;
  background-color: #f7f9fc;  /* Fundo suave com um tom claro de azul */
  border: 1px solid #e0e0e0;  /* Bordas mais claras */
  border-radius: 15px;  /* Bordas arredondadas para um design mais moderno */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);  /* Sombra para dar profundidade */
  transition: box-shadow 0.3s, transform 0.3s;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);  /* Sombra mais intensa ao passar o mouse */
    transform: translateY(-5px);  /* Efeito de elevação ao passar o mouse */
  }

  h1 {
    font-size: 2.5rem;
    color: #333;  /* Cor do título */
    text-align: center;  /* Centralizar o título */
    margin-bottom: 30px;
    font-family: 'Arial', sans-serif;
  }
`
