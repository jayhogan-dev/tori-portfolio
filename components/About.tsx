import Image from "next/image";
import SectionTitle from "./SectionTitle";
import Certifications from "./Certifications";
import LightContainer from "./containers/Light";

const About = () => {
  return (
    <LightContainer>
      <section
        className="flex flex-col items-center py-12 md:py-[72px]"
        id="about"
      >
        <SectionTitle title="About Tori" />
        <div className="flex flex-col items-center justify-between gap-10 xl:grid xl:grid-cols-2">
          <div className="relative flex h-[600px] w-full sm:w-2/3 md:w-1/2 xl:w-full">
            <Image
              src="/about-tori.jpg"
              alt="picture of Tori"
              fill
              className="rounded-3xl"
            />
          </div>
          <div className="flex flex-col">
            <p>
              Hi! I&apos;m Viktoria, but most people just call me Tori. I&apos;m
              originally from Sweden and moved to the U.S. in 2014 for college,
              where my passion for soccer and fitness really took off.
            </p>
            <br />
            <p>
              I became an ACE Certified Personal Trainer in 2019, and in 2021, I
              earned my Corrective Exercise Specialist certification through
              NASM. In 2024, I started Tori Training to help people worldwide
              find confidence in their fitness journey.
            </p>
            <br />
            <p>
              One of the biggest struggles I&apos;ve seen is people not knowing
              where to start with exercise—what to do, when to do it, or how to
              do it safely. That&apos;s why I created online programs that offer
              more than just workouts. You&apos;ll get video demonstrations,
              step-by-step instructions, and even the option to send me your
              form for feedback. My goal is to make online training as personal
              and effective as in-person coaching.
            </p>
            <br />
            <p>
              Fitness isn&apos;t just about workouts, though. Nutrition plays a
              huge role, which is why I also became certified through Precision
              Nutrition. My coaching focuses on creating lasting habits and
              providing ongoing support through check-ins to keep you on track.
            </p>
            <br />
            <p>
              At the core of everything I do is this: I want to help you, no
              matter where you&apos;re starting from, feel strong, confident,
              and capable. Together, we&apos;ll work toward your goals and build
              the best version of you.
            </p>
          </div>
        </div>
        <Certifications />
      </section>
    </LightContainer>
  );
};

export default About;
