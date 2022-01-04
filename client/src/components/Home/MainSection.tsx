import { Route, Routes } from "react-router-dom";
import HomeDefault from "../../pages/Home/HomeDefault";
import MyTasks from "../../pages/Home/MyTasks";
import Header from "./Header";

const MainSection = () => {
  return (
    <section className="main-section">
      <Header />
      <Routes>
        <Route path="/" element={<HomeDefault />} />
        <Route path="/tasks" element={<MyTasks />} />
      </Routes>
    </section>
  );
};

export default MainSection;
