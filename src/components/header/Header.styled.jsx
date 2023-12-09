import styled from "@emotion/styled";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background: #bfacac;
  padding: 8px 25px;
  .social-list {
    display: flex;
    gap: 5px;
  }
  .header-title {
    color: #3f3939;
    font-family: Megrim;
    font-size: 48px;
    font-weight: 500;
    letter-spacing: 5.76px;
  }
  .social-img {
    &:hover {
      transform: scale(1.2);
    }
  }
`;
export default HeaderStyled;
