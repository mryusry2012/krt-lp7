import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1542551759-4e8b4a5b6b79",
    title: "Program Gotong-Royong Perdana"
  },
  {
    src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
    title: "Aktiviti Mesra Komuniti"
  },
  {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    title: "Rondaan Sukarelawan"
  },
  {
    src: "https://images.unsplash.com/photo-1567568325273-03b8cfb3b8f7",
    title: "Sambutan Hari Kemerdekaan"
  },
  {
    src: "https://images.unsplash.com/photo-1620403978164-fc4ee6d3edb4",
    title: "Majlis Berbuka Puasa"
  },
  {
    src: "https://images.unsplash.com/photo-1581091215367-5c0d50e3f9f4",
    title: "Perjumpaan Bulanan AJK"
  },
  {
    src: "https://images.unsplash.com/photo-1611095564986-2f0c2c09fc52",
    title: "Aktiviti Derma Darah"
  },
  {
    src: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
    title: "Program Kesedaran Kesihatan"
  },
  {
    src: "https://images.unsplash.com/photo-1575936123452-b67c3203c357",
    title: "Sukaneka KRT LP7"
  },
  {
    src: "https://images.unsplash.com/photo-1581092334649-cd679beddc99",
    title: "Bengkel Kecemasan Komuniti"
  },
  {
    src: "https://images.unsplash.com/photo-1611174991110-e2f3f74e0e92",
    title: "Pameran Komuniti"
  },
  {
    src: "https://images.unsplash.com/photo-1509817316-418d0d21a8a8",
    title: "Kelas Pendidikan Digital"
  }
];

export default function GallerySection() {
  const [modalImage, setModalImage] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="gallery"
      ref={ref}
      className="w-full bg-gradient-to-b from-[#f0f9ff] to-[#fdfdfd] text-gray-800 py-24 px-4 md:px-12"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0px)" : "translateY(40px)",
        transition: "all 0.6s ease-out"
      }}
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <span className="inline-block bg-orange-100 text-orange-600 px-5 py-2 rounded-full text-sm font-bold uppercase tracking-widest shadow">
          Galeri Komuniti
        </span>
        <h2 className="mt-5 text-3xl md:text-5xl font-extrabold text-black drop-shadow-sm">
          Galeri Gambar KRT LP7
        </h2>
        <p className="mt-3 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Rakaman memori aktiviti dan penglibatan komuniti dalam pelbagai program yang dianjurkan.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {IMAGES.map((img, i) => (
          <div
            key={i}
            className="relative cursor-pointer group overflow-hidden rounded-xl shadow hover:shadow-xl transition duration-300 bg-white"
            onClick={() => setModalImage(img)}
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-48 sm:h-52 object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="absolute bottom-0 bg-black/60 w-full text-white text-sm text-center py-2 font-medium">
              {img.title}
            </div>
          </div>
        ))}
      </div>

      {modalImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setModalImage(null)}
        >
          <div className="relative w-full max-w-4xl">
            <img
              src={modalImage.src}
              alt={modalImage.title}
              className="mx-auto max-h-[80vh] object-contain rounded-xl shadow-lg"
            />
            <p className="text-white text-center mt-4 text-lg font-semibold">
              {modalImage.title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
