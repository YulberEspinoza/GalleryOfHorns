import { Container, Row } from 'react-bootstrap';
import  HornedBeast from './HornedBeast';
import  hornedBeasts from './hornedBeast.json';


function Gallery (){

  return(
    <>
<Container>
<Row xs={2} md={4} lg={6}>
  
{hornedBeasts.map(hornedBeast =>(
    <HornedBeast key={hornedBeast._id} title={hornedBeast.title} description={hornedBeast.description} imageUrl={hornedBeast.image_url} horns={hornedBeast.horns} keyword={hornedBeast.keyword} />
  ))}

</Row>
</Container>
    </>
  );
}

export default Gallery;