import { Routes , Route } from "react-router-dom"
import HomePage from "../src/componen/HomePage"
import Login from "./componen/Login"
import Register from "./componen/Register"
import Editdatasiswa from "../src/Bahan/Editdatasiswa"
import Dashboard from "./Bahan/Dashboard"

function App() {

  return (
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Edit" element={<Editdatasiswa />} />
      </Routes>
  )
}

export default App
