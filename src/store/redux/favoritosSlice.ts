import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProdutoType } from '../../containers/Produtos'

interface FavoritosState {
  itens: ProdutoType[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionarFavorito: (state, action: PayloadAction<ProdutoType>) => {
      const produto = action.payload
      const itemExiste = state.itens.find((item) => item.id === produto.id)

      if (!itemExiste) {
        state.itens.push(produto)
      } else {
        alert('Item já adicionado aos favoritos')
      }
    },
    removerFavorito: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    },
    toggleFavorito: (state, action: PayloadAction<ProdutoType>) => {
      const produto = action.payload
      const itemExiste = state.itens.find((item) => item.id === produto.id)

      if (itemExiste) {
        state.itens = state.itens.filter((item) => item.id !== produto.id)
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { adicionarFavorito, removerFavorito, toggleFavorito } =
  favoritosSlice.actions

export default favoritosSlice.reducer
