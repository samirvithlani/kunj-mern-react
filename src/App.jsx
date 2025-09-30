import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import './App.css'
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import { Content } from "./components/Content";
import { MapDemo1 } from "./components/MapDemo1";
import { MapDemo2 } from "./components/MapDemo2";
import { MapDemo3 } from "./components/MapDemo3";
import { MapDemo4 } from "./components/MapDemo4";
import { UseStateDemo1 } from "./components/UseStateDemo1";
import { UseStateDemo2 } from "./components/UseStateDemo2";
import { Employees } from "./components/Employees";
import { InputDemo1 } from "./components/InputDemo1";
import { DepedentDropDown } from "./components/DepedentDropDown";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { NetflixHome } from "./components/NetflixHome";
import { NetflixShows } from "./components/NetflixShows";

function App() {

  var title = "REACT JS"

  return (
    <div>
      <Navbar></Navbar>
     <Routes>
        <Route path="/netflixhome" element={<NetflixHome/>}></Route>
        <Route path="/netflixshows" element ={<NetflixShows/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
