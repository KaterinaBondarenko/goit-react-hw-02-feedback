import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 0 auto;
  text-align: center;
`;
export const Button = styled.button`
  border: none;
  padding: 5px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  margin: 4px;
  transition-duration: 0.4s;
  cursor: pointer;
  text-transform: capitalize;
  border-radius: 10px;
  &:hover {
    background-color: #ffa500;
    color: #fff;
  }
`;
