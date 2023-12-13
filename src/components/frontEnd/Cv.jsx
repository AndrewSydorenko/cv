import React from "react";
import img from "../../assets/img/image125.jpg";
import { CvBox } from "./FrontEnd.styled";

export const Cv = () => {
  return (
    <CvBox>
      <button>
        <a
          href="https://drive.google.com/file/d/1V4-hIDKsDVZ2y-H-qGSLrrwqzLjdTpK2/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download
        </a>
      </button>
      <img src={img} alt="cv" />
    </CvBox>
  );
};
