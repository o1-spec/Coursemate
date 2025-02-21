import { motion } from "framer-motion";

function Subjects() {
  return (
    <div className="flex items-center justify-center px-3 overflow-hidden w-full">
      <div className="flex flex-col gap-3 items-center justify-center pt-18 lg:pt-32 pb-10 max-w-[1000px] w-full">
        {/* First Moving Row (Left) */}
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex gap-9 items-center whitespace-nowrap w-max"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
          >
            {/* Duplicate content for smooth looping */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-9">
                <span className="text-[22px] font-bold">
                  Software Engineering
                </span>
                <span className="w-4 h-4 bg-[#C31212] rounded-full"></span>
                <span className="text-[22px] font-bold">Cyber Security</span>
                <span className="w-4 h-4 bg-[#2AC171] rounded-full"></span>
                <span className="text-[22px] font-bold">Accounting</span>
                <span className="w-4 h-4 bg-[#FFB646] rounded-full"></span>
                <span className="text-[22px] font-bold">Engineering</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second Moving Row (Right) */}
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex gap-9 items-center whitespace-nowrap w-max"
            animate={{ x: ["-100%", "0%"] }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          >
            {/* Duplicate content for smooth looping */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-9">
                <span className="text-[22px] font-bold">
                  Finance Management
                </span>
                <span className="w-4 h-4 bg-[#1E1D61] rounded-full"></span>
                <span className="text-[22px] font-bold">Product Design</span>
                <span className="w-4 h-4 bg-[#9B51E0] rounded-full"></span>
                <span className="text-[22px] font-bold">Human Resource</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Subjects;
