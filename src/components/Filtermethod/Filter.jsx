// import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Bikes } from "../../Services/filterdata";
import { Bike } from "./Bikesitem";

export const Filter = () => {
  console.log(Bikes);
  return (
    <div>
      <Row>
        <Col lg={8}>
          <input
            type="text"
            placeholder="Search..."
            style={{ width: "700px" }}
          ></input>
        </Col>
        <Col lg={2}>
          <Button>Search</Button>
        </Col>
      </Row>
      <Row>
        {Bikes.map((item, index) => (
          <Col>
            <Bikes item={item} index={index} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Filter;
