import Produto from '../components/Produto'
import * as S from './styles'

export type ProdutoType = {
  id: number
  titulo: string
  plataformas: string[]
  precoAntigo: number
  preco: number
  categoria: string
  imagem: string
}

type Props = {
  produtos: ProdutoType[]
  favoritos: ProdutoType[]
  favoritar: (produto: ProdutoType) => void
  adicionarAoCarrinho: (produto: ProdutoType) => void
}

const Produtos = ({
  produtos,
  adicionarAoCarrinho,
  favoritar,
  favoritos
}: Props) => {
  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto
          key={produto.id}
          produto={produto}
          aoComprar={adicionarAoCarrinho}
          favoritar={() => favoritar(produto)}
          estaNosFavoritos={favoritos.some((fav) => fav.id === produto.id)}
        />
      ))}
    </S.Produtos>
  )
}

export default Produtos
