import { Outlet } from "react-router-dom";
import Sidebar from "../common/Sidebar";

export default function MainLayout() {

  console.log('main---layout')
  return (
    <div className="h-screen flex">
      <Sidebar />

      <main className="flex-1 overflow-auto bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
}