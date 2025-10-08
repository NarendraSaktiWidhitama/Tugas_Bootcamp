import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import background from "../assets/space.jpg";
import axios from 'axios';
import Swal from 'sweetalert2';
import Jalurzonasi from '../Bahan/Jalurzonasi';

function JalurZonasi() {
    const [formData, setFormData] = useState({
        nama: "",
        email: "",
        jurusan: "",
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post("http://localhost:5000/jalurZonasi", formData);
            console.log("Respon server:", response.data);

            Swal.fire({
                title: "Selamat!",
                text: "Data berhasil disimpan!",
                icon: "success",
            });

            setFormData({ nama: "", email: "", jurusan: "" });
            navigate("/zonasi");
        } catch (error) {
            console.error("Error saat menambahkan data:", error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Terjadi kesalahan saat menyimpan data!",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center bg-cover bg-center h-screen" style={{ backgroundImage: `url(${background})` }}>
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
                <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nama">
                            Nama
                        </label>
                        <input
                            id="nama"
                            type="text"
                            name="nama"
                            value={formData.nama}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                            placeholder="Masukkan nama anda"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                            placeholder="Masukkan email anda"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jurusan">
                            Jurusan
                        </label>
                        <input
                            id="jurusan"
                            type="text"
                            name="jurusan"
                            value={formData.jurusan}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                            placeholder="Masukkan jurusan anda"
                            required
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <button
                            type="submit"
                            className="bg-sky-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            {loading ? "Menyimpan..." : "Simpan"}
                        </button>
                        <a
                            href="/"
                            className="bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded text-center"
                        >
                            Kembali
                        </a>
                    </div>
                    <div className="text-center mt-4">
                        <a href="/R1" className="text-blue-600 hover:underline">
                            Belum punya akun?
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default JalurZonasi;
