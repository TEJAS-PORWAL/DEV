import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Roadmap from "./components/Roadmap";
import Populatediv from "./components/Populatediv";
import About from "./components/About";
import Cards from "./components/Cards";
import TermCards from "./components/TermCards";
import Cardsection from "./components/Cardsection";
import { Routes, Route } from "react-router-dom";
import MyProvider from "./components/MyProvider";
import "./App.css";

function App() {
  window.onload = setTimeout(() => {
    const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    if (vw < 1000) {
      let roadmap = document.getElementById("roadmap").style;
      roadmap.display = "none";
      let populate = document.getElementById("Populate").style;
      populate.display = "block";
    } else {
      let roadmap = document.getElementById("roadmap").style;
      roadmap.display = "block";
      let populate = document.getElementById("Populate").style;
      populate.display = "none";
    }
  }, 10);

  return (
    <MyProvider>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Navbar />
              
              <Main />
              {/* <About /> */}
              <TermCards/>
              <Cards />
              <Roadmap />
              <Populatediv />
              <Footer />
            </>
          }
        />
        <Route exact path="About" element={<About />} />
        <Route
          exact
          path="Cardsection"
          element={<Cardsection/>}
        ></Route>
      </Routes>
    </MyProvider>
  );
}
export default App;
