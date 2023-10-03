import Image from "next/image";
import React from "react";

interface BenefitsCardProps {
  title: string;
  icon: string;
  description: string;
}

const BenefitsCard = ({ title, icon, description }: BenefitsCardProps) => {
  return (
    <article className="flex w-full flex-col items-center justify-start gap-5 text-center md:h-64">
      <Image src={icon} alt="icon" height={50} width={50} />
      <h2 className="text-base-bold text-primary-blue-700 dark:text-primary-blue-300 sm:text-heading3">
        {title}
      </h2>
      <p className="text-small-regular text-primary-black-200 dark:text-white">
        {description}
      </p>
    </article>
  );
};

export default BenefitsCard;
