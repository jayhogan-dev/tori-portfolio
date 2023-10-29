import LightContainer from "./containers/Light";

const Footer = () => {
  return (
    <LightContainer>
      <div className="flex flex-col items-center justify-center px-6 py-12 md:flex-row md:items-start md:justify-between">
        <p className="mb-4 text-body-regular text-primary-black-400 dark:text-primary-white-800">
          &copy; 2023 Tori. All rights reserved
        </p>
      </div>
    </LightContainer>
  );
};

export default Footer;
