import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <SideBar />
      </header>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
