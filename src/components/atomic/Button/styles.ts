import styled from 'styled-components';

interface ButtonProps {
  background?: string;
  color?:string;
}

export const Container = styled.div`
  width:100%;
  margin:2px;
`;

export const Button = styled.button<ButtonProps>`
  background-color: ${props => props.background ? props.background : 'transparent' };
  border:none;
  width:100%;
  height:35px;
  border-radius:5px;
  
  
  
  
`
