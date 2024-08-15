import  HornedBeast from './HornedBeast';
import  hornedBeast from './hornedBeast.json';

function Gallery (){

  return(
    <>
    <HornedBeast title="imagen" description="Imagen de referencia" imageUrl="https://cdn-icons-png.flaticon.com/512/9145/9145141.png"/>
    <HornedBeast title="unicornio" description="forma de refencia" imageUrl="https://historia.nationalgeographic.com.es/medio/2020/03/10/01-03-narval-grabado-animal-unicornio-foto-bridgemanaci_bc462562_1280x552.jpg"/>

{
  hornedBeast.map(data =>(
    <HornedBeast title={data.title} description={data.description} imageUrl={data.image_url}/>
  ))
}
    </>
  );
}

export default Gallery;