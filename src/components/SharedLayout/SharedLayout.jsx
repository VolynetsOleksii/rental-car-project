import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";

export const SharedLayout = () => {
  return (
    <div>
      <SideBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
