import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProdutoType } from '../../containers/Produtos'

interface CarrinhoState {
  itens: unknown
  some(arg0: (p: unknown) => boolean): unknown
  produtos: ProdutoType[]
}

const initialState: CarrinhoState = {
  produtos: [],
  some: function (): unknown {
    throw new Error('Function not implemented.')
  },
  itens: undefined
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<ProdutoType>) => {
      state.produtos.push(action.payload)
    },
    removerDoCarrinho: (state, action: PayloadAction<number>) => {
      state.produtos = state.produtos.filter((p) => p.id !== action.payload)
    }
  }
})

export const { adicionarAoCarrinho, removerDoCarrinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer
