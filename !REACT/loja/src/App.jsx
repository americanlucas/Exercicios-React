import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import Produtos from "./Views/Produtos"
import Login from "./Views/Login"



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
      </Routes>
    </Router>


    </>
  )
}

