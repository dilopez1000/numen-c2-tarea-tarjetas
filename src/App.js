import TarjetaLista from './components/TarjetaLista';

function App() {
  return (
    <div className="App">
      <TarjetaLista/>
    </div>
  );
}

export default App;


// // CARRITO 01
// import React, { useReducer } from "react";

// // Definir el estado inicial del carrito
// const initialState = {
//   products: [
//     { id: 1, name: "Camiseta", price: 10 },
//     { id: 2, name: "Pantalón", price: 20 },
//     { id: 3, name: "Zapatos", price: 30 },
//   ],
//   cart: [],
// };

// // Definir las acciones que pueden modificar el estado
// const ADD_TO_CART = "ADD_TO_CART";
// const REMOVE_FROM_CART = "REMOVE_FROM_CART";

// // Definir la función reductora que actualiza el estado según la acción
// const reducer = (state, action) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       // Añadir el producto al carrito si no está ya
//       if (!state.cart.includes(action.payload)) {
//         return {
//           ...state,
//           cart: [...state.cart, action.payload],
//         };
//       } else {
//         return state;
//       }
//     case REMOVE_FROM_CART:
//       // Eliminar el producto del carrito si está
//       return {
//         ...state,
//         cart: state.cart.filter((product) => product.id !== action.payload.id),
//       };
//     default:
//       return state;
//   }
// };

// // Crear el componente Cart para mostrar el carrito
// const Cart = ({ cart, dispatch }) => {
//   return (
//     <div className="cart">
//       <h2>Carrito</h2>
//       {cart.length > 0 ? (
//         cart.map((product) => (
//           <div key={product.id} className="product">
//             <p>{product.name}</p>
//             <p>${product.price}</p>
//             <button onClick={() => dispatch({ type: REMOVE_FROM_CART, payload: product })}>
//               Quitar del carrito
//             </button>
//           </div>
//         ))
//       ) : (
//         <p>El carrito está vacío</p>
//       )}
//     </div>
//   );
// };

// // Crear el componente Products para mostrar los productos
// const Products = ({ products, dispatch }) => {
//   return (
//     <div className="products">
//       <h2>Productos</h2>
//       {products.map((product) => (
//         <div key={product.id} className="product">
//           <p>{product.name}</p>
//           <p>${product.price}</p>
//           <button onClick={() => dispatch({ type: ADD_TO_CART, payload: product })}>
//             Añadir al carrito
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// function App() {
//   // Usar el hook useReducer para manejar el estado del carrito
//   const [state, dispatch] = useReducer(reducer, initialState);

//   // Renderizar la interfaz de usuario
//   return (
//     <div className="App">
//       <h1>Carrito de Compras en React con useReducer</h1>
//       <Products products={state.products} dispatch={dispatch} />
//       <Cart cart={state.cart} dispatch={dispatch} />
//     </div>
//   );
// }

// export default App;



////--------------------------------------------------------------------------------


//CARRITO 02
// import React, { useReducer } from "react";

// const products = [
//   {
//     id: 1,
//     name: "Producto 1",
//     price: 10,
//   },
//   {
//     id: 2,
//     name: "Producto 2",
//     price: 20,
//   },
//   {
//     id: 3,
//     name: "Producto 3",
//     price: 30,
//   },
// ];

// const initialState = {
//   cart: [],
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       const productId = action.payload.productId;
//       const product = products.find((p) => p.id === productId);
//       const existingCartItem = state.cart.find((item) => item.id === productId);

//       if (existingCartItem) {
//         return {
//           ...state,
//           cart: state.cart.map((item) =>
//             item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
//           ),
//         };
//       } else {
//         return {
//           ...state,
//           cart: [...state.cart, { ...product, quantity: 1 }],
//         };
//       }
//     case 'REMOVE_FROM_CART':
//       // Eliminar el producto del carrito si está
//       return {
//         ...state,
//         //cart:[],
//         cart: state.cart.filter((item) => item.id !== action.payload.productId),        
//       };
//       case 'CLEAR_CART':
//         // return {
//         //   ...state,
//         //   cart:[],
//         // };
//         return initialState;
//     default:
//       return state;
//   }
// }

// function Products({ dispatch }) {
//   const handleAddToCart = (productId) => {
//     dispatch({ type: "ADD_TO_CART", payload: { productId } });
//   };

//   return (
//     <div>
//       <h2>Productos</h2>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             {product.name} - ${product.price}{" "}
//             <button onClick={() => handleAddToCart(product.id)}>Agregar al carrito</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function Cart({ cart, dispatch }) {
//   const handleRemoveFromCart = (productId) => {
//     dispatch({ type: "REMOVE_FROM_CART", payload: { productId } });
//   };

//   const handleClearCart = () => {
//     dispatch({ type: "CLEAR_CART" });
//   };

//   const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   return (
//     <div>
//       <h2>Carrito</h2>
//       <ul>
//         {cart.map((item) => (
//           <li key={item.id}>
//             {item.name} - Cantidad: {item.quantity} - Precio total: ${item.price * item.quantity}{" "}
//             <button onClick={() => handleRemoveFromCart(item.id)}>Remover del carrito</button>
//           </li>
//         ))}
//       </ul>
//       <p>Total: ${total} {" "} <button onClick={() => handleClearCart()}>Vaciar carrito</button> </p>
      
//     </div>
//   );
// }

// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <Products dispatch={dispatch} />
//       <Cart cart={state.cart} dispatch={dispatch} />
//     </div>
//   );
// }

// export default App;