import Link from 'next/link'
import styled, { css } from "styled-components";
interface ButtonProp {
  to?: any
  children: string;
  backgroundColor: string;
}

interface StyledButtonProp {
  width?: string;
  height?: string;
  backgroundColor?: string;
  borderRadius?: string;
  position?: string;
  top?: string;
  left?: string;
}

const StyledButton = styled.button`
  width: ${
    (props: StyledButtonProp) =>
      props.width || '100%'
  };
  margin-left: 10px;
  border: 0;
  border-radius: ${
    (props: StyledButtonProp) =>
      props.borderRadius || '0'
  };
  background-color: ${
    (props: StyledButtonProp) =>
      props.backgroundColor || 'black'
  };
  padding: 0 15px;
  font-weight: bold;
  color: white;
  position: static;

  ${(props: StyledButtonProp) => props.position && css`
    position: ${props.position};
    height: ${props.height};
    top: ${props.top};
    left: ${props.left};
  `}
`

const Button = ({ to, children, ...rest }: ButtonProp) =>
  to ? (
    <Link href={to}>
      <StyledButton {...rest}>
        {children}
      </StyledButton>
    </Link>
  ) : (
    <StyledButton {...rest}>
      {children}
    </StyledButton>
  )

export default Button;
