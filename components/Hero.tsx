import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex h-[550px] w-full items-center justify-center bg-[url('/hero.png')] bg-cover bg-center bg-no-repeat lg:h-[800px]">
      <div className="flex h-[550px] w-full max-w-[1440px] flex-col items-center justify-between px-6 py-10 md:px-14 lg:h-[800px] lg:flex-row lg:px-20">
        <div className="flex w-full flex-col gap-2 sm:gap-5 lg:gap-10 ">
          <h1 className="text-heading1 text-white sm:text-7xl md:text-8xl md:font-extrabold lg:text-9xl">
            Tori Training
          </h1>
          <h2 className="w-full text-base-bold text-white sm:text-heading3 md:w-[600px]">
            Unleash Your Potential with Expert Online Coaching
          </h2>
          <div className="mt-3 w-full md:mt-1 md:w-2/3 xl:mt-0 xl:w-1/3">
            <Link
              href="https://calendly.com/toritraining/consultation"
              className="rounded-lg bg-primary-blue-300 p-2 text-center text-sm font-semibold text-white hover:bg-primary-blue-300/90 dark:bg-primary-blue-700 dark:hover:bg-primary-blue-700/90 sm:p-5 sm:text-lg"
              target="_blank"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
        <div className="flex w-full flex-row gap-2 rounded-3xl bg-white p-5 dark:bg-primary-black-200 lg:w-64 lg:min-w-[256px] lg:flex-col lg:gap-10">
          <div className="flex w-full flex-col items-center justify-start gap-2">
            <p className="text-base-bold text-primary-blue-700 dark:text-primary-blue-300 sm:text-heading3">
              50+
            </p>
            <p className="text-center text-small-bold sm:text-paragraph-regular">
              Clients Coached
            </p>
          </div>
          <div className="flex w-full flex-col items-center justify-start gap-2">
            <p className="text-base-bold text-primary-blue-700 dark:text-primary-blue-300 sm:text-heading3">
              10+
            </p>
            <p className="text-center text-small-bold sm:text-paragraph-regular">
              Certifications
            </p>
          </div>
          <div className="flex w-full flex-col items-center justify-start gap-2">
            <p className="text-base-bold text-primary-blue-700 dark:text-primary-blue-300 sm:text-heading3">
              3+
            </p>
            <p className="text-center text-small-bold sm:text-paragraph-regular">
              Years of Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
