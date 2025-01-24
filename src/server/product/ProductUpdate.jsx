import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
const ProductUpdate = ({products, updateProduct}) => {
  const {id}=useParams()
  const currentProduct=products.find((item)=>item.id==id)
  const [inputValue, setInputValue] = useState({});
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  const onUpdate=(e)=>{
    e.preventDefault()
    const updateData={...currentProduct, ...inputValue}
    updateProduct(updateData)
  }
  return (
    <div>
     <form action="" onSubmit={onUpdate}>
        <input defaultValue={currentProduct?.name} onInput={onChange} name="name" placeholder="here" type="text" />
        <input defaultValue={currentProduct?.description} onInput={onChange} name="description" placeholder="here" type="text" />
        <input defaultValue={currentProduct?.image} onInput={onChange} name="image" placeholder="here" type="text" />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default ProductUpdate
