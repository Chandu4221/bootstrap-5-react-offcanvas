import { useState } from "react";
import Navbar from "./components/Navbar";
import OffcanvasMenu from "./components/OffcanvasMenu";

function App() {
  const [offcanvasVisible, setOffcanvasVisible] = useState(false);
  return (
    <div className="App">
      <OffcanvasMenu
        offcanvasVisible={offcanvasVisible}
        setOffcanvasVisible={setOffcanvasVisible}
      />
      <Navbar
        setOffcanvasVisible={setOffcanvasVisible}
        offcanvasVisible={offcanvasVisible}
      />
      <div className="d-flex">
        <button
          className="btn btn-primary ms-auto"
          type="button"
          onClick={() => setOffcanvasVisible(!offcanvasVisible)}
        >
          {offcanvasVisible ? "true" : "false"}
        </button>
      </div>
    </div>
  );
}

export default App;
