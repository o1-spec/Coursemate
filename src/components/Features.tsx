import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <div className="flex flex-col py-20 items-center md:px-20 px-3 gap-32">
      <FeatureCard
        label="Made for learners"
        title="An effective way to learn"
        description="Our goal at Coursemate is to improve how we learn online, acquire skills, and then use those skills in real-life work situations since most companies require a minimum amount of work experience in order to hire you."
        buttonText="Learn about us"
        bgColor="bg-[#1E1D61]"
      />
      <FeatureCard
        label="Real Industry"
        title="Prepare for your dream job"
        description="Our personalized learning guide helps you navigate your learning journey and choose your career path based on data about what works and the best way to learn."
        buttonText="Get Started"
        bgColor="bg-[#BB6BD9]"
      />
      <FeatureCard
        label="Simulate Workspace"
        title="Get hands-on experience"
        description="Get real on-the-job tasks and reviews after you complete them. In whatever area your performance is lacking, we provide ways for you to improve."
        buttonText="Get Started"
        bgColor="bg-[#9B51E0]"
      />
    </div>
  );
}

export default Features;
