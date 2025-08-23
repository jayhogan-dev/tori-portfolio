import React from "react";
import DarkContainer from "./containers/Dark";
import SectionTitle from "./SectionTitle";
import HowItWorksList from "./HowItWorksList";

const items = [
  {
    title: "First, we get clear on you.",
    subtitle:
      "We'll start with a simple conversation about your life, your goals, and what's been holding you back. No judgment, no shame—just honesty about where you are right now.",
  },
  {
    title: "Then, I create your personalized roadmap.",
    subtitle:
      "Instead of cookie-cutter plans, I design a training and nutrition approach that matches your lifestyle. Busy schedule? Hormone changes? Former athlete who misses feeling strong? We'll take all of that into account.",
  },
  {
    title: "You get support + accountability every step of the way.",
    subtitle:
      "Most programs throw information at you and leave you on your own. I stay in your corner with coaching, check-ins, and adjustments so you're never guessing what to do next.",
  },
  {
    title: "The result: real, sustainable change.",
    subtitle:
      "You'll build strength, boost energy, and feel at home in your body again. This isn't about chasing quick fixes—it's about finally creating a way of eating, moving, and living that lasts.",
  },
];

const HowItWorks = () => {
  return (
    <DarkContainer>
      <section className="flex flex-col items-center justify-center py-12 md:py-[72px]">
        <SectionTitle title="How It Works" />
        <div className="flex flex-col">
          <p>
            Most women I work with come to me feeling stuck. They&apos;ve tried
            diets, random workouts, maybe even pushed themselves harder than
            ever—yet their body doesn&apos;t respond the way it used to.
          </p>
          <br />
          <p>Here&apos;s what happens when we work together:</p>
          <br />
          <HowItWorksList items={items} />
          <br />
          <div className="flex flex-col w-full items-center justify-center">
            <p>
              Because at the end of the day, you don&apos;t just want another
              plan.
            </p>
            <p>You want to feel confident, strong, and unstoppable again.</p>
          </div>
        </div>
      </section>
    </DarkContainer>
  );
};

export default HowItWorks;
