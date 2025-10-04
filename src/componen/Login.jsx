import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import background from "../assets/space.jpg"
import axios from 'axios';
import Swal from 'sweetalert2';


function Login() {
    const [formData, setFormData] = useState({
            makanan: "",
            paket: "",
            harga: "",
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
            const response = await axios.post("http://localhost:5000/menu", formData);

            console.log("Respon server:", response.data);
            Swal.fire({
                title: "Selamat yah!",
                icon: "berhasil",
                draggable: true
            });

            setFormData({
                nama: "",
                email: "",
                jurusan: "",
            });

            navigate("/Dashboard");
        } catch (error) {
            console.error("Error saat menambahkan data:", error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center">
            <div className="rounded-lg max-w-sm">
              <div className='h-10 w-348 -ml-130'>
            <div className="bg-[url('./assets/space.jpg')] h-screen"></div>
            </div>
            <div className='pt-24'>
            <div className='bg-white rounded-lg pt-4'>
                <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
                <form onSubmit={handleSubmit}>
                  <div>
                    <div className="mb-6 w-90 mx-auto">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Makanan">
                            Nama
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="Nama"
                            type="text"
                            name="Nama"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Masukan nama anda"
                            required
                        />
                    </div>
                    <div className="mb-6 w-90 mx-auto">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Minuman">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="Email"
                            type="Email"
                            name="Email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Masukan email anda"
                            required
                        />
                    </div>
                    <div className="mb-6 w-90 mx-auto">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="harga">
                            Jurusan
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="Jurusan"
                            type="Jurusan"
                            name="Jurusan"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="pilih"
                            required
                        />
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-6'>
                        <button
                            className="bg-sky-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-6"
                            type="submit"
                        >
                            Simpan
                        </button>
                            <button className="bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none mx-6">
                                <a href="/">kembali</a>
                            </button>
                            <div className='text2xl font-medium text-blue-600 ml-55 text-nowrap'>
                                <a href="/Register">belum punya akun?</a>
                            </div>
                        </div>
                </form>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Login;