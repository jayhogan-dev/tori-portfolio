interface CertificationCircleProps {
  name: string;
  prefix: string;
}

const CertificationCircle = ({ name, prefix }: CertificationCircleProps) => {
  return (
    <div className="flex h-32 w-32 items-center justify-center rounded-full bg-primary-blue-300 dark:bg-primary-blue-700">
      <p className="text-xl font-bold">{prefix}</p>
    </div>
  );
};

export default CertificationCircle;
