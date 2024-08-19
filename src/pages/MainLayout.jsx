import { Outlet } from "react-router-dom";
import MainHeader from "../components/layout/header/MainHeader";
// import MainFooter from "../components/layout/footer/MainFooter";

const MainLayout = () => {
  return (
    <>
      <MainHeader />

      <main className="  ">
        <Outlet />
      </main>
      {/* <MainFooter /> */}
    </>
  );
};

export default MainLayout;
