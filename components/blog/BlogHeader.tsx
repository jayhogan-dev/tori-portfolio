import DarkContainer from "../containers/Dark";
import SectionTitle from "../SectionTitle";
import ContentfulImage from "./ContentfulImage";

interface BlogHeaderProps {
  title: string;
  subtitle?: string;
  headerImage: string;
  category: string;
}

const BlogHeader = ({
  title,
  subtitle,
  headerImage,
  category,
}: BlogHeaderProps) => {
  return (
    <DarkContainer>
      <section className="flex flex-col items-center justify-center gap-6 py-12 md:py-[72px]">
        <h2 className="text-sm font-semibold uppercase text-primary-blue-300 dark:text-primary-blue-700 md:text-xl">
          {category}
        </h2>
        <div className="flex w-[320px] flex-col items-center lg:w-full">
          <SectionTitle title={title} />
          <h2 className="-mt-5 text-lg font-semibold md:text-2xl">
            {subtitle}
          </h2>
        </div>
        <div className="flex flex-row items-end">
          <div className="relative h-56">
            <ContentfulImage
              src={headerImage}
              className="rounded-lg"
              height={300}
              width={300}
            />
          </div>
        </div>
      </section>
    </DarkContainer>
  );
};

export default BlogHeader;
