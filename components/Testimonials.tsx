"use client";

import DarkContainer from "./containers/Dark";
import SectionTitle from "./SectionTitle";

import { useState } from "react";
import { Testimonial } from "@/types";
import TestimonialCard from "./TestimonialCard";
import IconButton from "./IconButton";

const Testimonials = ({ testimonials }: { testimonials: Testimonial[] }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const handlePrev = () => {
    setActiveTestimonial((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : testimonials.length - 1,
    );
  };

  const handleNext = () => {
    setActiveTestimonial((prevIndex) =>
      prevIndex < testimonials.length - 1 ? prevIndex + 1 : 0,
    );
  };

  return (
    <DarkContainer>
      <section className="flex flex-col items-center justify-center py-12 md:py-[72px]">
        <div className="w-72 sm:w-full">
          <SectionTitle title="What they say about me" />
        </div>
        <div className="relative -right-[52px] -top-24 h-4 w-[150px] bg-gradient-to-r from-cyan-400 to-yellow-300 dark:from-cyan-800 dark:via-cyan-400 dark:to-yellow-300 sm:-left-10 sm:-right-0 sm:-top-14 lg:-left-[50px] lg:-top-[56px] lg:w-[200px]" />
        {/* Testimonials */}
        <article className="flex flex-col gap-5 md:w-full md:flex-row">
          <div className="flex items-start justify-between gap-5 md:items-center md:justify-center">
            <div className="hidden md:flex">
              <IconButton
                handleClick={handlePrev}
                iconUrl="/web-icons/carousel-left-arrow.svg"
              />
            </div>
            <div className="bg-primary-blue-light dark:bg-primary-blue-dark flex h-48 w-48 items-center justify-center rounded-xl">
              <h1 className="text-[100px] font-black text-white">
                {testimonials[activeTestimonial].name[0]}
              </h1>
            </div>
            {/* Arrows controlled by state */}
            <div className="flex items-center gap-3 md:hidden">
              {/* Left circle */}
              <IconButton
                handleClick={handlePrev}
                iconUrl="/web-icons/carousel-left-arrow.svg"
              />
              <IconButton
                handleClick={handleNext}
                iconUrl="/web-icons/carousel-right-arrow.svg"
              />
            </div>
          </div>
          <div className="md:ml-5 md:flex md:w-full md:items-center md:justify-center">
            <div className="md:w-4/5">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial._id}
                  name={testimonial.name}
                  review={testimonial.review}
                  title={testimonial.title}
                  company={testimonial.company}
                  stars={testimonial.stars}
                  isActive={index === activeTestimonial}
                />
              ))}
            </div>
            <div className="hidden md:flex md:w-1/5 md:justify-end">
              <IconButton
                handleClick={handleNext}
                iconUrl="/web-icons/carousel-right-arrow.svg"
              />
            </div>
          </div>
        </article>
      </section>
    </DarkContainer>
  );
};

export default Testimonials;
