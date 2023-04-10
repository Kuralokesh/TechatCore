import "./styles.css";

import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Meeting from "./components/Meeting";
// import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meeting" element={<Meeting />} />
      </Routes>
    </div>
  );
}

export default App;
