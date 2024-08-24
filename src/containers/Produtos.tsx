import React from 'react'

export type ProdutoType = {
  id: number
  nome: string
  preco: number
  imagem: string
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

interface ProdutosProps {
  produtos: ProdutoType[]
  favoritos: ProdutoType[]
  favoritar: (produto: ProdutoType) => void
  adicionarAoCarrinho: (produto: ProdutoType) => void
}

const Produtos: React.FC<ProdutosProps> = ({
  produtos,
  favoritos,
  favoritar,
  adicionarAoCarrinho
}) => {
  return (
    <div>
      {produtos.map((produto) => (
        <div key={produto.id}>
          <h2>{produto.nome}</h2>
          <button onClick={() => adicionarAoCarrinho(produto)}>
            Adicionar ao Carrinho
          </button>
          <button onClick={() => favoritar(produto)}>
            {favoritos.some((p) => p.id === produto.id)
              ? 'Remover dos Favoritos'
              : 'Adicionar aos Favoritos'}
          </button>
        </div>
      ))}
    </div>
  )
}

export default Produtos
