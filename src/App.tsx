import { Route, Routes } from "react-router-dom";
import Help from "./Help";
import Home from "./Home";

const App = () => {
  return (
    <Routes>
      <Route path="/help" Component={Help} />
      <Route path="/" Component={Home} />
    </Routes>
  );
};

export default App;
