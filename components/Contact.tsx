import ContactForm from "./ContactForm";
import SectionTitle from "./SectionTitle";
import DarkContainer from "./containers/Dark";

const Contact = () => {
  return (
    <DarkContainer>
      <section
        className="flex flex-col items-center py-12 md:py-[72px]"
        id="contact"
      >
        <SectionTitle title="Get in Touch" />
        <div className="w-full">
          <ContactForm />
        </div>
      </section>
    </DarkContainer>
  );
};

export default Contact;
