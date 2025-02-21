import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="py-16 px-2 pt-36 md:pt-16 flex items-center justify-center">
      <div className="flex flex-col gap-3 items-center max-w-[700px]">
        <h2 className="text-[#1E1D61] text-[50px] leading-[58px] font-bold text-center">
          Let’s prepare you for your dream job
        </h2>
        <p className="text-center pt-1 text-[#1E1D61] text-[18px] px-4 lg:px-0 lg:text-[16px]">
          Enhance your expertise and your career development by learning,
          practicing, improving, and mastering skills that you'll need on the
          job with real-life tasks.
        </p>
        <div className="flex items-center gap-6 lg:gap-4 pt-3 lg:pt-0">
          <Link
            to="#"
            className="bg-[#1E1D61] rounded-lg px-3 py-3 text-[#fff] text-[16px] font-semibold lg:text-[14px]"
          >
            Join the Waitlist
          </Link>
          <Link
            to="#"
            className="border border-[#1E1D61] rounded-lg px-3 py-2.5 text-[16px] font-semibold lg:text-[14px]"
          >
            For Teams
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
