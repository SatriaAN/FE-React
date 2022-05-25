// import styled component
import styled, { css } from "styled-components";

// Membuat Component Button
const Button = styled.button`
  padding: 1rem;
  border-radius: 10px;
  color: #fff;
  background-color: #4361ee;
  border: none;
  cursor: pointer;

  // PROPS SIZE
  width: ${(props) => props.theme.size[props.type] || props.theme.size["sm"]};

  // PROPS VARIANT
  background-color: ${(props) =>
    props.theme.colors[props.variant] || props.theme.colors["primary"]};

  // PROPS FULL
  /**
  Jika props full, set width 100% dan display block
  */
  ${(props) =>
    props.full &&
    css`
      display: block;
      width: 100%;
    `}
`;

export default Button;
