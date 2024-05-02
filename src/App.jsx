import "./App.css";
import Home from "./componentes/home";
import Proyectos from "./componentes/proyectos";
import Sidebar from "./componentes/sidebar";
import { Routes, Route } from "react-router-dom"
import Wallpapers from "./componentes/wallpapers";
import Diseños from "./componentes/diseños";
/*  const week = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];

function updateTime() {
  var now = new Date();
  document.getElementById("time").innerText =
    zeroPadding(now.getHours(), 2) +
    ":" +
    zeroPadding(now.getMinutes(), 2) +
    ":" +
    zeroPadding(now.getSeconds(), 2);

  document.getElementById("date").innerText =
    now.getFullYear() +
    "-" +
    zeroPadding(now.getMonth() + 1, 2) +
    "-" +
    zeroPadding(now.getDate(), 2) +
    " " +
    week [now.getDay()];
}

updateTime();
setInterval(updateTime, 1000);
function zeroPadding(num, digit) {
  return String(num).padStart(digit, "0");
} 
  */
function App() {
  return (
    <>
      <div className="container">
        {/* SIDEBAR  */}
        <Sidebar  />

        {/* CONTENT */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/wallpapers" element={<Wallpapers />} />
            <Route path="/diseños" element={<Diseños />} />
          </Routes>
        </div>
      </div>{" "}
    </>
  );
}

export default App;
