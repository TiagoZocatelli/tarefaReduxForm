import styled from 'styled-components'

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  width: 100%;
  max-width: 900px;  /* Limita a largura máxima da lista */
  margin-top: 30px;
`

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px 25px;  /* Mais espaço interno */
  background-color: #ffffff;  /* Fundo neutro */
  border: 1px solid #e0e0e0;  /* Bordas mais suaves */
  border-radius: 15px;  /* Bordas mais arredondadas */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  /* Sombra mais suave */
  transition: background-color 0.3s, box-shadow 0.3s, transform 0.2s;

  &:hover {
    background-color: #f7f9fc;  /* Fundo mais claro ao passar o mouse */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);  /* Sombra maior */
    transform: translateY(-3px);  /* Elevação sutil ao passar o mouse */
  }
`

export const Button = styled.button`
  margin-left: 10px;
  padding: 12px 20px;  /* Padding maior para botões mais confortáveis */
  border: none;
  background-color: #ff5252;  /* Cor vibrante */
  color: white;
  font-size: 16px;  /* Fonte ajustada */
  font-weight: bold;  /* Fonte mais espessa */
  border-radius: 12px;  /* Bordas arredondadas */
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s;

  &:hover {
    background-color: #e53935;  /* Cor de fundo ao passar o mouse */
    transform: translateY(-2px);  /* Leve elevação ao passar o mouse */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  /* Sombra adicional ao passar o mouse */
  }

  &:active {
    background-color: #c62828;
    transform: translateY(0);
    box-shadow: none;
  }
`

export const EditButton = styled(Button)`
  background-color: #26a69a;  /* Cor diferente para o botão de edição */

  &:hover {
    background-color: #00897b;
  }

  &:active {
    background-color: #00695c;
  }
`
