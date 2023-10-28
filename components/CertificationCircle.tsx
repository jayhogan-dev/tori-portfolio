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
        <TooltipTrigger className="flex h-32 w-32 items-center justify-center rounded-full bg-primary-blue-300 dark:bg-primary-blue-700">
          <p className="text-xl font-bold text-white">{prefix}</p>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-base font-semibold">{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CertificationCircle;
