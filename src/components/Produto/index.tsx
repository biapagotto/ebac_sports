import { ProdutoType } from '../../containers/Produtos'
import * as S from './styles'
import { paraReal } from '../../utils/formatters'

type Props = {
  produto: ProdutoType
  aoComprar: (produto: ProdutoType) => void
  favoritar: (produto: ProdutoType) => void
  estaNosFavoritos: boolean
}

const ProdutoComponent = ({
  produto,
  aoComprar,
  favoritar,
  estaNosFavoritos
}: Props) => {
  const handleAdicionarAoCarrinho = () => {
    aoComprar(produto)
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.titulo} />
      </S.Capa>
      <S.Titulo>{produto.titulo}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnFavoritar onClick={() => favoritar(produto)} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnFavoritar>
      <S.BtnComprar onClick={handleAdicionarAoCarrinho} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
