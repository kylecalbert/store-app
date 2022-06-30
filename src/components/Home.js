import React from "react";
import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";
import Filters from "./Filters";
import "./styles.css";
function Home() {
	const {
		state: { products },
	} = CartState();

	return (
		<div className="home">
			<div className="productContainer">
				{products.map((product) => {
					return <SingleProduct product={product} key={product.id} />;
				})}
			</div>
		</div>
	);
}

export default Home;
