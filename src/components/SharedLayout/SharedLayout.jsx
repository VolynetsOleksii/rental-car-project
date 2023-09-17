import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import Loader from "../Loader/Loader";

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <SideBar />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
