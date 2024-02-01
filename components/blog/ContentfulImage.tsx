"use client";

import Image from "next/image";

const contentfulLoader = ({ src, width, quality }: any) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const ContentfulImage = (props: any) => {
  return <Image alt="image" loader={contentfulLoader} {...props} />;
};

export default ContentfulImage;
