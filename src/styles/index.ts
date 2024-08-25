import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  corTexto: '#121714',
  corFundo: '#eee',
  corPrincipal: '#0c2461',
  corSecundaria: '#4a69bd'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    color: ${cores.corTexto};
  }

  body {
    background-color: ${cores.corFundo};
    padding-bottom: 80px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 1024px) {
      max-width: 80%;
    }
  }

  a {
    color: ${cores.corPrincipal};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  button {
    font-family: Roboto, sans-serif;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }
`

export const Produto = styled.div`
  border: 1px solid ${cores.corSecundaria};
  border-radius: 8px;
  overflow: hidden;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 16px;
  text-align: center;
  max-width: 200px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.03);
  }
`

export const Capa = styled.div`
  margin-bottom: 8px;

  img {
    width: 100%;
    height: auto;
  }
`

export const Titulo = styled.h2`
  font-size: 1.2rem;
  margin: 8px 0;
  color: ${cores.corTexto};
`

export const Prices = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  color: ${cores.corPrincipal};
  margin: 8px 0;
`

export const BtnFavoritar = styled.button`
  background-color: ${cores.corSecundaria};
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  margin-right: 8px;

  &:hover {
    background-color: ${cores.corPrincipal};
  }
`

export const BtnComprar = styled.button`
  background-color: ${cores.corPrincipal};
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${cores.corSecundaria};
  }
`
