import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Seacrh from "./components/Search/Search";
import Jobs from "./components/JobDiv/Jobs";
import Value from "./components/ValueDiv/Value";
import Footer from "./components/FooterDiv/Footer";

function App() {
  return (
    <div className="w-[85%] m-auto bg-white">
      <NavBar/>
      <Seacrh/>
      <Jobs/>
      <Value/>
      <Footer/>
    </div>
  )
}

export default App;