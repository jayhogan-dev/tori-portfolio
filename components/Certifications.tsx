import { certifications } from "@/constants";
import SectionTitle from "./SectionTitle";
import DarkContainer from "./containers/Dark";
import CertificationCircle from "./CertificationCircle";

const Certifications = () => {
  return (
    <DarkContainer>
      <section className="flex flex-col items-center py-12 md:py-[72px]">
        <SectionTitle title="Certifications" />
        <div className="flex gap-8">
          {certifications.map((certification) => (
            <CertificationCircle
              key={certification.name}
              name={certification.name}
              prefix={certification.prefix}
            />
          ))}
        </div>
      </section>
    </DarkContainer>
  );
};

export default Certifications;
