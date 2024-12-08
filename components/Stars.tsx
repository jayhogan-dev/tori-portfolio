import Image from "next/image";

interface StarsProps {
  starCount: number;
}

const Stars = ({ starCount }: StarsProps) => {
  return (
    <>
      {Array.from({ length: starCount }, (_, index) => (
        <Image
          key={index}
          src="/web-icons/filled-star.svg"
          alt="star"
          height={20}
          width={20}
        />
      ))}
    </>
  );
};

export default Stars;
