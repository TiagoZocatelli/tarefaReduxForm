import styled from 'styled-components'

// Formulário de contatos
export const Form = styled.form`
  margin-bottom: 40px;
  padding: 30px;
  background-color: #f7f9fc;  /* Fundo mais suave com leve tom azul */
  border: 1px solid #e1e4e8;
  border-radius: 20px;  /* Bordas mais arredondadas para um design moderno */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);  /* Sombra mais suave */
  max-width: 800px;
  margin: 0 auto; /* Centraliza o formulário */
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);  /* Sombra um pouco mais intensa ao passar o mouse */
  }
`

export const Input = styled.input`
  display: block;
  margin-bottom: 20px;
  padding: 12px 18px;  /* Padding ajustado para mais conforto */
  width: 100%;
  border: 1px solid #cbd2d9;
  border-radius: 12px;
  font-size: 16px;
  background-color: #fdfdfd;  /* Fundo claro para contraste com o formulário */
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    border-color: #0066cc;  /* Cor azul mais clara ao focar */
    box-shadow: 0 0 8px rgba(0, 102, 204, 0.25);  /* Efeito de foco mais sutil */
    outline: none;
    background-color: #ffffff;  /* Fundo branco puro ao focar */
  }
`

export const Button = styled.button`
  padding: 12px 25px;
  border: none;
  background-color: #0066cc;  /* Azul claro para os botões */
  color: white;
  font-size: 16px;
  font-weight: bold;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s;

  &:hover {
    background-color: #005bb5;  /* Azul mais escuro ao passar o mouse */
    transform: translateY(-2px);  /* Elevação leve ao passar o mouse */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  /* Sombra adicional ao passar o mouse */
  }

  &:active {
    background-color: #004c99;
    transform: translateY(0);
    box-shadow: none;
  }
`

export const SubmitButton = styled(Button)`
  background-color: #28a745;  /* Verde claro para o botão de submissão */

  &:hover {
    background-color: #218838;
  }

  &:active {
    background-color: #1e7e34;
  }
`
