interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <h1 className="relative z-10 mb-10 text-center text-4xl font-bold leading-[115%] tracking-[-0.36px] text-primary-blue-700/80 dark:text-white lg:text-heading2">
      {title}
    </h1>
  );
};

export default SectionTitle;
