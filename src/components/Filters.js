import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";
const Filters = () => {
  const [rate, setRate] = useState(3);
  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          type="radio"
          name={"group1"}
          id={"inline-1"}
          label="Ascending"
        />
      </span>
      <span>
        <Form.Check
          inline
          type="radio"
          name={"group1"}
          id={"inline-2"}
          label="Ascending"
        />
      </span>
      <span>
        <Form.Check
          inline
          type="checkbox"
          name={"group1"}
          id={"inline-3"}
          label="Include out of stock"
        />
      </span>
      <span>
        <Form.Check
          inline
          type="checkbox"
          name={"group1"}
          id={"inline-4"}
          label="Fast delivery only"
        />
      </span>

      <span>
        <label style={{ paddingRight: 10 }}>Rating:</label>
        <Rating
          rating={rate}
          onClick={(i) => setRate(i + 1)}
          style={{ cursor: "pointer" }}
        />
      </span>
      <Button variant="light">Clear Filters</Button>
    </div>
  );
};

export default Filters;
