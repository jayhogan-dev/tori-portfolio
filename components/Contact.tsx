import ContactForm from "./ContactForm";
import SectionTitle from "./SectionTitle";
import LightContainer from "./containers/Light";

const Contact = () => {
  return (
    <LightContainer>
      <section
        className="flex flex-col items-center py-12 md:py-[72px]"
        id="contact"
      >
        <SectionTitle title="Get in Touch" />
        <div className="w-full">
          <ContactForm />
        </div>
      </section>
    </LightContainer>
  );
};

export default Contact;
