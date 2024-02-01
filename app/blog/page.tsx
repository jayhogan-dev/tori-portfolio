import BlogCard from "@/components/blog/BlogCard";
import DarkContainer from "@/components/containers/Dark";
import LightContainer from "@/components/containers/Light";
import { client } from "@/lib/contentful/client";

async function getData() {
  const data = await client.getEntries({ content_type: "post" });

  return data.items;
}

const BlogPage = async () => {
  const posts = await getData();

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
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-16 lg:grid-cols-3 lg:gap-10 xl:grid-cols-4 xl:gap-10">
            {posts.length > 0 &&
              posts.map((post: any) => (
                <BlogCard
                  key={post.sys.id}
                  title={post.fields.title}
                  headerImage={post.fields.image.fields.file.url}
                  slug={`/blog/${post.fields.slug}`}
                />
              ))}
          </div>
          {posts.length < 1 && (
            <div className="flex w-full items-center justify-center">
              <p className="text-lg">No Blogs</p>
            </div>
          )}
        </section>
      </LightContainer>
    </main>
  );
};

export default BlogPage;
