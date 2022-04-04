import styled from "@emotion/styled";
export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
`;
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 150px;
  height: 200px;
  margin: 15px;
`;
export const Info = styled.p`
  color: whitesmoke;
`;
export const Button = styled.button`
  width: max-content;
  padding: 5px 10px;
  border: none;
  border-radius: 12px;
  box-shadow: inset -2px 1px whitesmoke, -0.3em 0 0.4em white;
  background-color: transparent;
  font-size: inherit;
  font-weight: 100;
  color: whitesmoke;
`;
