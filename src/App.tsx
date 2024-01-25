import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Help from "./Help";
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/help" Component={Help} />
        <Route path="/" Component={Home} />
      </Routes>
    </Router>
  );
};

export default App;
