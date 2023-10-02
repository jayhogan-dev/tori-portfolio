import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex w-full h-[800px] bg-[url('/hero.png')] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col md:flex-row md:justify-between items-center h-[800px] w-full">
        <div className="bg-red-300">
          <h1>Home</h1>
        </div>
        <div className="bg-blue-300">
          <h1>Right Side</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
