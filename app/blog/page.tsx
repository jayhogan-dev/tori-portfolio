import DarkContainer from "@/components/containers/Dark";
import LightContainer from "@/components/containers/Light";

const BlogPage = () => {
  return (
    <main className="flex flex-col">
      <DarkContainer>
        <section className="flex flex-col items-center justify-center py-12 md:py-[72px]">
          <h1 className="relative z-10 mb-10 text-center text-4xl font-bold leading-[115%] tracking-[-0.36px] text-primary-blue-700/80 dark:text-white lg:text-heading1">
            Blogs
          </h1>
          <p className="-mt-5 w-full text-center text-small-regular text-primary-white-500 dark:text-primary-white-800 sm:w-[500px] lg:w-[650px] lg:text-paragraph-regular">
            Explore Insights, Tutorials, and Stories on Health and Fitness
          </p>
        </section>
      </DarkContainer>
      <LightContainer>
        <section className="flex flex-col items-center justify-center py-12 md:py-[72px]">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-10"></div>
        </section>
      </LightContainer>
    </main>
  );
};

export default BlogPage;
