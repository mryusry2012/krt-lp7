import { useEffect, useState, useRef } from "react";
import { Users, ShieldCheck, Handshake, HeartHandshake } from "lucide-react";

const Hero = () => {
  const slides = [
    {
      headline: "Selamat Datang ke Kawasan Rukun Tetangga LP7",
      subtext:
        "Kami mengalu-alukan kehadiran anda ke komuniti KRT LP7 yang harmoni, aktif dan saling menyokong antara satu sama lain. Sertai pelbagai aktiviti dan inisiatif bersama kejiranan.",
      image: "/assets/hero1.jpg",
      icon: <Users className="text-orange-500" size={32} />,
      direction: "left",
    },
    {
      headline: "Aktif, Mesra dan Selamat",
      subtext:
        "Pelbagai program gotong royong, sukan, kesihatan dan keselamatan dijalankan bagi mengeratkan hubungan antara penduduk serta mewujudkan persekitaran yang selamat dan mesra.",
      image: "/assets/hero2.jpg",
      icon: <ShieldCheck className="text-orange-500" size={32} />,
      direction: "right",
    },
    {
      headline: "Jiran Sepakat Membawa Berkat",
      subtext:
        "Kami percaya bahawa semangat kejiranan yang kuat dapat membina masyarakat yang lebih sejahtera, berwawasan dan penuh nilai murni untuk semua generasi.",
      image: "/assets/hero3.jpg",
      icon: <Handshake className="text-orange-500" size={32} />,
      direction: "left",
    },
    {
      headline: "Keselamatan & Keharmonian Keutamaan Kami",
      subtext:
        "KRT LP7 sentiasa komited untuk menjaga keselamatan kawasan kejiranan melalui rondaan sukarela dan komunikasi aktif antara komuniti dan pihak berkuasa tempatan.",
      image: "/assets/hero4.jpg",
      icon: <HeartHandshake className="text-orange-500" size={32} />,
      direction: "right",
    },
  ];

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "PageDown") {
        setIndex((prev) => (prev + 1) % slides.length);
        document.getElementById("hero").scrollIntoView({ behavior: "smooth" });
      } else if (e.key === "PageUp") {
        setIndex((prev) => (prev - 1 + slides.length) % slides.length);
        document.getElementById("hero").scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("keydown", handleKey);

    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 5000);
    }

    return () => {
      clearInterval(intervalRef.current);
      window.removeEventListener("keydown", handleKey);
    };
  }, [isPaused, slides.length]);

  const current = slides[index];

  return (
    <section
      id="hero"
      className="w-full h-[90vh] md:h-[80vh] bg-white flex flex-col justify-center items-center px-4 md:px-12 pt-[160px] md:pt-[100px] pb-16 overflow-hidden border-b shadow-md"
    >
      <style>{`
        @keyframes slideInLeft {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          0% { opacity: 0; transform: translateX(50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .text-anim-left { animation: slideInLeft 0.8s ease-in-out both; }
        .text-anim-right { animation: slideInRight 0.8s ease-in-out both; }
        .image-anim-left { animation: slideInRight 0.8s ease-in-out both; }
        .image-anim-right { animation: slideInLeft 0.8s ease-in-out both; }
      `}</style>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-10 flex-grow">
        {/* Text Section */}
        <div
          className={`flex flex-col justify-center items-start text-left ${current.direction === "left" ? "order-1 text-anim-left" : "order-2 text-anim-right"}`}
        >
          <div className="mb-4">
            <div className="inline-flex items-center gap-2 bg-orange-100 px-3 py-2 rounded-full">
              {current.icon}
              <span className="font-semibold text-orange-600 text-sm uppercase tracking-wide">
                KRT LP7
              </span>
            </div>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold text-black leading-tight">
            {current.headline}
          </h1>
          <p className="text-blue-800 md:text-lg mt-2 md:mt-4">
            {current.subtext}
          </p>
        </div>

        {/* Image Section */}
        <div className={`${current.direction === "left" ? "order-2 image-anim-left" : "order-1 image-anim-right"} flex justify-center`}>
          <img
            src={current.image}
            alt="Hero"
            loading="lazy"
            className="rounded-2xl w-full max-w-md md:max-w-full h-[300px] md:h-[450px] object-cover shadow-2xl"
          />
        </div>
      </div>

      {/* Dot Indicators */}
      <div
        className="mt-8 md:mt-10 flex justify-center gap-3"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === i ? "bg-orange-500 scale-110" : "bg-gray-300 hover:bg-orange-400"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
