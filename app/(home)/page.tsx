import Image from "next/image";
import Header from "../_components/header";
import HelloMessage from "./_components/hello-message";
import QuickSearch from "./_components/quick-search";
import Search from "./_components/search";
import PopularBarbershops from "./_components/popular-barbershops";

export default async function Home() {
  return (
    <>
      <Header />
      <HelloMessage />
      <Search />
      <QuickSearch />
      <div className="flex justify-center">
        <Image src="/banner.png" alt="Banner" height={150} width={350} />
      </div>

      <PopularBarbershops />
    </>
  );
}
