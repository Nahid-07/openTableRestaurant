import Header from "../component/Header";

export const metadata = {
    title: "openTable -- restaurant",
    description: "Generated by create next app",
  };
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <main>
            <Header></Header>
            <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
                {children}
            </div>
        </main>
    )
  }