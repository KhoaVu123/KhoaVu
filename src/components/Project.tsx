import React from "react";
import mock04 from "../assets/images/mock04.jpg";
import mock05 from "../assets/images/mock05.jpg";
import mock07 from "../assets/images/mock07.jpg";
import mock08 from "../assets/images/mock08.jpg";
import mock09 from "../assets/images/mock09.jpg";
import mock10 from "../assets/images/mock10.jpg";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>

      <div className="projects-grid">
        <div className="project">
          <a
            href="https://github.com/KhoaVu123/4-DOF-Servo-Robotic-Arm-Control"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock10} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/KhoaVu123/4-DOF-Servo-Robotic-Arm-Control"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Robominer Rescue</h2>
          </a>
          <p>
            Developed a controlling robotic arm with 4 degrees of freedom using
            Arduino and Python. This project was designed for mine rescue
            operations by clearing obstacles and locating victims.
          </p>
        </div>

        <div className="project">
          <a
            href="https://github.com/KhoaVu123/Smart-Peanut-Seed-Sowing-Robot"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock09} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/KhoaVu123/Smart-Peanut-Seed-Sowing-Robot"
            target="_blank"
            rel="noreferrer"
          >
            <h2>AI-Integrated Smart Seeding Robot</h2>
          </a>
          <p>
            Developed an AI and automation prototype integrating image
            recognition with precision control for seeding using Python, OpenCV,
            and Arduino/ESP32.
          </p>
        </div>

        <div className="project">
          <a
            href="https://github.com/KhoaVu123/Early-Parkinson-s-Detection-Application"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock08} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/KhoaVu123/Early-Parkinson-s-Detection-Application"
            target="_blank"
            rel="noreferrer"
          >
            <h2>AI-Integrated Software for Early Detection of Parkinson Disease</h2>
          </a>
          <p>
            Supported creating an end-to-end AI for Healthcare prototype,
            focusing on early detection and practical deployment. Built a
            reproducible workflow covering data preprocessing, model
            development, and the evaluation pipeline.
          </p>
        </div>

        <div className="project">
          <a
            href="https://github.com/KhoaVu123/Unsafe-Vegetable-Detection-System"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock07} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/KhoaVu123/Unsafe-Vegetable-Detection-System"
            target="_blank"
            rel="noreferrer"
          >
            <h2>AI-Based Unsafe Vegetable Detection System</h2>
          </a>
          <p>
            Built a Convolutional Neural Network (CNN) to classify whether
            vegetables are safe or unsafe for consumption, supporting food
            hygiene and safety monitoring through image-based analysis.
          </p>
        </div>

         <div className="project">
          <a
            href="https://github.com/KhoaVu123/Smart-Peanut-Seed-Sowing-Robot"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock05} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://drive.google.com/file/d/12HujeG2xbtLhZtg4Axc_QDbgykAzQPqa/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <h2>The impact of using ChatGPT on High School Students’ learning</h2>
          </a>
          <p>
            Co-developed a research-and-outreach initiative on ChatGPT use in secondary education.
            Collected and organized survey data from 2,701 students, ran SPSS analyses to validate 
            constructs and quantify effects, then translated findings into actionable materials 
            (posters, user guide, seminars) to support safe and productive AI use in learning.
          </p>
        </div>

        <div className="project">
          <a
            href="https://drive.google.com/file/d/1iidB1DzpUsfoFaIqyBn2ohQDIDtqfK15/view"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock04} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://drive.google.com/file/d/1iidB1DzpUsfoFaIqyBn2ohQDIDtqfK15/view"
            target="_blank"
            rel="noreferrer"
          >
            <h2>
              Artificial intelligence tools in the learning process of secondary
              school pupils. Vietnam Journal of Education
            </h2>
          </a>
          <p>
            Co-authored sections on the AI-in-education context, methodology,
            and the proposed learning workflow integrating data collection and
            ML tools. Contributed to dataset collection and organization for the
            clean vs. contaminated vegetable classification case study.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
