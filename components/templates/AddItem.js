import { useState } from "react";
const AddItem = ({data, form, setForm, index1}) => {
    const [product, setProduct] = useState({
      name: '',
      price: '',
      quantity: '',
    });
  
    const removeHandler = (e) => {
      // Implement remove functionality here
    };
  
    const onChangeHandler = (e, index) => {
      setProduct({
        ...product,
        [e.target.name]: e.target.value,
      });
  
      const updatedProducts = [...form.products];
      updatedProducts[index1] = product;
  
      setForm({
        ...form,
        products: updatedProducts,
      });
    };
  
    return (
      <div className="border-2 mt-4 mb-4 w-full rounded-md border-cyan-200 p-2">
        <div className="w-full m-2 flex items-center justify-center">
          <h2 className="text-white">Name:</h2>
          <input
            className="w-3/4 ml-2 rounded-md bg-zinc-900 border-blue-300 border-2"
            type="text"
            name="name"
            value={product.name}
            onChange={(e) => onChangeHandler(e, index1)}
          />
        </div>
        <div className="flex items-center justify-between p-6">
          <div className="flex">
            <h2 className="text-white">Price:</h2>
            <input
              className="w-20 ml-2 rounded-md bg-zinc-900 border-blue-300 border-2"
              type="number"
              name="price"
              value={product.price}
              onChange={(e) => onChangeHandler(e, index1)}
            />
          </div>
          <div className="flex ml-2">
            <h2 className="text-white">Quantity:</h2>
            <input
              className="w-20 ml-2 rounded-md bg-zinc-900 border-blue-300 border-2"
              type="number"
              name="quantity"
              value={product.quantity}
              onChange={(e) => onChangeHandler(e, index1)}
            />
          </div>
        </div>
        <button onClick={removeHandler} className="rounded-md text-red-500 w-full h-7 border-red-400 border-2">Remove</button>
      </div>
    );
  };
  
  export default AddItem;
  