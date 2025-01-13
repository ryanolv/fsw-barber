import Header from "../_components/header";
import HelloMessage from "./_components/hello-message";
import QuickSearch from "./_components/quick-search";
import Search from "./_components/search";

export default function Home() {
  return (
    <>
      <Header />
      <HelloMessage />
      <Search />
      <QuickSearch />
    </>
  );
}
