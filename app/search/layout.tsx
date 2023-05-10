import Search from "../component/Search";

export const metadata = {
  title: "opentable -- search",
  description: "Generated by create next app",
};
const Searchlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
        <Search></Search>
      </div>
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        {children}
      </div>
    </>
  );
};

export default Searchlayout;
