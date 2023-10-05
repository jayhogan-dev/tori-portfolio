import Image from "next/image";

type PackageItemsOfferedProps = {
  title: string;
};

interface PackageCardProps {
  packageTitle: string;
  name: string;
  items: PackageItemsOfferedProps[];
}

const PackageCard = ({ packageTitle, name, items }: PackageCardProps) => {
  const itemList =
    items.find((item) => item[name.toLowerCase()])?.[name.toLowerCase()] || [];

  return (
    <article className="flex w-full flex-col items-center justify-center rounded-lg bg-primary-white-800 dark:bg-primary-black-300">
      <div className="flex w-full items-center justify-center rounded-t-lg bg-primary-blue-700 py-5 dark:bg-primary-blue-300">
        <h1 className="text-xl font-bold text-white">{packageTitle}</h1>
      </div>
      <div className="flex w-full py-5">
        <ul className="pl-8">
          {itemList.map((item) => (
            <li className="flex gap-3" key={item.title}>
              <Image
                src={
                  item.type === "training"
                    ? "/web-icons/dumbbell.svg"
                    : "/web-icons/scale.svg"
                }
                alt={item.type === "training" ? "Dumbbell" : "Scale"}
                height={20}
                width={20}
              />
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default PackageCard;
