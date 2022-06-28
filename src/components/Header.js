import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
	Badge,
	Button,
	Container,
	Dropdown,
	FormControl,
	Nav,
	Navbar,
} from "react-bootstrap";
import { CartState } from "../context/Context";
const Header = () => {
	const {
		state: { cart },
		dispatch,
	} = CartState();
	return (
		<Navbar bg="dark" variant="dark" style={{ height: 80 }}>
			<Container>
				<Navbar.Brand>
					<Link to="/">Shopping Cart</Link>
				</Navbar.Brand>
				<Navbar.Text className="search">
					<FormControl
						style={{ width: 500 }}
						placeholder="search a product"
						className="m-auto"
					/>
				</Navbar.Text>
				<Nav>
					<Dropdown alignRight>
						<Dropdown.Toggle variant="success">
							<FaShoppingCart color="white" fontSize="25px" />
							<Badge>{cart.length}</Badge>
						</Dropdown.Toggle>

						<Dropdown.Menu style={{ minWidth: 370 }}>
							{cart.length > 0 ? (
								<>
									{cart.map((product) => (
										<span className="cartitem" key={product.id}>
											<img
												src={product.thumbnail}
												className="cartItemImg"
												alt={product.title}
											/>
											<div className="cartItemDetail">
												<span>{product.title}</span>
												<span>£{product.price}</span>
											</div>

											<AiFillDelete
												fontSize="20px"
												style={{ cursor: "pointer" }}
												onClick={() => {
													dispatch({
														type: "REMOVE_FROM_CART",
														payload: product,
													});
												}}
											/>
										</span>
									))}
									<Link to="/cart">
										<Button style={{ width: "95%", margin: "0 10px" }}>
											Go To Cart
										</Button>
									</Link>
								</>
							) : (
								<span style={{ padding: 10 }}>Cart is Empty!</span>
							)}

							<span style={{ padding: 10 }}>Cart is Empty!</span>
						</Dropdown.Menu>
					</Dropdown>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Header;
