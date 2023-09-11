/* eslint-disable @typescript-eslint/no-unused-vars */
import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'

import { useGetProdutosQuery } from '../services/api'

import * as S from './styles'

const Produtos = () => {
  const { data: roupas, isLoading } = useGetProdutosQuery()

  if (isLoading) return <h2>Carregando...</h2>

  return (
    <>
      <S.Produtos>
        {roupas?.map((produto) => (
          // eslint-disable-next-line prettier/prettier
        <Produto key={produto.id} produto={produto} aoComprar={function (_produto: ProdutoType): void {
              throw new Error('Function not implemented.')
              // eslint-disable-next-line prettier/prettier, @typescript-eslint/no-unused-vars
          } } favoritar={function (_produto: ProdutoType): void {
              throw new Error('Function not implemented.')
            }}
            estaNosFavoritos={false}
          />
        ))}
      </S.Produtos>
    </>
  )
}
export default Produtos
