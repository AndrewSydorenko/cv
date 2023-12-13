import styled from "@emotion/styled";
import { colors, mediaSizes } from "../const";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: ${colors.mainLight};
  padding: 8px 25px;
  .social-list {
    display: flex;
    gap: 10px;
  }
  .header-title {
    position: relative;
    color: ${colors.mainDark};
    font-family: Montserrat Subrayada;
    font-size: 22px;
    font-weight: 400;
    @media screen and (min-width: ${mediaSizes.tablet}) {
      font-size: 48px;
    }
  }
  .nik {
    position: absolute;
    right: 4px;
    top: -10px;
    font-size: 16px;
    @media screen and (min-width: ${mediaSizes.tablet}) {
      font-size: 21px;
    }
  }
  .social-img {
    display: flex;
    opacity: 0.5;
    &:hover {
      transform: scale(1.2);
      opacity: 0.8;
    }
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
