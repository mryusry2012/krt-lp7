import { useEffect } from "react";
import { Users, ShieldCheck, Handshake, Star, Globe2, Heart } from "lucide-react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const features = [
  {
    icon: Users,
    title: "Komuniti Bersatu",
    desc: "Mengeratkan hubungan dan semangat kejiranan melalui pelbagai aktiviti bersama komuniti."
  },
  {
    icon: ShieldCheck,
    title: "Fokus Keselamatan",
    desc: "Menitikberatkan keselamatan melalui rondaan sukarela dan kerjasama setempat secara berkala."
  },
  {
    icon: Handshake,
    title: "Jalinan Mesra",
    desc: "Mewujudkan hubungan akrab antara jiran dengan program sosial yang berterusan dan menyatukan."
  },
  {
    icon: Star,
    title: "Aktiviti Positif",
    desc: "Menganjurkan program yang membina nilai dan memberi manfaat kepada komuniti."
  },
  {
    icon: Globe2,
    title: "Hubungan Luas",
    desc: "Menjalin kerjasama luar untuk idea dan pengalaman terbaik demi kemajuan komuniti."
  },
  {
    icon: Heart,
    title: "Prihatin & Penyayang",
    desc: "Menerapkan nilai empati dan kepedulian dalam kehidupan bermasyarakat yang harmoni."
  }
];

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
      id="about"
      ref={ref}
      className="w-full bg-gradient-to-b from-[#f0f9ff] to-[#fdfdfd] text-gray-800 py-20 px-4 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-orange-100 text-orange-500 px-4 py-2 rounded-full text-sm font-semibold uppercase">
            Tentang Kami
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-black">
            Komuniti Harmoni & Proaktif
          </h2>
          <p className="mt-2 text-gray-600 text-lg">
            Kami membina kejiranan yang aktif, mesra dan bernilai murni melalui program sahsiah, kerjasama komuniti dan kesejahteraan bersama.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border-l-4 border-[#00C5FF] p-6 shadow-md h-full flex flex-col justify-between min-h-[250px] transition-colors duration-50 ease-in hover:bg-orange-500 group hover:shadow-lg"
              style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(40px)", transition: `all 0.6s ease ${index * 0.1}s` }}
            >
              <div className="flex flex-col flex-grow justify-between">
                <div>
                  <div
                    className="mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-orange-100 transition duration-75 ease-in group-hover:bg-white"
                  >
                    <item.icon
                      size={28}
                      className="transition duration-75 ease-in text-orange-500 group-hover:text-orange-500"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-black group-hover:text-white mb-2 transition duration-75 ease-in">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white text-base leading-relaxed transition duration-75 ease-in">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
