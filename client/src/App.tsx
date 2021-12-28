import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { validateTokenAction } from "./store/actions/authActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(validateTokenAction());
  }, [dispatch]);
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
