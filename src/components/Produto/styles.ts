import styled from 'styled-components'
import { cores } from '../../styles'

const botaoBase = `
  border: none;
  padding: 8px 16px; /* Tamanho ajustado para menor conforto */
  cursor: pointer;
  border-radius: 6px; /* Bordas arredondadas */
  font-size: 0.9rem; /* Tamanho da fonte ajustado */
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease; /* Transições suaves */
  width: 100%; /* Faz o botão ocupar a largura total do seu contêiner */
  text-align: center; /* Centraliza o texto */
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1); /* Sombra suave */
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
  font-size: 1.4em; /* Tamanho do título ajustado */
  color: ${cores.corTexto};
  padding: 16px;
  text-align: center; /* Centraliza o texto */
`

export const Prices = styled.div`
  padding: 0 16px 16px;
  font-size: 1.2em;
  color: ${cores.corPrincipal};
  text-align: center; /* Centraliza o texto */
`

export const BtnFavoritar = styled.button`
  ${botaoBase}
  background-color: ${cores.corSecundaria};
  color: #fff;
  margin-bottom: 8px; /* Espaçamento abaixo do botão */

  &:hover {
    background-color: ${cores.corPrincipal};
  }
`

export const BtnComprar = styled.button`
  ${botaoBase}
  background-color: ${cores.corPrincipal};
  color: #fff;

  /* Remove a margem inferior para que o botão não tenha espaço extra abaixo */
  margin-bottom: 0;

  &:hover {
    background-color: ${cores.corSecundaria};
  }
`
