import React from "react";

const ProductAdd = (props) => {
  const { addProduct, onChange } = props;
  return (
    <div>
      <form action="" onSubmit={addProduct}>
        <input onInput={onChange} name="name" placeholder="here" type="text" />
        <input onInput={onChange} name="description" placeholder="here" type="text" />
        <input onInput={onChange} name="image" placeholder="here" type="text" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ProductAdd;
