import { Route, Routes } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Help from "./Help";
import Home from "./Home";
import Privacy from "./Privacy";

const App = () => {
  return (
    <HashRouter>
      {/* <div
        style={{
          position: "absolute",
          top: 0,
          width: "100vw",
          height: "5vh",
          borderWidth: 2,
          borderColor: "green",
        }}
      >
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/help">Help</a>
            </li>
          </ul>
        </nav>
      </div> */}
      <Routes>
        <Route path="/help" element={<Help />} />
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
