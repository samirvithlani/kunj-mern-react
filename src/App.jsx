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

function App() {
  return (
    <div>
      <Header></Header>
      {/* <Content /> */}
      {/* <MapDemo1/> */}
      {/* <MapDemo2/> */}
      <MapDemo4/>
      <Footer></Footer>
    </div>
  );
}

export default App;
