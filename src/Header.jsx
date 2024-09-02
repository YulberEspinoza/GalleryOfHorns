import { useState } from "react";

function Header() {
  const [color, setColor] = useState(true);

  function cambiarColor() {
    setColor(!color);
  }
  return (
    <div onClick={cambiarColor}>
      {color ? (
        <h1 className="cambio1">My Gallery of Horns</h1>
      ) : (
        <h1 className="cambio2">My Gallery of Horns</h1>
      )}
    </div>
  );
}

export default Header;
