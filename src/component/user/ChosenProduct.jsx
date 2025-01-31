import { useNavigate } from "react-router-dom";

const ChosenProduct = ({ products }) => {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div>
      {/* <h1>Chosen for you</h1>
      <div>
        {products.map((product) => (
          <div key={product.id} onClick={() => handleProductClick(product.id)}>
            <img src={product.thumbnail} alt="" />
            <h2>{product.name}</h2>
            <p>{product.content}</p>
            <p>{product.priceAfterDiscount}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default ChosenProduct;
