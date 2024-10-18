import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import Produtos from "./Views/Produtos"
import Login from "./Views/Login"
import Sobre from "./Views/Sobre"



export default function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" 
        Component={Home}/>

        <Route path="/Produtos" 
        Component={Produtos}/>

        <Route path="/Login"
        Component={Login}/>

        <Route path="/Sobre" 
        Component={Sobre}/>
      </Routes>
    </Router>


    </>
  )
}

