import Image from "next/image";
import React from "react";

const BenefitsCard = () => {
  return (
    <article className="flex flex-col">
      <Image src="/web-icons/users.svg" alt="icon" height={40} width={40} />
      <h2 className="text-base-bold text-primary-blue-700 dark:text-primary-blue-300 sm:text-heading3">
        One on One Support
      </h2>
      <p className="text-small-regular text-primary-black-200 dark:text-white">
        1-on-1 personal training offers tailored workouts, precise form
        correction, and focused attention. Maximize results, prevent injuries,
        and stay motivated with a dedicated fitness expert by your side!
        Experience customized guidance for accelerated progress.
      </p>
    </article>
  );
};

export default BenefitsCard;
