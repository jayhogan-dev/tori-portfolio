import Image from "next/image";
import { MouseEventHandler } from "react";
import { Button } from "./ui/button";

interface IconButtonProps {
  iconUrl: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

const IconButton = ({ iconUrl, handleClick }: IconButtonProps) => {
  return (
    <Button
      size="icon"
      className="rounded-full bg-white p-3 hover:bg-white/60 dark:bg-primary-white-800 dark:hover:bg-primary-white-800/75"
      onClick={handleClick}
    >
      <Image src={iconUrl} alt="right arrow" height={20} width={20} />
    </Button>
  );
};

export default IconButton;
