import { strengthTrainingCourseItems } from "@/constants";
import SectionTitle from "./SectionTitle";
import DarkContainer from "./containers/Dark";
import CourseCard from "./CourseCard";

const Courses = () => {
  return (
    <DarkContainer>
      <section
        className="flex flex-col items-center py-12 md:py-[72px]"
        id="courses"
      >
        <SectionTitle title="Online Courses" />
        <div className="grid w-full grid-cols-1 gap-5 rounded-xl bg-primary-white-800/40 px-5 py-14 dark:bg-primary-black-300/40 md:grid-cols-2 md:gap-10 md:p-14 lg:px-8 xl:grid-cols-3">
          <div />
          <CourseCard
            packageTitle="Strength Training for Beginners"
            price={49}
            items={strengthTrainingCourseItems}
            link="https://toritraining.teachable.com/p/strength-training-for-beginners"
          />
          <div />
        </div>
      </section>
    </DarkContainer>
  );
};

export default Courses;
