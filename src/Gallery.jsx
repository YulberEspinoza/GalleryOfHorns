import { Container, Row } from "react-bootstrap";
import HornedBeast from "./HornedBeast";

function Gallery(props) {
  return (
    <>
      <Container>
        <Row xs={2} md={4} lg={6}>
          {props.allbeast.map((hornedBeast) => (
            <HornedBeast
              key={hornedBeast._id}
              mostrarModal={props.mostrarModal}
              title={hornedBeast.title}
              description={hornedBeast.description}
              imageUrl={hornedBeast.image_url}
              horns={hornedBeast.horns}
              keyword={hornedBeast.keyword}
            />
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Gallery;
