import { Routes , Route } from "react-router-dom"
import HomePage from "../src/componen/HomePage"
import Login from "./componen/Login"
import Register from "./componen/Register"
import Register1 from "./componen/Register1"
import Register2 from "./componen/Register2"
import Editdatasiswa from "./Bahan/Editdatasiswa"
import Editdatasiswa1 from "./Bahan/Editdatasiswa1"
import Editdatasiswa2 from "./Bahan/Editdatasiswa2"
import Dashboard from "./Bahan/Dashboard"
import Tambahdata from "./Bahan/Tambahdata"
import Tambahdata1 from "../src/Bahan/Tambahdata1"
import Tambahdata2 from "../src/Bahan/Tambahdata2"
import Jalurzonasi from "./Bahan/Jalurzonasi"
import JalurZonasi from "./componen/JalurZonasi"
import Jaluranfirmasi from "./Bahan/Jaluranfirmasi"
import JalurAnfirmasi from "./componen/JalurAnfirmasi"
import Pilihan from "./componen/Pilihan"
import Profile from "./componen/Profile"

function App() {

  return (
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/R1" element={<Register1 />} />
      <Route path="/R2" element={<Register2 />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Edit/:id" element={<Editdatasiswa />} />
      <Route path="/Editdatasiswa1/:id" element={<Editdatasiswa1 />} />
      <Route path="/Editdatasiswa2/:id" element={<Editdatasiswa2 />} />
      <Route path="/Tambahdata" element={<Tambahdata />} />
      <Route path="/Tambahdata1" element={<Tambahdata1 />} />
      <Route path="/Tambahdata2" element={<Tambahdata2 />} />
      <Route path="/zonasi" element={<Jalurzonasi />} />
      <Route path="/JalurZonasi" element={<JalurZonasi />} />
      <Route path="/JalurAnfirmasi" element={<JalurAnfirmasi />} />
      <Route path="/anfirmasi" element={<Jaluranfirmasi />} />
      <Route path="/Pilihan" element={<Pilihan />} />
      <Route path="/Pp" element={<Profile />} />
      </Routes>
  )
}

export default App
