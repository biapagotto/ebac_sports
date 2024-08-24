import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProdutoType } from '../../containers/Produtos'

interface CarrinhoState {
  itens: ProdutoType[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<ProdutoType>) => {
      const produto = action.payload
      const itemExiste = state.itens.find((item) => item.id === produto.id)

      if (!itemExiste) {
        state.itens.push(produto)
      } else {
        alert('Item já adicionado')
      }
    }
  }
})

export const { adicionarAoCarrinho } = carrinhoSlice.actions

export default carrinhoSlice.reducer
