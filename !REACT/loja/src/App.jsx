import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Views/Home";




export default function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" Component={Home}
        
        />
      </Routes>
    </Router>


    </>
  )
}

