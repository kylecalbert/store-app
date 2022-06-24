import React, {
	createContext,
	useReducer,
	useContext,
	useState,
	useEffect,
} from "react";
import { cartReducer } from "./Reducer";
import faker from "faker";

import axios from "axios";

export const Cart = createContext();

const Context = ({ children }) => {
	// const [products, setProducts] = useState([]);

	// useEffect(() => {
	// 	async function fetchData() {
	// 		const data = await axios.get(`https://fakestoreapi.com/products`);
	// 		setProducts(data.data);
	// 	}
	// 	fetchData();
	// }, []);

	const products = [...Array(20)].map(() => ({
		id: faker.datatype.uuid(),
		name: faker.commerce.productName(),
		price: faker.commerce.price(),
		image: faker.random.image(),
		inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
		fastDelivery: faker.datatype.boolean(),
		ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
	}));

	const [state, dispatch] = useReducer(cartReducer, {
		products: products,
		cart: [],
	});

	// const [productState, productDispatch] = useReducer(productReducer, {
	// 	byStock: false,
	// 	byDelivery: false,
	// 	byRating: 0,
	// 	searchQuery: "",
	// });

	return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export const CartState = () => {
	return useContext(Cart);
};

export default Context;
