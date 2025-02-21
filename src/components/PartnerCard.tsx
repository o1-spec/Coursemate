import { Link } from "react-router-dom";

interface PartnerCardTypes {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
}

function PartnerCard({
  title,
  description,
  buttonText,
  imageSrc,
}: PartnerCardTypes) {
  return (
    <div className="flex items-center flex-col gap-2">
      <img src={imageSrc} alt={title} />
      <h6 className="font-bold pt-2 text-2xl lg:text-xl">{title}</h6>
      <span className="text-center leading-[20px] pb-1 px-10 lg:px-0">
        {description}
      </span>
      <Link
        to=""
        className="bg-[#1E1D61] text-white text-[18px] lg:text-[16px] font-semibold rounded-lg px-5 lg:px-2.5 py-2.5 lg:py-[1.5]"
      >
        {buttonText}
      </Link>
    </div>
  );
}

export default PartnerCard;
