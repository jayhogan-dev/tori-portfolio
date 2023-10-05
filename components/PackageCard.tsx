import Image from "next/image";
import { Button } from "./ui/button";

type PackageItemsOfferedProps = {
  id: number;
  title: string;
  type: string;
};

interface PackageCardProps {
  packageTitle: string;
  monthlyPrice: number;
  items: PackageItemsOfferedProps[];
}

const PackageCard = ({
  packageTitle,
  monthlyPrice,
  items,
}: PackageCardProps) => {
  return (
    <article className="flex w-full flex-col items-center justify-start rounded-lg bg-primary-white-800 dark:bg-primary-black-300">
      <div className="flex w-full items-center justify-center rounded-t-lg bg-primary-blue-700 py-5 dark:bg-primary-blue-300">
        <h1 className="text-xl font-bold text-white">{packageTitle}</h1>
      </div>
      <h2 className="pt-5 text-3xl font-semibold text-primary-blue-700 dark:text-primary-blue-300">
        ${monthlyPrice}
        <span className="text-lg">/month</span>
      </h2>
      <div className="flex w-full py-5">
        <ul className="pl-8">
          {items.map((item) => (
            <li className="mb-3 flex gap-3" key={item.id}>
              <Image
                src={
                  item.type === "training"
                    ? "/web-icons/dumbbell.svg"
                    : item.type === "nutrition"
                    ? "/web-icons/shopping-cart.svg"
                    : "/web-icons/scale.svg"
                }
                alt="Fitness Icon"
                height={20}
                width={20}
              />
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="my-5 flex h-full w-full items-end justify-center">
        <Button variant="default">Get Started</Button>
      </div>
    </article>
  );
};

export default PackageCard;
