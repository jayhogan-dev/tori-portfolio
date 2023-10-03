import BenefitsCard from "./BenefitsCard";
import SectionTitle from "./SectionTitle";
import DarkContainer from "./containers/Dark";

const Benefits = () => {
  return (
    <DarkContainer>
      <section className="flex flex-col items-center justify-center py-12 md:py-[72px]">
        <SectionTitle title="Benefits of Online Coaching" />
        <BenefitsCard />
      </section>
    </DarkContainer>
  );
};

export default Benefits;
