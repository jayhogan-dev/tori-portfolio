import Link from "next/link";
import LightContainer from "./containers/Light";

// SVGR
import Instagram from "@/public/social-icons/instagram.svg";
import Facebook from "@/public/social-icons/facebook.svg";
import YouTube from "@/public/social-icons/youtube.svg";

const Footer = () => {
  return (
    <LightContainer>
      <div className="flex flex-col gap-5 px-6 py-12">
        <div className="flex flex-col items-center justify-center md:flex-row md:items-start md:justify-between">
          <p className="mb-4 text-body-regular text-primary-black-400 dark:text-primary-white-800">
            &copy; {new Date().getFullYear()} Tori Training LLC. All rights
            reserved.
          </p>
          <div className="flex items-center justify-center gap-5">
            <Link
              href="https://www.instagram.com/toritraining.official/"
              target="_blank"
            >
              <Instagram className="fill-primary-black-400 dark:fill-white" />
            </Link>
            <Link
              href="https://www.facebook.com/toritraining.official"
              target="_blank"
            >
              <Facebook className="fill-primary-black-400 dark:fill-white" />
            </Link>
            <Link
              href="https://www.youtube.com/@toritraining.official"
              target="_blank"
            >
              <YouTube className="fill-primary-black-400 dark:fill-white" />
            </Link>
          </div>
        </div>
        <div className="flex w-full items-end justify-end gap-5">
          <Link
            href="/privacy-policy"
            className="text-primary-black-400 dark:text-primary-white-800 text-sm hover:underline"
          >
            Privacy Policy
          </Link>
          <a
            href="/files/tori-training-terms-of-use.pdf"
            className="text-primary-black-400 dark:text-primary-white-800 text-sm hover:underline"
            download
          >
            Terms of Use
          </a>
        </div>
      </div>
    </LightContainer>
  );
};

export default Footer;
