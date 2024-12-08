import Image from "next/image";
import { buttonVariants } from "./ui/button";
import Link from "next/link";

type CourseItemsOfferedProps = {
  id: number;
  title: string;
  type: string;
};

interface CourseCardProps {
  packageTitle: string;
  price: number;
  items: CourseItemsOfferedProps[];
  link: string;
}

const CourseCard = ({ packageTitle, price, items, link }: CourseCardProps) => {
  return (
    <article className="flex w-full flex-col items-center justify-start rounded-lg bg-primary-white-800 shadow-2xl dark:bg-primary-black-300">
      <div className="flex w-full items-center justify-center rounded-t-lg bg-primary-blue-700 py-5 dark:bg-primary-blue-300">
        <h1 className="text-xl font-bold text-white">{packageTitle}</h1>
      </div>
      <h2 className="pb-4 pt-7 text-4xl font-semibold text-primary-blue-700 dark:text-white">
        ${price}
      </h2>
      <div className="flex w-full py-5">
        <ul className="pl-3 sm:pl-8">
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
              <span className="text-sm sm:text-base">{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="my-5 flex h-full w-full items-end justify-center">
        <Link
          href={link}
          target="_blank"
          className={buttonVariants({
            variant: "default",
            size: "sm",
          })}
        >
          Access Course
        </Link>
      </div>
    </article>
  );
};

export default CourseCard;
