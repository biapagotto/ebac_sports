import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProdutoType } from '../../containers/Produtos'

type CarrinhoState = {
  produtos: ProdutoType[]
}

const initialState: CarrinhoState = {
  produtos: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<ProdutoType>) => {
      state.produtos.push(action.payload)
    }
  }
})

export const { adicionarAoCarrinho } = carrinhoSlice.actions

export default carrinhoSlice.reducer
