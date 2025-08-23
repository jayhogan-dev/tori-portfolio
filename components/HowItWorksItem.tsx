import { ArrowBigRight } from "lucide-react";
import React from "react";

const HowItWorksItem = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="flex items-start gap-3">
      <span className="inline-flex w-7 h-7 flex-shrink-0">
        <ArrowBigRight
          className="w-7 h-7 text-primary-blue-300"
          strokeWidth={2}
          aria-hidden="true"
          fill="currentColor"
        />
      </span>
      <div className="text-base leading-relaxed">
        <span className="font-semibold text-black dark:text-white">
          {title}
        </span>
        <span className="text-black dark:text-white ml-1">{subtitle}</span>
      </div>
    </div>
  );
};

export default HowItWorksItem;
