import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import ContentfulImage from "./ContentfulImage";

interface BlogCardProps {
  title: string;
  subtitle?: string;
  headerImage: string;
  slug: string;
}

const BlogCard = ({ title, subtitle, headerImage, slug }: BlogCardProps) => {
  return (
    <Card className="flex w-full flex-col justify-between bg-white dark:bg-primary-black-500">
      <CardHeader className="relative flex h-44 items-center justify-center md:h-56">
        <ContentfulImage src={headerImage} className="rounded-t-lg" fill />
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center text-center">
        <h3 className="mb-1 mt-8 line-clamp-3 text-paragraph-bold sm:mt-10 md:mt-0 md:text-base-bold">
          {title}
        </h3>
      </CardContent>
      <CardFooter>
        <Link href={`${slug}`} className="w-full">
          <Button className="w-full">Read Post</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
