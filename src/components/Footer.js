import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <section className="flex justify-center mt-24">
      <div className="">
        <p className="text-gray-500 text-center mb-4">
          Made by Shruti Shrivastava
        </p>
        <div className="flex justify-between">
          <a
            href="https://www.linkedin.com/in/shruti-shrivastava-676606228/"
            target="_blank"
          >
            <LinkedInIcon className="scale-125" />
          </a>
          <a href="https://github.com/shrutishri2208" target="_blank">
            <GitHubIcon className="scale-125" />
          </a>
          <a
            href="mailto:shrutishri2208@gmail.com?body=Hello%20there%20profile%20viewer%20:)"
            target="_blank"
          >
            <EmailIcon className="scale-125" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
