import Header from './components/Header'

import { GlobalStyle } from './styles'
import Produtolist from './containers/Produtos'
import { Provider } from 'react-redux'
import { store } from './store'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtolist />
      </div>
    </Provider>
  )
}

export default App
