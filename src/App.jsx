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
import { MyHome } from "./components/MyHome";
import { Error404 } from "./components/Error404";
import { PlayContent } from "./components/PlayContent";
import { NetflixMovies } from "./components/NetflixMovies";
import { FormDemo1 } from "./forms/FormDemo1";
import { FormDemo2 } from "./forms/FormDemo2";
import { FormDemo3 } from "./forms/FormDemo3";
import { FormDemo4 } from "./forms/FormDemo4";
import { FormDemo5 } from "./forms/FormDemo5";
import { FormDemo6 } from "./forms/FormDemo6";

function App() {

  var title = "REACT JS"

  return (
    <div>
      <Navbar></Navbar>
     <Routes>
        <Route path="/" element = {<MyHome/>}></Route>
        <Route path="/netflixhome" element={<NetflixHome/>}></Route>
        <Route path="/netflixshows" element ={<NetflixShows/>}></Route>
        <Route path="/playcontent/:name" element ={<PlayContent/>}></Route>
        <Route path="/netflixmovies" element ={<NetflixMovies/>}></Route>
        <Route path="/formdemo1" element = {<FormDemo1/>}></Route>
        <Route path="/formdemo2" element = {<FormDemo2/>}></Route>
        <Route path="/formdemo3" element = {<FormDemo3/>}></Route>
        <Route path="/formdemo4" element = {<FormDemo5/>}></Route>
        <Route path="/formdemo6" element = {<FormDemo6/>}></Route>
        <Route path="/*" element = {<Error404/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
