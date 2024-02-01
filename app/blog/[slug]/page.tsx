import BlogContent from "@/components/blog/BlogContent";
import BlogHeader from "@/components/blog/BlogHeader";
import { client } from "@/lib/contentful/client";

export const revalidate = 500;

async function getData(slug: string) {
  const data = await client.getEntries({
    content_type: "post",
    "fields.slug": slug,
  });

  return data.items[0];
}

const BlogSlugPage = async ({ params }: { params: { slug: string } }) => {
  const post = await getData(params.slug);

  return (
    <div className="flex flex-col">
      <BlogHeader
        title={post.fields.title}
        subtitle={post.fields.subtitle}
        category={post.fields.category}
        headerImage={post.fields.image.fields.file.url}
      />
      <BlogContent
        content={post.fields.content}
        publishDate={post.fields.publishDate}
      />
    </div>
  );
};

export default BlogSlugPage;
