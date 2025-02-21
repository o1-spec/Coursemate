import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed md:relative top-0 left-0 w-full bg-white z-50">
      <div className="flex items-center justify-between max-w-[1100px] mx-auto px-5 md:px-12 py-6">
        <h4 className="font-bold text-3xl xl:text-2xl">Coursemate</h4>
        <div className="md:flex items-center gap-10 hidden">
          <Link to="" className="md:text-[17px]">
            About us
          </Link>
          <Link to="" className="md:text-[17px]">
            Blog
          </Link>
        </div>
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <img src="navbar.svg" alt="" />
        </div>
      </div>
      {isOpen && (
        <div className="fixed md:hidden top-20 w-[90%] left-[16px] bg-white shadow-md flex flex-col items-center py-10 rounded-lg">
          <div
            className="absolute top-3 right-4 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-3xl font-bold">×</span>
          </div>

          <Link to="" className="py-2 text-xl" onClick={() => setIsOpen(false)}>
            About us
          </Link>
          <Link to="" className="py-2 text-xl" onClick={() => setIsOpen(false)}>
            Blog
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
