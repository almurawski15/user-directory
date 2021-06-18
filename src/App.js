import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Search from "./components/Search";


function App() {
  document.title = "Employee Directory";
  return (
    <div> 
      <NavBar />
      <Wrapper>
        <Search />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
