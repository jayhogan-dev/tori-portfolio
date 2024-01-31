import BlogContent from "@/components/blog/BlogContent";
import BlogHeader from "@/components/blog/BlogHeader";
import { client } from "@/lib/contentful/client";

export const revalidate = 500;

async function getData(slug: string) {
  const data = await client.getEntries({
    content_type: "post",
    "fields.slug": slug,
  });

  return data.items;
}

const BlogSlugPage = async ({ params }: { params: { slug: string } }) => {
  const post = await getData(params.slug);

  return (
    <div className="flex flex-col">
      <BlogHeader
        title={post[0].fields.title}
        subtitle={post[0].fields.subtitle}
        category={post[0].fields.category}
        headerImage={post[0].fields.image.fields.file.url}
      />
      <BlogContent
        content={post[0].fields.content}
        publishDate={post[0].fields.publishDate}
      />
    </div>
  );
};

export default BlogSlugPage;
