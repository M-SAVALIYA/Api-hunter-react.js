import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_PRODUCT_PENDING, GET_PRODUCT_PENDING, POST_PRODUCT_PENDING, UPDATE_PRODUCT_PENDING } from "./redux-saga/admin/action";

function App() {
  let dispatch = useDispatch();

  const [view, setview] = useState({})

  let name = useRef();
  let price = useRef();
  let disc = useRef();

  let result = useSelector((state) => state.adminReducer)

  function addProduct() {
    let product = {
      name: name.current.value,
      price: price.current.value,
      disc: disc.current.value
    }

    dispatch({ type: POST_PRODUCT_PENDING, payload: product })
  }

  function deleteProduct(id) {
    dispatch({ type: DELETE_PRODUCT_PENDING, payload: id })
  }

  function viewProduct(product) {
    setview(product)
  }

  function handleProduct(e) {
    setview({ ...view, [e.target.name]: e.target.value })
  }

  function updateProduct() {
    dispatch({ type: UPDATE_PRODUCT_PENDING, payload: view })
  }

  useEffect(() => {
    dispatch({ type: GET_PRODUCT_PENDING })
  }, [])

  if (result.isLoading) {
    return <h1>loading...</h1>
  }

  console.log(result);

  return (
    <>
      <input type="text" ref={name} />
      <input type="number" ref={price} />
      <input type="text" ref={disc} />
      <button onClick={addProduct}>Save</button>

      <br /><br /><br />

      <input type="text" name="name" value={view.name} onChange={handleProduct} />
      <input type="number" name="price" value={view.price} onChange={handleProduct} />
      <input type="text" name="disc" value={view.disc} onChange={handleProduct} />
      <button onClick={updateProduct}>update</button>
      {
        result.product.map((val, index) => {
          return (
            <>
              <h1>{val.name}</h1>
              <h1>{val.price}</h1>
              <h1>{val.disc}</h1>
              <button onClick={() => deleteProduct(val.id)}>Delete</button>
              <button onClick={() => viewProduct(val)}>view</button>
            </>
          )
        })
      }
    </>
  );
}

export default App;
