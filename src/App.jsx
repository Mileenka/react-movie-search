import { useState } from "react";

import "./App.css";
import "./Reset.css";

import Card from "./Components/Card";
import Header from "./Components/Header";
import Search from "./Components/Search";
import MoviesContainer from "./Components/MoviesContainer";
import Footer from "./Components/Footer";

const App = () => {
  const [searchText, setSearchText] = useState("man");

  const getInputValue = (value) => {
    setSearchText(value);
  };

  return (
    <Card>
      <div className="bg"></div>
      <Header
        logoText="Gold Screen Gems"
        quoteText="In a World of Film, We Discover Gold Screen Gems"
      />
      <Search getInputValue={getInputValue} />
      <MoviesContainer value={searchText} />
      <Footer
        attributionText="Coded and Designed"
        authorLink="https://github.com/Mileenka"
      />
    </Card>
  );
};

export default App;
