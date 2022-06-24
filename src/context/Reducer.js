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
		default:
			return state;
	}
};

export const productReducer = (state, action) => {
	switch (action.type) {
		case "SORT_BY_PRICE":
			return { ...state, sort: action.payload };
		case "FILTER_BYSTOCK":
			return { ...state, byStock: !state.byStock };
		default:
			return state;
	}
};
