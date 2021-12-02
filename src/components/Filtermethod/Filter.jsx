import Button from "@restart/ui/esm/Button";
import React from "react";
import { Row, Col } from "react-bootstrap";

export const Filter = () => {
  return (
    <div>
      <h1>this is filter method</h1>
      <div>
        <Row>
          <Col lg={8}>
            <input
              type="text"
              placeholder="Search..."
              style={{ width: "700px" }}
            />
          </Col>
          <Col lg={8}>
            <Button>Search</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Filter;
