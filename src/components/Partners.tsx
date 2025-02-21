import PartnerCard from "./PartnerCard";

function Partners() {
  return (
    <div className="pb-20 pt-12 flex items-center justify-center flex-col">
      <h1 className="text-[#1E1D61] font-bold text-4xl pb-8 text-center">
        Join us now
      </h1>
      <div className="flex flex-col lg:flex-row gap-18 lg:gap-32 max-w-[800px] px-8">
        <PartnerCard
          title="Partner with us"
          description="Contribute tasks and resources, and participate in events."
          buttonText="Let's partner!"
          imageSrc="rectangle.svg"
        />
        <PartnerCard
          title="Teams Training"
          description="Enhance the skills of your workforce with custom training."
          buttonText="Get on board"
          imageSrc="rectangle.svg"
        />
      </div>
    </div>
  );
}

export default Partners;
