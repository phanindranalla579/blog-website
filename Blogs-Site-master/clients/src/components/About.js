import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const About = () => {
  return (
    <div className="aboutMain">
      <div className="about">
        <h1 className="aboutH1">About</h1>
        <p className="aboutPara">
          Hi, Welcome 👋 <br /> Bolgs Site is an platform where world Viewed
          your Blog, Some Blog deserves world attention so therefore we
          came up with Blogs-Site where you can read and publish your own
          Blogs
        </p>
        <a
          href="https://www.linkedin.com/in/rakesh-kumar-146238220/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedAbout"
        >
          Follow On LinkedIn
          <LinkedInIcon />
        </a>
      </div>
    </div>
  );
};

export default About;