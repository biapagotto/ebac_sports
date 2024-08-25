import styled from 'styled-components'
import { cores } from '../../styles'

const botaoBase = `
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease;
  width: 100%;
  text-align: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  outline: none;
`

export const Produto = styled.div`
  border: 1px solid ${cores.corSecundaria};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

export const Capa = styled.div`
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`

export const Titulo = styled.h2`
  font-size: 1.4em;
  color: ${cores.corTexto};
  padding: 16px;
  text-align: center;
`

export const Prices = styled.div`
  padding: 0 16px 16px;
  font-size: 1.2em;
  color: ${cores.corPrincipal};
  text-align: center;
`

export const BtnFavoritar = styled.button`
  ${botaoBase}
  background-color: ${cores.corSecundaria};
  color: #fff;
  margin-bottom: 8px;

  &:hover {
    background-color: ${cores.corPrincipal};
  }
`

export const BtnComprar = styled.button`
  ${botaoBase}
  background-color: ${cores.corPrincipal};
  color: #fff;
  margin-bottom: 0;

  &:hover {
    background-color: ${cores.corSecundaria};
  }
`
