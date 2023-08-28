import React from 'react'
import Nabvar from '../features/navbar/Nabvar'
import ProductList from '../features/product-list/ProductList'

function Home() {
  return (
    <div>
        <Nabvar>
            <ProductList/>
        </Nabvar>
    </div>
  )
}

export default Home