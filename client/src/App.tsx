import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { HashRouter, Routes, Route } from "react-router-dom";
import PrivateRouteComponent from "./components/hoc/PrivateRouteComponent";
import PublicRouteComponent from "./components/hoc/PublicRouteComponent";
import Home from "./pages/Home";
import HomeDefault from "./pages/Home/HomeDefault";
import MyTasks from "./pages/Home/MyTasks";
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
          <Route
            path="/"
            element={<PublicRouteComponent Component={HomePage} />}
          />
          <Route
            path="/home"
            element={<PrivateRouteComponent Component={Home} />}>
            <Route path="/home/tasks" element={<MyTasks />} />
          </Route>
          <Route
            path="/login"
            element={<PublicRouteComponent Component={Login} />}
          />
          <Route
            path="/register"
            element={<PublicRouteComponent Component={Register} />}
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
