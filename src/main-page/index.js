import { useEffect, useMemo, useState } from "react";
import Header from "./header";
import "./main-page.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeaturedHouse from "./featured-house";
import SearchResults from "../search-results";
import HouseFilter from "./house-filter";
import HouseFromQuery from "./house/houseFromQuery";

function App() {
  const [allHouses, setallHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      const rsp = await fetch("/houses.json");
      const houses = await rsp.json();
      setallHouses(houses);
    };
    fetchHouses();
  }, []);

  const featuredHouse = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * allHouses.length);
    return allHouses[randomIndex];
  }, [allHouses]);

  return (
    <Router>
      <div className="container">
        <Header subtitle="Provinding houses all over the world." />
        <HouseFilter allHouses={allHouses} />
        <Routes>
          <Route
            exact
            path="/"
            element={<FeaturedHouse house={featuredHouse} />}
          />
          <Route
            path="/searchresults/:country"
            element={<SearchResults allHouses={allHouses} />}
          />
          <Route
            path="/house/:id"
            element={<HouseFromQuery allHouses={allHouses} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
