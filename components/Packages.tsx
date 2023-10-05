"use client";

import { trainingItems, nutritionItems, bothPackageItems } from "@/constants";
import PackageCard from "./PackageCard";
import SectionTitle from "./SectionTitle";
import LightContainer from "./containers/Light";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useState } from "react";

const Packages = () => {
  const [active, setActive] = useState("monthly");

  return (
    <LightContainer>
      <section className="flex flex-col items-center py-12 md:py-[72px]">
        <SectionTitle title="Packages" />
        <Tabs defaultValue="monthly" className="z-10 -mb-5">
          <TabsList className="w-[300px]">
            <TabsTrigger
              value="monthly"
              onClick={() => setActive("monthly")}
              className="w-[150px]"
            >
              Billed Monthly
            </TabsTrigger>
            <TabsTrigger
              value="annually"
              onClick={() => setActive("annually")}
              className="w-[150px]"
            >
              Billed Annually
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="grid w-full grid-cols-1 gap-5 rounded-xl bg-primary-white-800/40 px-5 py-14 dark:bg-primary-black-300/40 md:grid-cols-2 md:gap-10 md:p-14 lg:px-8 xl:grid-cols-3">
          <PackageCard
            packageTitle="Personalized Training"
            price={active === "monthly" ? 200 : 180}
            items={trainingItems}
          />
          <PackageCard
            packageTitle="Nutrition Coaching"
            price={active === "monthly" ? 200 : 180}
            items={nutritionItems}
          />
          <PackageCard
            packageTitle="Training + Nutrition"
            price={active === "monthly" ? 350 : 315}
            items={bothPackageItems}
          />
        </div>
      </section>
    </LightContainer>
  );
};

export default Packages;
