import React from "react";
import GithubIcon from "../../../public/icons/github.png";
import LinkedinIcon from "../../../public/icons/linkedin.svg";
import EmailIcon from "../../../public/icons/email.png";
import MediumIcon from "../../../public/icons/medium.svg";
import Link from "next/link";
import Image from "next/image";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-1 my-12 md:my-12 py-24 gap-4 relative justify-center items-center" // Center alignment
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10 flex flex-col justify-center text-center mx-auto space-y-6">
        {" "}
        {/* Use mx-auto for horizontal centering and space-y for spacing */}
        <h2 className="text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          Contact Me
        </h2>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Have questions or want to get in touch? Feel free to reach out via
          email or connect with me on social media.
        </p>
        <div className="border-b border-yellow-400 w-40 mx-auto mb-6"></div>{" "}
        {/* Small yellow horizontal line */}
        <div className="socials flex flex-row gap-4 align-center justify-center">
          {" "}
          <Link href="mailto:ravinduw.20@cse.mrt.ac.lk">
            <Image src={EmailIcon} alt="Email Icon" width={50} height={50} />{" "}
          </Link>
          <Link href="https://www.linkedin.com/in/ravindu-wickramage/">
            <Image
              src={LinkedinIcon}
              alt="LinkedIn Icon"
              width={50}
              height={50}
            />{" "}
          </Link>
          <Link href="https://github.com/RavinduWK">
            <Image src={GithubIcon} alt="GitHub Icon" width={50} height={50} />{" "}
          </Link>
          <Link href="https://medium.com/@leadcoder">
            <Image src={MediumIcon} alt="Medium Icon" width={50} height={50} />{" "}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
