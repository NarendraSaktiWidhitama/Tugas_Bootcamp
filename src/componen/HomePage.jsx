import React from 'react'
import Logo from "../assets/Logo.png"
import background from "../assets/background.png"
import instagram from "../assets/instagram.png"

const HomePage = () => {
  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      <nav className="bg-yellow-100 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className='-ml-10'>
                <img className='w-16' src={Logo} alt="logo" />
            </div>
          <h1 className="text-3xl font-bold -ml-140">SMK BINA NUSANTARA</h1>
          <div className="space-x-6 hidden md:flex">
            <a href="#beranda" className="hover:text-yellow-500">beranda</a>
            <a href="#jadwal" className="hover:text-yellow-500">Jadwal</a>
            <a href="#jurusan" className="hover:text-yellow-500">Jurusan</a>
            <a href="#program" className="hover:text-yellow-500">Program</a>
          </div>
        </div>
      </nav>

      <div id='beranda' className="shadow py-24 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-300">Selamat Datang di PPDB</h2>
        <p className='text-2xl font-medium'>SMK Bina Nusantara Semarang merupakan sekolah yang berfokus pada pendidikan dan keterampilan praktis yang berkualitas</p>
        <div className='pt-10'>
          <div className='bg-gray-100'>
        <p className="text-lg md:text-xl mb-8 font-bold">Syarat pendaftaran sekolah</p>
          <p className='font-medium'>-mengisi formulir pendaftaran</p>
          <p className='font-medium -ml-3'>-foto copy 2 lembar kartu kk</p>
          <p className='font-medium -ml-9'>-Fotokopi Akta Kelahiran</p>
          <p className='font-medium -ml-9'>-Nilai rapor semester 1-5</p>
          <p className='font-medium -ml-9'>-Fotokopi KTP orang tua</p>
          <p className='font-medium -ml-10'>-Surat keterangan sehat</p>
          <p className='font-medium ml-20'>-Piagam prestasi (jika ikut jalur prestasi)</p>
          <p className='font-medium ml-30'>-Pakta integritas / surat pernyataan orang tua</p>
          </div>
          </div>
          <div className='pt-10'>
          <p className="text-lg md:text-xl mb-8 pt-8 font-bold">DAFTAR SMK BINA NUSANTARA SEKARANG JUGA</p>
        <a href="/Login" className="bg-yellow-200 px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition">
          Daftar Sekarang
        </a>
      </div>
      </div>

      <div id="jadwal" className="max-w-2xl mx-auto py-16 px-4">
        <div className='h-10 w-348 -ml-100'>
      <div className="bg-[url('./assets/background.png')] h-screen"></div>
      </div>
        <h3 className="text-3xl font-bold text-center mb-8">Jadwal PPDB</h3>
        <div className="bg-white rounded-lg shadow-md p-6">
          <ul className="space-y-4 text-lg text-center">
            <h5 className='font-bold'><strong>14 Juni:</strong> Pendaftaran online</h5>
            <h5 className='font-bold'><strong>5 Juli:</strong> Seleksi dan verifikasi</h5>
            <h5 className='font-bold'><strong>12 Juli:</strong> Pengumuman</h5>
            <h5 className='font-bold'><strong>17 Juli:</strong> Daftar ulang</h5>
          </ul>
        </div>
      </div>

      <div id="jurusan" className="bg-gray-100 py-15 px-4 pt-32">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">JURUSAN SMK BINA NUSANTARA</h3>
          <div className="grid md:grid-cols-2 gap-10">
            <Shadow title="TKJ" desc="Jurusan Teknik Komputer dan Jaringan (TKJ) merupakan salah satu kompetensi keahlian yang fokus pada penguasaan teknologi komputer dan jaringan. Jurusan ini dirancang untuk memberikan siswa keterampilan praktis dalam instalasi, konfigurasi, dan pemeliharaan perangkat keras serta perangkat lunak komputer, jaringan komputer, dan sistem komunikasi data. Selain itu siswa juga diberikan keterampilan programing full stack untuk peminatan programer dan juga diberikan keterampilan desain grafis serta editing video bagi peminatan Multimedia" />
            <Shadow title="TSM" desc="Jurusan Teknik Sepeda Motor (TSM) adalah kompetensi keahlian yang berfokus pada penguasaan teknologi otomotif, khususnya dalam bidang perawatan, perbaikan, dan pengelolaan sepeda motor. Program ini bertujuan untuk menghasilkan tenaga profesional yang terampil dan kompeten dalam industri otomotif, baik dari segi mekanik maupun elektronik sepeda motor." />
            <Shadow title="DPB" desc="Jurusan Desain dan Produksi Busana merupakan kompetensi keahlian yang mengajarkan keterampilan dalam mendesain, memproduksi, dan mengelola busana secara kreatif dan teknis. Program ini bertujuan untuk menghasilkan tenaga profesional yang kompeten di bidang fashion, mulai dari konsep desain hingga proses produksi pakaian siap pakai. Jurusan ini cocok bagi mereka yang memiliki minat dalam dunia mode dan industri tekstil." />
            <Shadow title="AKL" desc="Jurusan Akuntansi adalah kompetensi keahlian yang berfokus pada penguasaan keterampilan dan pengetahuan di bidang pencatatan, pengelolaan, dan pelaporan keuangan. Program ini mempersiapkan siswa untuk mampu mengelola keuangan secara akurat, menyusun laporan keuangan, serta memahami prinsip-prinsip perpajakan dan audit. Jurusan ini cocok bagi mereka yang tertarik dengan angka, analisis data, serta ingin berkarir di dunia bisnis dan keuangan.Kompetensi Utama" />
          </div>
        </div>
      </div>
      <div id="program" className="bg-yellow-100 py-15 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">PROGRAM SMK BINUSA</h3>
          <div className="w-150 ml-70 text-center">
            <Shadow2 Program="Bootcamp web development" Descripsi="Terdapat juga program Bootcamp Web Developer bagi siswa yang terpilih untuk mengikuti bootcamp dan memiliki keterampilan pemprograman web san peluang kerja sangat luas bisa kerja jadi penjualan website dan juga bisa jadi web developerment dari perusahaan" />
      </div>
      </div>
      </div>
      <div className="bg-white shadow mt-20 flex items-center grid grid-cols-3">
      <div className="container font-bold mx-auto px-4 flex items-center justify-between">
        <p className="py-4 ml-3 text-nowrap">
            &copy; Copiright by <span>SMK BINA NUSANTARA</span>
        </p>
      </div>
      <div className=''>
        <img className='w-12 ml-140' src={instagram} alt="instagram" />
      </div>
      <div className='ml-40'>
        <h3 className='text-2xl font-bold'>smkbinanusantara_smg</h3>
      </div>
    </div>
    </div>

  );
}

function Shadow({ title, desc }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:bg-yellow-200 transition">
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p>{desc}</p>
    </div>
  );
}

function Shadow2({ Program, Descripsi }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:bg-yellow-200 transition">
      <h4 className="text-xl font-bold mb-2">{Program}</h4>
      <p>{Descripsi}</p>
    </div>
  );
}

export default HomePage
