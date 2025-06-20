import { useReducer, useRef, useCallback, useState, useEffect } from "react";
import { PiBroomFill } from "react-icons/pi";
import { MdAdd, MdOutlineSearch, MdAddCircle, MdClear, MdDelete } from "react-icons/md";
import { LuMinus } from "react-icons/lu";

const initialState = { products: [] };

function reducer(state, action) {
  switch (action.type) {
    case "load":
      return {
        products: action.products,
      };
    case "add":
      return {
        products: [
          ...state.products,
          {
            id: Date.now(),
            name: action.name,
            quantity: 1,
          },
        ],
      };
    case "increment":
      return {
        products: state.products.map((p) =>
          p.id === action.id ? { ...p, quantity: p.quantity + 1 } : p
        ),
      };
    case "decrement": {
      const product = state.products.find((p) => p.id === action.id);
      if (product && product.quantity > 1) {
        return {
          products: state.products.map((p) =>
            p.id === action.id ? { ...p, quantity: p.quantity - 1 } : p
          ),
        };
      } else {
        return {
          products: state.products.filter((p) => p.id !== action.id),
        };
      }
    }
    case "remove":
      return {
        products: state.products.filter((p) => p.id !== action.id),
      };
    case "search": {
      const searchText = action.txt.toLowerCase();
      return {
        products: state.products.filter((p) =>
          p.name.toLowerCase().includes(searchText)
        ),
      };
    }
    case "clear":
      return {
        products: [],
      };
    default:
      return state;
  }
}
export default function InventoryManager() {
  const [showAlertMsj, setShowAlertMsj] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const inputRef = useRef(null);

  useEffect(() => {
    const storedProducts = localStorage.getItem("inventory");
    if (storedProducts) {
      dispatch({ type: "load", products: JSON.parse(storedProducts) });
    }
  }, []);
  useEffect(() => {
    // Guardar los productos en localStorage cada vez que cambien
    localStorage.setItem("inventory", JSON.stringify(state.products));
  }, [state.products]);
  useEffect(() => {
    if (showAlertMsj) {
      const timer = setTimeout(() => {
        setShowAlertMsj(false);
      }, 2000); // Ocultar mensaje después de 3 segundos
      return () => clearTimeout(timer); // Limpiar el timer al desmontar o cambiar el mensaje
    }
  }, [showAlertMsj]);
  const handleAddProduct = () => {
    if (inputRef.current.value.trim() !== "") {
      dispatch({ type: "add", name: inputRef.current.value });
      inputRef.current.value = ""; // Limpiar input
    }
  };
  const handleSearchProduct = useCallback(() => {
    if (inputRef.current.value.trim() === "") {
      setShowAlertMsj("Por favor, ingresa al menos 1 caracter para buscar.");
      return;
    } else {
      dispatch({ type: "search", txt: inputRef.current.value });
    }
  }, []);
  const handleIncrement = useCallback((id) => {
    dispatch({ type: "increment", id });
  }, []);

  const handleDecrement = useCallback((id) => {
    dispatch({ type: "decrement", id });
  }, []);
  const handleDelete = useCallback((id) => {
    dispatch({ type: "remove", id });
  }, []);

  return (
    <div className="container">
      <h1>Gestor de Inventario</h1>
      <div className="control-actions">
        <input
          ref={inputRef}
          className="inputTXT"
          type="text"
          placeholder="Nombre del producto"
        />
        <div className="actions">
          <button
            onClick={() => handleSearchProduct(inputRef)}
            aria-label="Buscar producto"
          >
            <MdOutlineSearch />
          </button>
          <button onClick={handleAddProduct} aria-label="Agregar producto">
            <MdAddCircle />
          </button>
        </div>
      </div>
      {showAlertMsj && (
        <div className="alert">
          <p>{showAlertMsj}</p>
          <button
            onClick={() => setShowAlertMsj(false)}
            aria-label="Cerrar mensaje"
          >
            <MdClear />
          </button>
        </div>
      )}
      <ul className="product-list">
        {state.products.map((product) => (
          <li key={product.id} className="product-item">
            {product.name}
            <div className="quantities-actions">
            <button onClick={() => handleIncrement(product.id)}><MdAdd/></button>
            <span className="product-quantity">{product.quantity}</span>
            <button onClick={() => handleDecrement(product.id)}><LuMinus/> </button>
            </div>
            <button onClick={() => handleDelete(product.id)}><MdDelete/></button>
          </li>
        ))}
      </ul>
      <div className="clear-button">
        <button
          onClick={() => dispatch({ type: "clear" })}
          aria-label="Limpiar inventario"
        >
          <PiBroomFill />
        </button>
      </div>
    </div>
  );
}
