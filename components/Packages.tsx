import PackageCard from "./PackageCard";
import SectionTitle from "./SectionTitle";

import LightContainer from "./containers/Light";

const plans = [
  {
    title: "Month-to-Month",
    pricePerMonth: 275,
    tagline: "Stay consistent without long-term lock-in",
    taglineIcon: "🌀",
    bullets: [
      "Total flexibility",
      "Keep building on the habits you’ve started",
      "Adjust as life changes — coaching on your terms",
      "Great for women who want accountability but prefer short commitments",
    ],
    ctaHref:
      "https://calendar.google.com/appointments/schedules/AcZssZ2mP5sjzW3zLi07wecXPzm0MLpmwFYNN5bmQxqf5nZB_w7S8yeMRluupSEIsLvLWqZKuGIfPePJ",
  },
  {
    title: "3 Months",
    pricePerMonth: 250,
    paidInFullNote: "Paid in full at $750",
    tagline: "Kickstart transformation and build habits",
    taglineIcon: "💪",
    bullets: [
      "Learn the foundations of sustainable nutrition & training",
      "Start feeling stronger and more energized",
      "Build consistency and confidence in the gym & kitchen",
      "Perfect if you are ready to commit and see real change",
    ],
    recommended: true,
    ctaHref:
      "https://calendar.google.com/appointments/schedules/AcZssZ2mP5sjzW3zLi07wecXPzm0MLpmwFYNN5bmQxqf5nZB_w7S8yeMRluupSEIsLvLWqZKuGIfPePJ",
  },
  {
    title: "6 Months",
    pricePerMonth: 235,
    paidInFullNote: "Paid in full at $1,400",
    tagline: "Go deeper and lock in results",
    taglineIcon: "🪴",
    bullets: [
      "Double your progress with steady, structured coaching",
      "More time to master nutrition habits and mindset shifts",
      "See visible changes in strength, energy, and body composition",
      "Accountability for the long haul, not just a quick fix",
    ],
    ctaHref:
      "https://calendar.google.com/appointments/schedules/AcZssZ2mP5sjzW3zLi07wecXPzm0MLpmwFYNN5bmQxqf5nZB_w7S8yeMRluupSEIsLvLWqZKuGIfPePJ",
  },
  {
    title: "12 Months",
    pricePerMonth: 225,
    paidInFullNote: "Paid in full at $2,700",
    tagline: "The ultimate transformation journey",
    taglineIcon: "🌟",
    bullets: [
      "Reset your health and mindset",
      "Maximize fat loss while building lasting muscle & strength",
      "Maintain results long-term",
      "Lifelong habits, confidence, and freedom with food & fitness",
    ],
    ctaHref:
      "https://calendar.google.com/appointments/schedules/AcZssZ2mP5sjzW3zLi07wecXPzm0MLpmwFYNN5bmQxqf5nZB_w7S8yeMRluupSEIsLvLWqZKuGIfPePJ",
  },
];

const Packages = () => {
  return (
    <LightContainer>
      <section
        className="flex flex-col items-center py-12 md:py-[72px]"
        id="packages"
      >
        <SectionTitle title="Packages" />
        <div className="mx-auto grid grid-cols-1 gap-6 px-6 py-10 sm:grid-cols-2 xl:grid-cols-4">
          {plans.map((p) => (
            <PackageCard key={p.title} {...p} />
          ))}
        </div>
      </section>
    </LightContainer>
  );
};

export default Packages;
