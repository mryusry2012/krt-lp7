import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-3">KRT LP7</h3>
          <p className="text-sm text-gray-400">
            Komuniti Rukun Tetangga LP7, membina keharmonian kejiranan melalui pelbagai aktiviti, kerjasama dan sokongan sesama komuniti.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-3">Navigasi</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#hero" className="hover:text-orange-400">Utama</a></li>
            <li><a href="#about" className="hover:text-orange-400">Tentang</a></li>
            <li><a href="#activities" className="hover:text-orange-400">Aktiviti</a></li>
            <li><a href="#committee-members" className="hover:text-orange-400">AJK</a></li>
            <li><a href="#gallery" className="hover:text-orange-400">Galeri</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-3">Hubungi Kami</h4>
          <p className="text-sm text-gray-300">
            Email: info@krtlp7.my<br />
            Tel: +6012-3456789<br />
            Alamat: Jalan LP7, Bandar Putra, Malaysia
          </p>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} KRT LP7. Semua Hak Cipta Terpelihara & Web Ini Dibuat Oleh Yusri Yusof.
      </div>
    </footer>
  );
}
