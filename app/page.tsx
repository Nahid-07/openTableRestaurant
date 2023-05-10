import Card from "./component/Card";
import NavBar from "./component/NavBar";
import Search from "./component/Search";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar></NavBar>

        <main>
          {/* HEADER */}
          <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
            <div className="text-center mt-10">
              <h1 className="text-white text-5xl font-bold mb-2">
                Find your table for any occasion
              </h1>
              <Search></Search>
            </div>
          </div>
          {/* HEADER */} {/* CARDS */}
          <div className="py-3 px-36 mt-10 flex flex-wrap">
            <Card></Card>
          </div>
        </main>
      </main>
    </main>
  );
}
