import React from 'react'
import { Link } from 'react-router-dom'
const ProductList = (props) => {
    const {products, deleteProduct}=props
  return (
    
    <div>
        <Link to={`/server/products/product-add`}><button>Add product</button></Link>
     <div>
        <table>
            <thead>
                <tr>
                    <td>stt</td>
                    <td>name</td>
                    <td>des</td>
                    <td>img</td>
                    <td>action</td>
                </tr>
            </thead>
            <tbody>
                {products.map((product)=>{
                    return(
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td><img src={product.image} alt="" /></td>
                            <td><button onClick={()=>deleteProduct(product.id)}>Xoa</button>
                            <Link to={`/server/products/${product.id}/product-update`}>Update</Link>
                            </td>
                            
                        </tr>
                    )
                })}
            </tbody>
        </table>
     </div>
    </div>
  )
}

export default ProductList
