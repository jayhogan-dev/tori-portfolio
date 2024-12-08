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
        {/* Testimonials */}
        <article className="flex flex-col gap-5 md:w-full md:flex-row">
          <div className="flex items-start justify-between gap-5 md:items-center md:justify-center">
            <div className="hidden md:flex">
              <IconButton
                handleClick={handlePrev}
                iconUrl="/web-icons/carousel-left-arrow.svg"
              />
            </div>
            <div className="flex h-48 w-48 items-center justify-center rounded-xl bg-primary-blue-300 dark:bg-primary-blue-700">
              <h1 className="text-[100px] font-black text-white">
                {testimonials[0].fields.name}
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
                  key={testimonial.fields._id}
                  name={testimonial.fields.name}
                  review={testimonial.fields.review.content[0].content[0].value}
                  location={testimonial.fields.location}
                  stars={testimonial.fields.stars}
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
