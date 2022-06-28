import { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../context/Context";
import Rating from "./Rating";
const Cart = () => {
	const {
		state: { cart },
		dispatch,
	} = CartState();

	const [total, setTotal] = useState();

	useEffect(() => {
		setTotal(
			cart.reduce(
				(accumulator, current) =>
					accumulator + Number(current.price * current.qty),
				0
			)
		);
	}, [cart]);
	return (
		<div className="home">
			<div className="productContainer">
				<ListGroup>
					{cart.map((product) => (
						<ListGroup.Item key={product.id}>
							<Row>
								<Col md={2}>
									<Image
										src={product.thumbnail}
										alt={product.title}
										fluid
										rounded
									/>
								</Col>
								<Col md={2}>
									<span>{product.title}</span>
								</Col>
								<Col md={2}>₹ {product.price}</Col>
								<Col md={2}>
									<Rating rating={product.rating} />
								</Col>
								<Col md={2}>
									<Form.Control
										as="select"
										value={product.qty}
										onChange={(e) =>
											dispatch({
												type: "CHANGE_CART_QTY",
												payload: {
													id: product.id,
													qty: e.target.value,
												},
											})
										}
									>
										{[...Array(product.stock).keys()].map((x) => (
											<option key={x + 1}>{x + 1}</option>
										))}
									</Form.Control>
								</Col>
								<Col md={2}>
									<Button
										type="button"
										variant="light"
										onClick={() =>
											dispatch({
												type: "REMOVE_FROM_CART",
												payload: product,
											})
										}
									>
										<AiFillDelete fontSize="20px" />
									</Button>
								</Col>
							</Row>
						</ListGroup.Item>
					))}
				</ListGroup>
			</div>

			<div className="filters summary">
				<span className="title">Subtotal ({cart.length}) items</span>
				<span style={{ fontWeight: 700, fontSize: 20 }}>Total: £ {total} </span>
			</div>
		</div>
	);
};

export default Cart;
