import {
  ActingStyled,
  Title,
  ActImg,
  ActText,
  GallImg,
  ImgWrapper,
  VidWrap,
  Player,
} from "./Acting.styled";
import { useState } from "react";
import img from "../../assets/img/119A8583.jpg";
import img1 from "../../assets/img/119A8215 (1).jpg";
import img2 from "../../assets/img/IMG_0323.jpg";
import img3 from "../../assets/img/IMG_0447.jpg";
import img4 from "../../assets/img/IMG_0542.jpg";
import img5 from "../../assets/img/IMG_0584.jpg";
import img6 from "../../assets/img/16819353_.jpg";

const Acting = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!isOpen);
  };
  return (
    <ActingStyled
      layout
      transition={{ layout: { duration: 1, type: "spring" } }}
    >
      <Title layout="position">Acting</Title>
      <ActImg layout="position" src={img} alt="sam" onClick={toggleOpen} />
      {isOpen && (
        <div>
          <ActText>
            Актор театру та кіно. Також маю модельний досвід і досвід ведучого.
          </ActText>
          <VidWrap>
            <Player
              width="560"
              height="315"
              src="https://www.youtube.com/embed/QyOkAzpz_vI?si=Si692RiTY8wE4UC8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></Player>
          </VidWrap>
          <ImgWrapper>
            <GallImg src={img1} alt="sam" />
            <GallImg src={img2} alt="sam" />
            <GallImg src={img5} alt="sam" />
            <GallImg src={img3} alt="sam" />
            <GallImg src={img4} alt="sam" />
            <GallImg src={img6} alt="sam" />
          </ImgWrapper>
        </div>
      )}
    </ActingStyled>
  );
};
export default Acting;
