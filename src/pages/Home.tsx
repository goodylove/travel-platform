import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import MainLayout from "../components/main";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="flex bg-[#f0f2f5;]   ">
        <aside className="hidden xl:block fixed top-27 left-5  w-64 xl:w-72   h-[84.5vh]    z-40">
          <Sidebar />
        </aside>

        <div className="pt-16 pl-0    xl:pl-[300px] flex-1 ml-5 xl:mx-10  xl:mr-5 mr-2  mt-11 ">
          <MainLayout />
        </div>
      </div>
    </>
  );
}
