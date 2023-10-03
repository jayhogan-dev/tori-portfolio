import { benefits } from "@/constants";
import BenefitsCard from "./BenefitsCard";
import SectionTitle from "./SectionTitle";
import DarkContainer from "./containers/Dark";

const Benefits = () => {
  return (
    <DarkContainer>
      <section className="flex flex-col items-center justify-center py-12 md:py-[72px]">
        <SectionTitle title="Benefits of Online Coaching" />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-10">
          {benefits.map((benefit) => (
            <div
              className="flex w-full flex-row items-center justify-center"
              key={benefit.title}
            >
              <BenefitsCard
                title={benefit.title}
                icon={benefit.icon}
                description={benefit.description}
              />
            </div>
          ))}
        </div>
      </section>
    </DarkContainer>
  );
};

export default Benefits;
