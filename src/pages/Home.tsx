import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import MainLayout from "../components/main";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="flex bg-[#f0f2f5;] space-x-5 ">
        <aside className="hidden lg:block fixed top-26 left-5   max-w-[300px] h-[calc(100vh-40px)]   z-40">
          <Sidebar />
        </aside>

        <div className="pt-16 pl-0 lg:pl-[300px] flex-1 ml-5 xl:ml-10  xl:mr-5 mr-2  mt-10 ">
          <MainLayout />
        </div>
      </div>
    </>
  );
}
