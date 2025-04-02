// import Headerlogo from "@/components/headerlogo";
import Headername from "@/components/headername";
import Search from "@/components/GlowingSearch";


export default function Home() {
  return (
    <main className="p-4">
      {/* <Headerlogo /> */}
      <Headername />
      <Search />
      <h1 className="text-2xl font-bold"> Welcome to zizten</h1>

    </main>
  );
}
