import styled from "@emotion/styled";
import { colors, mediaSizes } from "../const";
import { motion } from "framer-motion";

export const ActingStyled = styled(motion.section)`
  align-self: center;
  position: relative;
  border-radius: 10px;
  height: auto;
  width: 350px;
  opacity: 0.5;
  box-shadow: 2px 5px 15px 0px rgba(0, 0, 0, 0.6);
  overflow: hidden;
  &:hover,
  :active {
    opacity: 1;
  }
  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 550px;
    min-height: 200px;
  }
  @media screen and (min-width: ${mediaSizes.laptop}) {
    width: 1000px;
    min-height: 300px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    width: 1200px;
  }
`;

export const ActImg = styled(motion.img)`
  display: flex;
  object-fit: cover;
  height: auto;
  width: 350px;
  box-shadow: 2px 5px 15px 0px rgba(0, 0, 0, 0.6);
  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 680px;
  }
  @media screen and (min-width: ${mediaSizes.laptop}) {
    width: 1000px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    width: 1200px;
  }
`;
export const GallImg = styled(motion.img)`
  display: flex;
  width: 350px;
  border-radius: 8px;
`;
export const ImgWrapper = styled(motion.div)`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-items: center;
  padding-bottom: 30px;
  @media screen and (min-width: ${mediaSizes.tablet}) {
  }
  @media screen and (min-width: ${mediaSizes.laptop}) {
    justify-content: center;
    grid-template-columns: repeat(2, min-content);
    grid-template-rows: repeat(3, min-content);
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;

export const Title = styled(motion.h2)`
  color: ${colors.mainDark};
  font-family: Montserrat;
  font-size: 26px;
  font-weight: 200;
  position: absolute;
  right: 10px;
  top: 60px;
  z-index: 2;
  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 36px;
    top: 130px;
    right: 20px;
  }
  @media screen and (min-width: ${mediaSizes.laptop}) {
    top: 220px;
    right: 30px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    top: 280px;
    right: 40px;
  }
`;

export const ActText = styled(motion.p)`
  display: flex;
  justify-content: center;
  font-family: Montserrat;
  font-weight: 400;
  padding: 2% 5%;
  margin-top: 30px;
  margin-bottom: 30px;
  color: ${colors.mainDark};
  z-index: 10;
`;
export const VidWrap = styled(motion.p)`
  display: flex;
  justify-content: center;
`;
export const Player = styled(motion.iframe)`
  display: flex;
  border-radius: 8px;
`;
