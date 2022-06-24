import React from "react";
import { Card, Button } from "react-bootstrap";
import Rating from "./Rating";
import { CartState } from "../context/Context";
const SingleProduct = ({ product }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={product.image} alt={product.name} />
        <Card.Body>
          <Card.Title>
            <Card.Subtitle style={{ paddingBottom: 10 }}>
              <span>{product.price.split(".")[0]}</span>
              {product.fastDelivery ? (
                <div> Fast delivery</div>
              ) : (
                <div>4 days delivery</div>
              )}
              <Rating rating={product.ratings} />
            </Card.Subtitle>

            {cart.some((item) => item.id === product.id) ? ( ///helps check if particular thing exists in array or not
              <Button
                variant="danger"
                onClick={() => {
                  dispatch({ type: "REMOVE_FROM_CART", payload: product });
                }}
              >
                Remove from Cart
              </Button>
            ) : (
              <Button
                onClick={() => {
                  dispatch({ type: "ADD_TO_CART", payload: product });
                }}
                disabled={!product.inStock}
              >
                {!product.inStock ? "Out of stock" : "Add to Cart"}
              </Button>
            )}
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
