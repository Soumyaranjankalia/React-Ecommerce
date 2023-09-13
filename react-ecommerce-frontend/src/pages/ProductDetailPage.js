import React from 'react'
import Nabvar from '../features/navbar/Nabvar'
import ProductDetail from '../features/product-list/components/ProductDetail'


function ProductDetailPage() {
  return (
    <div>
        <Nabvar>
            <ProductDetail/>
        </Nabvar>
    </div>
  )
}

export default ProductDetailPage;