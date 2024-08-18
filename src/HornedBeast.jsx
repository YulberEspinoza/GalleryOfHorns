import { useState } from "react";
import {Button,Card} from 'react-bootstrap'

function HornedBeast(props) {
const [clicks,setClicks]=useState(0);

function addFavorite(){
    setClicks(clicks+1);
}

  return(
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img style={{height: '200px'}} src={props.imageUrl}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}</Card.Text>
        <Card.Text>Cuernos: {props.horns}</Card.Text>
        <Card.Text >Keyword: {props.keyword}</Card.Text>
        <Button onClick={addFavorite}>❤ {clicks}</Button>
      </Card.Body>
    </Card>
    </>
  );
}

export default HornedBeast;