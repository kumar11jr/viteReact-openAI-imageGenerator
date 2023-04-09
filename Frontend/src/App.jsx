import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import SignUp from "./SignUp";
import Login from "./Login";

function App() {
  return (
    <div>
      <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/" element={<Login/>} />
    </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;
