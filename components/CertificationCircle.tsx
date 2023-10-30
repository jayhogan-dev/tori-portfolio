import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface CertificationCircleProps {
  name: string;
  prefix: string;
}

const CertificationCircle = ({ name, prefix }: CertificationCircleProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-blue-300 dark:bg-primary-blue-700 md:h-24 md:w-24 xl:h-32 xl:w-32">
          <p className="text-sm font-bold text-white md:text-lg xl:text-xl">
            {prefix}
          </p>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-sm font-semibold md:text-base xl:text-lg">
            {name}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CertificationCircle;
