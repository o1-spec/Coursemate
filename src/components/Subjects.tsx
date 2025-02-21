import { motion } from "framer-motion";

function Subjects() {
  const rowOne = [
    { name: "Software Engineering", color: "#C31212" },
    { name: "Cyber Security", color: "#2AC171" },
    { name: "Accounting", color: "#FFB646" },
    { name: "Engineering", color: "#1E1D61" },
  ];

  const rowTwo = [
    { name: "Finance Management", color: "#9B51E0" },
    { name: "Product Design", color: "#C31212" },
    { name: "Human Resource", color: "#2AC171" },
  ];

  return (
    <div className="flex flex-col gap-4 items-center justify-center pt-10 overflow-hidden max-w-[1000px] mx-auto bg-white py-5">
      <div className="w-full overflow-hidden relative">
        <motion.div
          className="flex items-center whitespace-nowrap w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {[...rowOne, ...rowOne].map((subject, index) => (
            <div key={index} className="flex items-center">
              <span className="text-[22px] font-bold px-5">{subject.name}</span>
              <span
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: subject.color }}
              ></span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="w-full overflow-hidden relative">
        <motion.div
          className="flex items-center whitespace-nowrap w-max"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {[...rowTwo, ...rowTwo].map((subject, index) => (
            <div key={index} className="flex items-center">
              <span className="text-[22px] font-bold px-5">{subject.name}</span>
              <span
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: subject.color }}
              ></span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Subjects;
