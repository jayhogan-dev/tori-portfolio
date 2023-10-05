// import Link from "next/link";
import Link from "next/link";
import LightContainer from "./containers/Light";

// SVGR
// import LinkedIn from "@/public/social-icons/linkedin.svg";
// import Github from "@/public/social-icons/github.svg";

const Footer = () => {
  return (
    <LightContainer>
      <div className="flex flex-col items-center justify-center px-6 py-12 md:flex-row md:items-start md:justify-between">
        <p className="mb-4 text-body-regular text-primary-black-400 dark:text-primary-white-800">
          &copy; 2023 Tori. All rights reserved
        </p>
        <div className="flex items-center justify-center gap-5">
          <p>Add any Socials here</p>
          {/* <p>Built By: </p>
          <Link href="https://www.jayhogandev.com" target="_blank">
            Jay Hogan
          </Link> */}
          {/* <Link
            href="https://www.linkedin.com/in/jay-hogan-66610b90/"
            target="_blank"
          >
            <LinkedIn className="fill-primary-black-400 dark:fill-white" />
          </Link>
          <Link
            href="https://github.com/jayhogan-dev"
            target="_blank"
            className="relative h-6 w-6"
          >
            <Github className="fill-primary-black-400 dark:fill-white" />
          </Link> */}
        </div>
      </div>
    </LightContainer>
  );
};

export default Footer;
