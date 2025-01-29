import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import AddToBasket from './../component/user/AddToBasket';

const ProductDetails = ({products}) => {
  const {id}=useParams()
  const [product, setProduct] = useState(null)
  useEffect(()=>{
    const foundProduct = products.find((product) => product.id === id);
    setProduct(foundProduct);
  }, [id, products])
  if(!product){
    return (
      <div>
        <h1>Not found</h1>
      </div>
    )
  } 
  return (
    <div>
      <h1>Product Details</h1>
      <div>
        <h2>{product.name}</h2>
        <img src={product.thumbnail} alt="" />
        <p>{product.content}</p>
        <p>Price: ${product.priceAfterDiscount}</p>
      <p>Rating: {product.rating} (Based on {product.ratingCount} reviews)</p>
      <p>Discount: {product.discount}</p>
      <p>Voucher: {product.voucher}</p>
      <h3>Images</h3>
      <div>
        {product.images.map((image, index)=>(
          <img key={index} src={image} alt={`Product image ${index+1}`} />
        ))}
      </div>
      </div>
      <AddToBasket />
    </div>
  )
}

export default ProductDetails
