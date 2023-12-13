import styled from "@emotion/styled";
import { colors } from "../const";
import { motion } from "framer-motion";

export const FrontStyled = styled(motion.section)`
  align-self: center;
  position: relative;
  border-radius: 10px;
  min-height: 300px;
  width: 1100px;
  padding: 27px 50px;
  opacity: 0.5;
  box-shadow: 2px 5px 15px 0px rgba(0, 0, 0, 0.6);
  /* animation: float 5s ease-in-out infinite; */
  overflow: hidden;

  &:hover,
  :active {
    opacity: 1;
  }
  & .nav-list-item {
    cursor: pointer;
  }
`;
export const FrontImg = styled(motion.img)`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
`;
export const Title = styled(motion.h2)`
  color: ${colors.mainDark};
  font-family: Megrim;
  font-size: 48px;
  font-weight: 500;
  position: absolute;
  top: 27px;
  z-index: 2;
`;

export const ContentBox = styled(motion.div)`
  display: flex;
  gap: 300px;
  padding: 35% 0 20px;
`;

export const LeftSideNav = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-weight: 600;
  & li {
    width: fit-content;
    position: relative;
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
          width: 200%;
        }
        100% {
          width: 100%;
        }
      }
    }
  }
`;

export const AboutText = styled(motion.p)`
  font-family: Montserrat;
  font-weight: 400;
  color: ${colors.mainDark};
`;
export const ContactsList = styled(motion.ul)`
  font-family: Montserrat;
  font-weight: 500;
  color: ${colors.mainDark};
  display: flex;
  flex-direction: column;
  gap: 10px;
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
      animation: float 5s ease-in-out infinite;
    }
  }
  & ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
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
    font-family: Megrim;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 5.76px;
    cursor: pointer;
    &:hover {
      transform: translateX(0px);
      animation: float 5s ease-in-out infinite;
      color: ${colors.mainLight};
      background: ${colors.mainDark};
    }
  }
  & img {
    overflow: hidden;
    max-width: 450px;
    border-radius: 8px;
  }
`;
