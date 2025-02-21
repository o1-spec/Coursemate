import { Link } from "react-router-dom";

type FeatureCardTypes = {
  title: string;
  description: string;
  label: string;
  buttonText: string;
  bgColor: string;
};

function FeatureCard({
  title,
  description,
  label,
  buttonText,
  bgColor,
}: FeatureCardTypes) {
  return (
    <div
      className={`px-4 py-16 pb-12 rounded-4xl text-white flex justify-center lg:w-[1000px] md:w-[800px] ${bgColor}`}
    >
      <div className="flex flex-col items-center gap-6 max-w-[600px] text-center">
        <span className="text-[13px] rounded-lg border-[0.2px] border-[#F8F7FD] py-1.5 px-2">
          {label}
        </span>
        <h6 className="font-bold text-4xl px-5 lg:px-10">{title}</h6>
        <p className="text-center text-[15px] md:text-[16px] px-4">
          {description}
        </p>
        <Link
          to=""
          className="bg-white rounded-lg text-[#1E1D61] font-semibold text-[14px] py-1.5 px-3.5"
        >
          {buttonText}
        </Link>
        <div className="px-6">
          <img
            className="w-[400px]"
            src="image_border.svg"
            alt="feature representation"
          />
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
