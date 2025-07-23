import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import { useInView } from "react-intersection-observer";
import { ShieldCheck } from "lucide-react";

const committeeStructure = {
  name: "Encik Ahmad Zulkifli",
  title: "Pengerusi",
  since: "2020",
  image: "/images/ajk/ahmad.jpg",
  children: [
    {
      name: "Puan Noraini Musa",
      title: "Naib Pengerusi",
      since: "2021",
      image: "/images/ajk/noraini.jpg",
      children: [
        {
          name: "Encik Hafiz Omar",
          title: "Bendahari",
          since: "2020",
          image: "/images/ajk/hafiz.jpg",
        },
        {
          name: "Puan Liyana Zahari",
          title: "AJK Kebajikan",
          since: "2023",
          image: "/images/ajk/liyana.jpg",
        }
      ]
    },
    {
      name: "Encik Farid Ismail",
      title: "Setiausaha",
      since: "2019",
      image: "/images/ajk/farid.jpg",
      children: [
        {
          name: "Encik Rosli Hamid",
          title: "AJK Keselamatan",
          since: "2021",
          image: "/images/ajk/rosli.jpg",
        },
        {
          name: "(Kosong)",
          title: "(Tiada Jawatan)",
          since: "-",
          image: "/images/ajk/placeholder.jpg",
        }
      ]
    }
  ]
};

const renderNode = (member) => (
  <TreeNode
    key={`${member.name}-${member.title}`}
    label={
      <div className="bg-white/90 rounded-2xl p-4 shadow-lg border-t-4 border-orange-500 w-[160px] sm:w-[180px] md:w-[220px] text-center hover:scale-105 hover:shadow-2xl transition-all duration-500 mx-auto">
        <img
          src={member.image}
          alt={member.name}
          className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border-4 border-orange-300 object-cover mx-auto mb-2 shadow-md"
        />
        <div className="text-xs sm:text-sm font-semibold text-gray-800 leading-tight group-hover:text-orange-600 transition-colors duration-300">{member.name}</div>
        <div className="text-[10px] sm:text-xs text-gray-500">Sejak {member.since}</div>
        <div className="mt-2 text-[10px] sm:text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full uppercase font-medium tracking-wide shadow-sm flex items-center justify-center gap-1">
          <ShieldCheck size={10} className="inline-block text-orange-500" /> {member.title}
        </div>
      </div>
    }
  >
    {member.children?.map((child) => renderNode(child))}
  </TreeNode>
);

export default function Committee() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <section
      id="committee-members"
      ref={ref}
      className="w-full bg-gradient-to-b from-[#f0f9ff] to-[#fdfdfd] text-gray-800 py-24 px-2 sm:px-4 md:px-12 overflow-x-hidden"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0px)" : "translateY(40px)",
        transition: "all 0.6s ease-out",
      }}
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <span className="inline-block bg-orange-100 text-orange-600 px-5 py-2 rounded-full text-sm font-bold uppercase tracking-widest shadow">
          Ahli Jawatankuasa
        </span>
        <h2 className="mt-5 text-3xl md:text-5xl font-extrabold text-black drop-shadow-sm">
          Carta Organisasi KRT LP7
        </h2>
        <p className="mt-3 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Struktur organisasi rasmi barisan kepimpinan komuniti.
        </p>
      </div>

      {isMobile ? (
        <div className="grid grid-cols-2 gap-6 justify-center">
          {[committeeStructure, ...committeeStructure.children].flatMap((node) => [node, ...(node.children || [])]).map((member) => (
            <div
              key={`${member.name}-${member.title}`}
              className="relative bg-white/90 rounded-2xl p-3 shadow-lg border-t-4 border-orange-500 w-full max-w-[130px] text-center mx-auto hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-12 h-12 rounded-full border-4 border-orange-300 object-cover mx-auto mb-2"
              />
              <div className="text-[10px] font-semibold text-gray-800 leading-tight group-hover:text-orange-600 transition-colors duration-300">{member.name}</div>
              <div className="text-[9px] text-gray-500">Sejak {member.since}</div>
              <div className="mt-2 text-[9px] bg-orange-100 text-orange-600 px-2 py-1 rounded-full uppercase font-medium tracking-wide flex items-center justify-center gap-1">
                <ShieldCheck size={10} className="inline-block text-orange-500" /> {member.title}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center overflow-x-hidden pb-16">
          <Tree
            lineWidth={'2px'}
            lineColor={'#ffa500'}
            lineBorderRadius={'10px'}
            label={<></>}
          >
            {renderNode(committeeStructure)}
          </Tree>
        </div>
      )}
    </section>
  );
}