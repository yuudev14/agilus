import { Route, Routes } from "react-router-dom";
import HomeDefault from "../../pages/Home/HomeDefault";
import MyTasks from "../../pages/Home/MyTasks";
import Board from "../../pages/Project/Board";
import PrivateRouteComponent from "../hoc/PrivateRouteComponent";
import Header from "./Header";

const MainSection = () => {
  return (
    <section className="main-section">
      <Header />
      <Routes>
        <Route path="/" element={<HomeDefault />} />
        <Route path="/tasks" element={<PrivateRouteComponent Component={MyTasks} />} />
        <Route path="/project/board" element={<PrivateRouteComponent Component={Board} />} />
      </Routes>
    </section>
  );
};

export default MainSection;
