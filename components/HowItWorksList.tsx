import React from "react";
import HowItWorksItem from "./HowItWorksItem";

const HowItWorksList = ({
  className,
  items,
  children,
}: {
  className?: string;
  items?: { title: string; subtitle: string }[];
  children?: React.ReactNode;
}) => {
  return (
    <div className={`space-y-4 ${className}`}>
      {items?.length
        ? items.map((it, idx) => (
            <HowItWorksItem key={idx} title={it.title} subtitle={it.subtitle} />
          ))
        : children}
    </div>
  );
};

export default HowItWorksList;
