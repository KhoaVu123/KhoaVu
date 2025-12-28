import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/KhoaVu123" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/khoa-nguy%E1%BB%85n-v%C5%A9-17523b3a2/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>A portfolio designed & built by <a href="https://github.com/KhoaVu123/react-portfolio-template" target="_blank" rel="noreferrer">Nguyen Vu Khoa</a> with 💜</p>
    </footer>
  );
}

export default Footer;