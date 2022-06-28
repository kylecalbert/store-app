export const cartReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_CART":
			return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
		case "REMOVE_FROM_CART":
			return {
				...state,
				cart: [...state.cart.filter((item) => item.id !== action.payload.id)],
			};
		case "CHANGE_CART_QTY":
			return {
				...state,
				cart: state.cart.filter((item) =>
					item.id === action.payload.id
						? (item.qty = action.payload.qty)
						: item.qty
				),
			};

		case "SET_PRODUCTS":
			return { ...state, products: action.payload };
		default:
			return state;
	}
};

export const productReducer = (state, action) => {
	switch (action.type) {
		case "SORT_BY_PRICE":
			return { ...state, sort: action.payload };
		case "FILTER_BY_STOCK":
			return { ...state, byStock: !state.byStock };
		case "FILTER_BY_DELIVERY":
			return { ...state, byStock: !state.byFastDelivery };
		case "FILTER_BY_RATING":
			return { ...state, byRating: !action.payload };
		case "FILTER_BY_SEARCH":
			return { ...state, searchQuery: action.payload };
		case "CLEAR_FILTERS":
			return {
				byStock: false,
				byDelivery: false,
				byRating: 0,
				searchQuery: "",
			};
		default:
			return state;
	}
};
