import styled from "styled-components";

const Button = styled.button`
  border: none;
  outline: none;
  background: #2c3a47;
  color: #efefef;
  font-size: 0.9rem;
  font-family: Arial;
  border-radius: 0.15rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0.5rem 1rem;
  margin: 1rem 0.5rem 0 0;
  cursor: pointer;
  &:hover {
    background: #666;
  }
`;

export default Button;
