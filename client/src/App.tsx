import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { HashRouter, Routes, Route } from "react-router-dom";
import PrivateRouteComponent from "./components/hoc/PrivateRouteComponent";
// import PublicRouteComponent from "./components/hoc/PublicRouteComponent";
import Home from "./pages/Home";
import MyTasks from "./pages/Home/MyTasks";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Board from "./pages/Project/Board";
import Register from "./pages/Register";
import { validateTokenAction } from "./store/actions/authActions";
import "./styles/form.scss";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(validateTokenAction());
  }, [dispatch]);
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/home"
            element={<PrivateRouteComponent Component={Home} />}>
            <Route path="/home/tasks" element={<PrivateRouteComponent Component={MyTasks} />} />
            <Route path="/home/project/board" element={<PrivateRouteComponent Component={Board} />} />
          </Route>
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/register"
            element={<Register />}
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
