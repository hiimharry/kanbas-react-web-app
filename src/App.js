import Kanbas from "./Kanbas";
import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import logo from "./logo.svg";
// import "./App.css";
import { HashRouter, Link } from "react-router-dom";
import { Routes, Route, Navigate} from "react-router";

function App() {
  const screen = "labs";
  return (
    <HashRouter>
        <Routes>
          <Route path="/"       element={<Navigate to="/Labs/a3"/>}/>
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
          <Route path="/hello" element={<HelloWorld />} />
        </Routes>
    </HashRouter>
  );
}

export default App;
