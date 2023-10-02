const Hero = () => {
  return (
    <section className="flex h-[800px] w-full bg-[url('/hero.png')] bg-cover bg-center bg-no-repeat">
      <div className="flex h-[800px] w-full flex-col items-center md:flex-row md:justify-between">
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
