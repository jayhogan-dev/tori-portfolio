import Stars from "./Stars";

interface TestimonialCardProps {
  name: string;
  review: string;
  title: string;
  stars: number;
  isActive: boolean;
  company: string;
}

const TestimonialCard = ({
  name,
  review,
  title,
  stars,
  isActive,
  company,
}: TestimonialCardProps) => {
  return (
    <>
      {isActive && (
        <div className="flex flex-col gap-3">
          <div className="flex justify-start gap-2">
            <Stars starCount={stars} />
          </div>
          <blockquote className="flex flex-col gap-5">
            <p className="text-body-regular text-primary-white-500 dark:text-primary-white-800">
              {review}
            </p>
            <footer>
              <p className="text-body-semibold text-primary-black-300 dark:text-white">
                — {name}
              </p>
              <p className="text-body-regular text-primary-white-500 dark:text-primary-white-800">
                {title} -
                <span className="pl-2 text-sm text-primary-white-500 dark:text-primary-white-800">
                  {company}
                </span>
              </p>
            </footer>
          </blockquote>
        </div>
      )}
    </>
  );
};

export default TestimonialCard;
