function HornedBeast(props) {
  return(
    <>
    <h2>{props.title}</h2>
    <p>{props.description}</p>
    <img src={props.imageUrl} style={{width: '80px'}} alt={props.title}/>
    </>
  );
}

export default HornedBeast;