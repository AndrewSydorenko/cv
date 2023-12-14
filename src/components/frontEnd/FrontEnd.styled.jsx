import styled from "@emotion/styled";
import { colors, mediaSizes } from "../const";
import { motion } from "framer-motion";

export const FrontStyled = styled(motion.section)`
  align-self: center;
  position: relative;
  border-radius: 10px;
  height: auto;
  width: 350px;
  opacity: 0.5;
  box-shadow: 2px 5px 15px 0px rgba(0, 0, 0, 0.6);
  /* animation: float 5s ease-in-out infinite; */
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
export const FrontImg = styled(motion.img)`
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
export const Title = styled(motion.h2)`
  color: ${colors.mainDark};
  font-family: Montserrat;
  font-size: 26px;
  font-weight: 200;
  position: absolute;
  top: 5px;
  left: 10px;
  z-index: 2;
  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 36px;
    top: 27px;
    left: 3%;
  }
`;

export const ContentBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 5% 5%;
  @media screen and (min-width: ${mediaSizes.tablet}) {
    flex-direction: row;
    gap: 150px;
  }
  @media screen and (min-width: ${mediaSizes.laptop}) {
    gap: 200px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    gap: 350px;
  }
`;

export const LeftSideNav = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-weight: 600;
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    opacity: 0.3;
    border-bottom: 1px solid ${colors.mainDark};
  }
  & li {
    font-family: Montserrat;
    font-weight: 500;
    width: fit-content;
    position: relative;
    cursor: pointer;
    &:hover,
    &:active,
    &:focus {
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-bottom: 1px solid ${colors.mainDark};
        z-index: -1;
        animation: animate 500ms linear;
      }
      @keyframes animate {
        0% {
          width: 0;
        }
        25% {
          width: 50%;
        }
        50% {
          width: 150%;
        }
        75% {
          width: 110%;
        }
        100% {
          width: 100%;
        }
      }
    }
  }
  @media screen and (min-width: ${mediaSizes.tablet}) {
    &::after {
      display: none;
    }
  }
`;

export const AboutText = styled(motion.p)`
  font-family: Montserrat;
  font-weight: 400;
  letter-spacing: 0.5px;
  color: ${colors.mainDark};
  @media screen and (min-width: ${mediaSizes.laptop}) {
    padding-top: 20px;
  }
`;
export const ContactsList = styled(motion.ul)`
  font-family: Montserrat;
  font-weight: 500;
  color: ${colors.mainDark};
  display: flex;
  flex-direction: column;
  gap: 10px;
  & li {
    width: fit-content;
  }
  & .contacts-link {
    display: flex;
    cursor: pointer;
    position: relative;
    &:hover {
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-bottom: 1px solid ${colors.mainDark};
        z-index: -1;
        animation: animate 500ms linear;
      }
    }
  }
`;

export const ProjBox = styled(motion.div)`
  font-family: Montserrat;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const ProjItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  color: ${colors.mainDark};
  padding: 20px;
  & img {
    cursor: pointer;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 4px 4px 15px 0px ${colors.mainDark};
    &:hover {
      animation: float 2s ease-in-out infinite;
    }
  }
  & ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  @media screen and (min-width: ${mediaSizes.laptop}) {
    flex-direction: row;
  }
`;

export const CvBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  & button {
    padding: 8px 12px;
    background: ${colors.mainLight};
    border-radius: 5px;
    outline: none;
    border: none;
    color: ${colors.mainDark};
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 5.76px;
    cursor: pointer;
    &:hover {
      transform: translateX(0px);
      animation: float 2s ease-in-out infinite;
      color: ${colors.mainLight};
      background: ${colors.mainDark};
    }
  }
  & img {
    display: none;
    @media screen and (min-width: ${mediaSizes.laptop}) {
      display: flex;
      overflow: hidden;
      max-width: 450px;
      border-radius: 8px;
    }
  }
`;
