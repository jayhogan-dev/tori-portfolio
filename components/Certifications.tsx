import { certifications } from "@/constants";
import SectionTitle from "./SectionTitle";
import CertificationCircle from "./CertificationCircle";
import LightContainer from "./containers/Light";

const Certifications = () => {
  return (
    <LightContainer>
      <section className="flex flex-col items-center py-12 md:py-[72px]">
        <SectionTitle title="Certifications" />
        <div className="flex flex-wrap items-center justify-center gap-8">
          {certifications.map((certification) => (
            <CertificationCircle
              key={certification.name}
              name={certification.name}
              prefix={certification.prefix}
            />
          ))}
        </div>
      </section>
    </LightContainer>
  );
};

export default Certifications;
