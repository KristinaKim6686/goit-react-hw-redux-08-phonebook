import styled from "@emotion/styled";

export const Container = styled.div`
  background-image: url(https://cdn.pixabay.com/photo/2021/07/16/15/29/hellebore-6471156_960_720.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: -8px;
  color: rgb(0, 6, 53);
  font-size: 18px;
  background-color: #282c34;
`;

export const Heading = styled.div`
  width: 90vw;
  /* padding: 20px; */
`;
export const Nav = styled.nav`
  display: flex;
  padding: 20px;
  justify-content: space-around;
`;
