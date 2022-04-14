import { useState } from "react";
import Navbar from "../Layouts/BasicMenuLayout";
import BillComponent from "../Components/BillComponent";
import HeaderComponent from "../Components/HeaderComponent";
import { SearchContext } from "../Configurations/context";

export default function HomePage() {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={search}>
      <Navbar searchFunction={setSearch}>
        <HeaderComponent></HeaderComponent>
        <BillComponent></BillComponent>
      </Navbar>
    </SearchContext.Provider>
  );
}
