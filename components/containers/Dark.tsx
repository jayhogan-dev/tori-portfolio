import { ReactNode } from "react";

export default function DarkContainer({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center bg-primary-white-800 px-6 dark:bg-primary-black-300 md:px-10 lg:px-20">
      <div className="w-full max-w-[1440px]">{children}</div>
    </div>
  );
}
