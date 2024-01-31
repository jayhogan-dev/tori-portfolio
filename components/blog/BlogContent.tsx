import LightContainer from "../containers/Light";
import RichText from "./RichText";

const BlogContent = ({ content, publishDate }: any) => {
  return (
    <LightContainer>
      <section className="flex flex-col items-start justify-center gap-6 py-12 md:py-[72px]">
        <p className="italic">Published: {publishDate}</p>
        <RichText content={content} />
      </section>
    </LightContainer>
  );
};

export default BlogContent;
