import { useDispatch, useSelector } from 'react-redux'
import { toggleFavorito } from './components/slices/favoritosSlice'
import { RootState, AppDispatch } from './components/store'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { ProdutoType } from './containers/Produtos'
import { useEffect, useState } from 'react'

function App() {
  const dispatch = useDispatch<AppDispatch>()
  const favoritos = useSelector((state: RootState) => state.favoritos.itens)
  const [produtos, setProdutos] = useState<ProdutoType[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/ebac_sports')
      .then((res) => res.json())
      .then((res) => setProdutos(res))
      .catch((err) => console.error('Erro ao carregar produtos:', err))
  }, [])

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={[]} />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={(produto) => dispatch(toggleFavorito(produto))}
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          adicionarAoCarrinho={() => {}}
        />
      </div>
    </>
  )
}

export default App
