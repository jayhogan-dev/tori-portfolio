import { packageItems } from "@/constants";
import PackageCard from "./PackageCard";
import SectionTitle from "./SectionTitle";
import LightContainer from "./containers/Light";

const Packages = () => {
  const combinedItems = [
    ...(packageItems.find((item) => item.training)?.training || []),
    ...(packageItems.find((item) => item.nutrition)?.nutrition || []),
  ];
  return (
    <LightContainer>
      <section className="flex flex-col items-center justify-center py-12 md:py-[72px]">
        <SectionTitle title="Packages" />
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-5 md:gap-10">
          <PackageCard
            packageTitle="Personalized Training"
            name="training"
            items={packageItems}
          />
          <PackageCard
            packageTitle="Nutrition Coaching"
            name="nutrition"
            items={packageItems}
          />
          <PackageCard
            packageTitle="Training + Nutrition"
            name="training"
            items={combinedItems}
          />
        </div>
      </section>
    </LightContainer>
  );
};

export default Packages;
