import styled from "@emotion/styled";
import { colors } from "../const";
import { motion } from "framer-motion";

export const ActingStyled = styled(motion.section)`
  align-self: center;
  position: relative;
  border-radius: 10px;
  min-height: 300px;
  width: 1100px;
  padding: 27px 50px;
  opacity: 0.5;
  box-shadow: 2px 5px 15px 0px rgba(0, 0, 0, 0.6);
  overflow: hidden;

  &:hover,
  :active {
    opacity: 1;
  }
`;

export const ActImg = styled(motion.img)`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
`;
export const GallImg = styled(motion.img)`
  display: flex;
  width: 350px;
  border-radius: 8px;
`;
export const ImgWrapper = styled(motion.div)`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;

export const Title = styled(motion.h2)`
  color: ${colors.mainDark};
  font-family: Megrim;
  font-size: 48px;
  font-weight: 500;
  position: absolute;
  right: 50px;
  z-index: 2;
`;

export const ActText = styled(motion.p)`
  display: flex;
  justify-content: center;
  font-family: Montserrat;
  font-weight: 400;
  padding: 35% 0 20px;
  color: ${colors.mainDark};
  z-index: 10;
`;
export const VidWrap = styled(motion.p)`
  display: flex;
  justify-content: center;
`;
