import React, { createContext, useReducer, useContext, useEffect } from "react";
import axios from "axios";
import { cartReducer, productReducer } from "./Reducer";

export const Cart = createContext();

const Context = ({ children }) => {
	useEffect(() => {
		async function fetchData() {
			const data = await axios.get(`https://dummyjson.com/products`);
			dispatch({ type: "SET_PRODUCTS", payload: data.data.products });
		}
		fetchData();
	}, []);

	const [state, dispatch] = useReducer(cartReducer, {
		products: [],
		cart: [],
	});

	const [productState, productDispatch] = useReducer(productReducer, {
		byStock: false,
		searchQuery: "",
	});

	console.log(state);
	return (
		<Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
			{children}
		</Cart.Provider>
	);
};

export const CartState = () => {
	return useContext(Cart);
};

export default Context;
