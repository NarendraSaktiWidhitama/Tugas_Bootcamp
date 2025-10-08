import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Sidnav from "../sidnav/Sidnav";

function Jalurzonasi() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:5000/jalurZonasi");
                setData(res.data);
            } catch (err) {
                console.error("gagal mengambil data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (id) => {
        const konfirmasi = window.confirm("yakin ingin menghapus data ini?");
        if (!konfirmasi) return;

        try {
            await axios.delete(`http://localhost:5000/jalurZonasi/${id}`);
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            });
            navigate("/zonasi");
            setData(data.filter((item) => item.id !== id));
        } catch (err) {
            console.error("Gagal menghapus data:", err);
            alert("Gagal menghapus data");
        }
    };

    return (
        <>
        <div className="pt-8">
          <Sidnav/>
        <div className="ml-70 bg-linear-to-r from-green-200 to-yellow-500 w-260 h-20 rounded-lg">
            <h1 className="text-3xl font-bold ml-10 pt-4">Jalur zonasi</h1>
            <div className="-m-8 ml-220">
            <button className="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none">
                                <a href="/Tambahdata1">+ Tambahdata</a>
                            </button>
                            </div>
        </div>
        </div>
            <table className="w-250 m-20 mx-75">
                <thead>
                    <tr className="bg-yellow-200 h-10">
                        <th className="text-2xl font-medium text-center">No</th>
                        <th className="text-2xl font-medium text-center">Nama</th>
                        <th className="text-2xl font-medium text-center">Email</th>
                        <th className="text-2xl font-medium text-center">Jurusan</th>
                        <th className="text-2xl font-medium text-center">Ubah data</th>
                    </tr>
                </thead>
                <tbody className="shadow">
                    {data.length > 0 ? (data.map((item, index) => (
                        <tr key={item.id}>
                            <td className="font-medium text-center">{index + 1}</td>
                            <td className="font-medium text-center">{item.nama}</td>
                            <td className="font-medium text-center">{item.email}</td>
                            <td className="font-medium text-center">{item.jurusan}</td>
                            <div className="grid grid-cols-2 gap-2">
                                <button
                                    onClick={() => navigate(`/Editdatasiswa1/${item.id}`)}
                                    className="bg-yellow-400 text-white px-3 py-1 rounded-lg hover:bg-yellow-500"
                                >
                                    edit
                                </button>
                                <button
                                    className="bg-red-700 text-white px-3 py-1 rounded-lg hover:bg-red-500"
                                    onClick={() => handleDelete(item.id)}
                                >
                                    Hapus
                                </button>
                                </div>
                        </tr>
                    ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center font-medium">
                                Tidak ada data
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
}
export default Jalurzonasi;
