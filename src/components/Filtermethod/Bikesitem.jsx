import { Button, Card } from "react-bootstrap";
import "./";

export const BikesItem = ({ item, index }) => {
  return (
    <Card style={{ width: "18rem" }} className="bike">
      <Card.Img variant="top" src={item.url} height="150px" />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.model}</Card.Text>
        <Button variant="primary">{item.price}</Button>
      </Card.Body>
    </Card>
  );
};
