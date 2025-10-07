import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function Editdatasiswa2() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    jurusan: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/menu/${id}`);
        setFormData(res.data);
      } catch (err) {
        console.error("Gagal mengambil data:", err);
        alert("Gagal mengambil data!");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/menu/${id}`, formData);
      Swal.fire({
        title: "Berhasil disimpan!",
        icon: "success",
        confirmButtonColor: "#3085d6",
      });
      navigate("/anfirmasi");
    } catch (err) {
      console.error("Gagal mengupdate data:", err);
      alert("Gagal mengupdate data!");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading data...</p>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-r">
      <div className="bg-amber-50 p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-6">Edit Data</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Nama</label>
            <input
              className="shadow border rounded w-full py-2 px-3"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              placeholder="Masukkan nama anda"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              className="shadow border rounded w-full py-2 px-3"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Masukkan email anda"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Jurusan</label>
            <input
              className="shadow border rounded w-full py-2 px-3"
              name="jurusan"
              value={formData.jurusan}
              onChange={handleChange}
              placeholder="Jurusan"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-sky-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Simpan
            </button>
            <button className="bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
              <a href="/Jalurzonasi">Kembali</a>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Editdatasiswa2;
