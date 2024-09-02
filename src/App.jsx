import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import hornedBeast from "./hornedBeast.json";
import Header from "./Header";
import Gallery from "./Gallery";
import Footer from "./Footer";
import SelectedBeast from "./SelectedBeast";

function App() {
  const [displayModal, setDisplayModal] = useState(false);
  const [selectedBeast, setSelectecBeast] = useState({});

  function mostrarModal(name) {
    const beastWithName = hornedBeast.find((beast) => beast.title === name);
    setSelectecBeast(beastWithName);
    console.log(beastWithName);
    setDisplayModal(true);
  }
  function handleClose() {
    setDisplayModal(false);
  }

  return (
    <>
      <Header />
      <Gallery allbeast={hornedBeast} mostrarModal={mostrarModal} />
      <SelectedBeast
        selectedBeast={selectedBeast}
        show={displayModal}
        handleClose={handleClose}
      />
      <Footer />
    </>
  );
}

export default App;
