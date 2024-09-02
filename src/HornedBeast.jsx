import { useState } from "react";
import { Button, Card } from "react-bootstrap";

function HornedBeast(props) {
  const [clicks, setClicks] = useState(0);

  function addFavorite() {
    setClicks(clicks + 1);
    console.log(clicks);
  }

  return (
    <>
      <Card
        onClick={() => {
          props.mostrarModal(props.title);
        }}
        style={{ width: "18rem" }}
      >
        <Card.Img
          style={{ height: "200px" }}
          src={props.imageUrl}
          alt={props.title}
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Card.Text>Cuernos: {props.horns}</Card.Text>
          <Card.Text>
            Keyword: {props.keyword}
            key: {props.key}
          </Card.Text>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              addFavorite();
            }}
          >
            ❤ {clicks}
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default HornedBeast;
