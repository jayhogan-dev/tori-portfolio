import { ReactNode } from "react";

export default function LightContainer({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white px-6 dark:bg-primary-black-200 md:px-10 lg:px-20">
      <div className="w-full max-w-[1440px]">{children}</div>
    </div>
  );
}
