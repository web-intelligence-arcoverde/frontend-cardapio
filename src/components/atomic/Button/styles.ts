import styled from 'styled-components';

interface ButtonProps {
  background?: string;
  
}

export const Container = styled.div`
  width:100%;
`;

export const Button = styled.button<ButtonProps>`
  background-color: ${props => props.background ? props.background : 'white' };
  border:none;
  width:100%;
  height:35px;
  border-radius:5px;

`
