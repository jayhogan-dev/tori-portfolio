import { trainingItems, nutritionItems, bothPackageItems } from "@/constants";
import PackageCard from "./PackageCard";
import SectionTitle from "./SectionTitle";
import LightContainer from "./containers/Light";

const Packages = () => {
  return (
    <LightContainer>
      <section className="flex flex-col items-center py-12 md:py-[72px]">
        <SectionTitle title="Packages" />
        <div className="grid w-full grid-cols-1 gap-5 border border-black p-5 sm:grid-cols-3 sm:gap-5 md:gap-10">
          <PackageCard
            packageTitle="Personalized Training"
            monthlyPrice={200}
            items={trainingItems}
          />
          <PackageCard
            packageTitle="Nutrition Coaching"
            monthlyPrice={200}
            items={nutritionItems}
          />
          <PackageCard
            packageTitle="Training + Nutrition"
            monthlyPrice={350}
            items={bothPackageItems}
          />
        </div>
      </section>
    </LightContainer>
  );
};

export default Packages;
