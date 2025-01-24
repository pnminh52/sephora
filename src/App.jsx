import React, { useState, useEffect } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import ProductAdd from './server/product/ProductAdd';
import ProductList from './server/product/ProductList';
import ProductUpdate from './server/product/ProductUpdate';
import AdminLayout from './server/AdminLayout';
import UserLayout from './client/UserLayout';
import Homepage from './page/Homepage';

const App = () => {
  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/products`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const deleteProduct = (id) => {
    fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    });
    const newProductList = products.filter((item) => item.id !== id);
    setProducts(newProductList);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const addProduct = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/products', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(inputValue),
    })
      .then((response) => response.json())
      .then((data) => setProducts([...products, data]));
    navigate('/server/products/product-list');
  };

  const updateProduct = (product) => {
    fetch(`http://localhost:3000/products/${product.id}`, {
      method: 'PATCH',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(products.map((item) => (item.id === data.id ? data : item)));
      });
    navigate('/server/products/product-list');
  };

  return (
    <Routes>
      <Route path="/server" element={<AdminLayout />}>
        <Route path="products/product-list" element={<ProductList products={products} deleteProduct={deleteProduct} />} />
        <Route path="products/product-add" element={<ProductAdd addProduct={addProduct} onChange={onChange} />} />
        <Route path="products/:id/product-update" element={<ProductUpdate products={products} updateProduct={updateProduct} />} />
      </Route>
      <Route path="/" element={<UserLayout />}>
        <Route path="/homepage" element={<Homepage />} />
      </Route>
    </Routes>
  );
};

export default App;
