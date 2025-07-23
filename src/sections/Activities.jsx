import { useEffect, useState } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CalendarDays, X } from "lucide-react";

const activities = [
  {
    title: "Sambutan Hari Raya bersama YB Puan Yeo Bee Yin",
    desc: "Majlis meriah yang diadakan di kawasan KRT LP7 bersama kehadiran tetamu kehormat YB Puan Yeo Bee Yin.",
    image: "/assets/aktiviti1.jpg",
    date: "10 April 2024",
    full: "Majlis Hari Raya ini mengeratkan hubungan komuniti serta memberi peluang kepada penduduk untuk berinteraksi terus dengan wakil rakyat. Pelbagai juadah disediakan serta persembahan menarik diadakan."
  },
  {
    title: "Penerimaan Sumbangan Peralatan",
    desc: "KRT LP7 menerima sumbangan khemah, kerusi dan meja daripada YB Puan Yeo Bee Yin sebagai sokongan komuniti.",
    image: "/assets/aktiviti2.jpg",
    date: "2 Mei 2024",
    full: "Peralatan ini akan digunakan untuk menjayakan pelbagai program komuniti. Terima kasih atas sokongan berterusan daripada YB."
  },
  {
    title: "Program Jualan Rahmah",
    desc: "Program jualan dengan harga rendah bertempat di Lestari Perdana 7, memudahkan penduduk mendapatkan barangan keperluan.",
    image: "/assets/aktiviti3.jpg",
    date: "15 Mei 2024",
    full: "Program ini membantu mengurangkan kos sara hidup penduduk dengan menawarkan barangan keperluan pada harga yang mampu milik."
  },
  {
    title: "Baucar Jom Shopping Aidilfitri",
    desc: "Agihan baucar khas oleh YB Tuan Abbas Azmi kepada komuniti untuk persiapan menyambut hari raya.",
    image: "/assets/aktiviti4.jpg",
    date: "20 Mei 2024",
    full: "Baucar ini dapat membantu keluarga berpendapatan rendah membuat persiapan Aidilfitri dengan lebih selesa."
  },
  {
    title: "Mesyuarat Bulanan AJK",
    desc: "Perbincangan hala tuju dan pelaksanaan aktiviti komuniti dijalankan secara berkala oleh Jawatankuasa.",
    image: "/assets/aktiviti5.jpg",
    date: "1 Jun 2024",
    full: "Mesyuarat ini membincangkan pelaksanaan program akan datang dan penambahbaikan pengurusan komuniti."
  }
];

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "PageDown" || e.key === "PageUp") {
        document.getElementById("about").scrollIntoView({ behavior: "smooth" });
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section
      id="activities"
      ref={ref}
      className="w-full bg-gradient-to-b from-[#f0f9ff] to-[#fdfdfd] text-gray-800 py-20 px-4 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-orange-100 text-orange-500 px-4 py-2 rounded-full text-sm font-semibold uppercase">
            Aktiviti
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-black">
            Sorotan Program & Komuniti
          </h2>
          <p className="mt-2 text-gray-600 text-lg">
            Pelbagai program menarik yang telah dilaksanakan demi kesejahteraan penduduk setempat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden transition duration-300 hover:shadow-lg hover:border-[2px] hover:border-orange-500 hover:border-opacity-70"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(40px)",
                transition: `all 0.6s ease ${index * 0.1}s`
              }}
            >
              <img
                src={activity.image}
                alt={activity.title}
                loading="lazy"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-black mb-1 line-clamp-2">
                  {activity.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <CalendarDays size={16} className="text-orange-500" />
                  <span>{activity.date}</span>
                </div>
                <button
                  onClick={() => setActiveModal(activity)}
                  className="text-sm px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
                >
                  Klik Sini
                </button>
              </div>
            </div>
          ))}
        </div>

        {activeModal && (
          <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center px-4">
            <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 relative animate-fadeIn">
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
              >
                <X size={24} />
              </button>
              <img
                src={activeModal.image}
                alt={activeModal.title}
                className="w-full h-64 object-cover rounded mb-4"
              />
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                <CalendarDays size={18} className="text-orange-500" />
                <span>{activeModal.date}</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">{activeModal.title}</h3>
              <p className="text-gray-700 text-base leading-relaxed">{activeModal.full}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
