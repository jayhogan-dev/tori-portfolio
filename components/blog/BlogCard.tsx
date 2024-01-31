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
    <Card className="w-full bg-white dark:bg-primary-black-500">
      <CardHeader className="h-44 md:h-56">
        <ContentfulImage
          src={headerImage}
          className="rounded-t-lg"
          height={300}
          width={300}
        />
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        <h3 className="mb-1 mt-8 text-paragraph-bold sm:mt-10 md:mt-0 md:text-base-bold">
          {title}
        </h3>
        <p className="text-small-regular text-primary-white-500 dark:text-primary-white-800 md:text-body-regular">
          {subtitle}
        </p>
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
