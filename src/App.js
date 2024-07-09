import { useReducer } from "react";
import "./App.css";
import CartItems from "./CartItems";
import Product from "./Product";

function App() {
  let reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          cartItems: [...state.cartItems, action.product],
          total: state.total + action.product.price,
        };
      case "REMOVE_FROM_CART":
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (item) => item.id !== action.item.id
          ),
          total: state.total - action.item.price,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    product: [
      {
        id: 1,
        title: "iPhone",
        price: 10000,
      },
      {
        id: 2,
        title: "samsung",
        price: 50000,
      },
      {
        id: 3,
        title: "Redmi",
        price: 40000,
      },
    ],
    cartItems: [],
    total: 0,
  });

  let handleAddToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", product });
  };

  let handleRemoveFromCart = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", item });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-10">
          <div className="row">
            {state.product.map((product) => {
              return (
                <Product handleAddToCart={handleAddToCart} product={product} />
              );
            })}
          </div>
        </div>
        <div className="col-lg-2">
          <h3>CartItems</h3>
          <ol class="list-group list-group-numbered">
            {state.cartItems.map((item) => {
              return (
                <CartItems
                  handleRemoveFromCart={handleRemoveFromCart}
                  item={item}
                />
              );
            })}
          </ol>
          <h3>Total - {state.total}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
