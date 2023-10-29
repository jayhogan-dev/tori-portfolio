import Image from "next/image";
import SectionTitle from "./SectionTitle";
import DarkContainer from "./containers/Dark";
import Certifications from "./Certifications";

const About = () => {
  return (
    <DarkContainer>
      <section
        className="flex flex-col items-center py-12 md:py-[72px]"
        id="about"
      >
        <SectionTitle title="About Tori" />
        <div className="grid grid-cols-2 justify-between gap-10">
          <div className="relative hidden sm:flex sm:h-full sm:w-full">
            <Image
              src="/about-tori.png"
              alt="picture of Tori"
              fill
              className="rounded-3xl"
            />
          </div>
          <div>
            <p>
              Hi! I&apos;m Viktoria, originally from the beautiful country of
              Sweden. I moved to the U.S. in 2014 for college, where my love for
              soccer flourished. This journey further kindled my deep passion
              for health and fitness.
            </p>
            <br />
            <p>
              Since 2019, I&apos;ve been a proud ACE Certified Personal Trainer
              and further expanded my expertise in 2021 by becoming a Corrective
              Exercise Specialist with NASM. Responding to the ever-evolving
              fitness landscape, I founded &quot;Tori Training&quot; in 2023. My
              goal? To guide individuals worldwide towards realizing their
              fitness aspirations.
            </p>
            <br />
            <p>
              Throughout my professional journey, I&apos;ve discerned a common
              theme: many are often perplexed about their exercise routines—what
              to do, when to do it, and the proper techniques. It&apos;s
              precisely this challenge that my online platform addresses.
              Whether you&apos;re working out at a gym or in the comfort of your
              home, each of my programs equips you with detailed video
              instructions, textual guidelines, and a unique option to record
              and submit your exercise for form verification. I&apos;m a firm
              believer that online training should resonate with the quality of
              in-person sessions.
            </p>
            <br />
            <p>
              But, fitness isn&apos;t just about exercise — it&apos;s a holistic
              approach. Coupled with workout routines, the right nutrition is
              paramount. As a certified nutritionist in partnership with
              Precision Nutrition, I emphasize a comprehensive coaching
              approach. I&apos;ve incorporated essential habits and regular
              personal check-ins to ensure my clients stay on course and
              maintain their well-being.
            </p>
            <br />
            <p>
              At the heart of it all, my mission remains unwavering: to empower
              individuals at any fitness stage to transform into their best
              selves. With dedication, expertise, and continuous support,
              I&apos;m here to guide you every step of the way towards your
              ultimate fitness destination.
            </p>
          </div>
        </div>
        <Certifications />
      </section>
    </DarkContainer>
  );
};

export default About;
