import styled from 'styled-components';

import { COLORS } from 'src/constants';
export const Container = styled.div`
  display:flex;
  width: 100%;
 :hover {
    background-color:${COLORS.white};
    cursor:pointer;
   
  }
  

  img {
    width:30px;
    margin-right:10px;
  }
`;

export const Button =styled.button`
width:100%;
background:none;
border:none;
border-radius:5px;
height:48px;
font-size:20px;
font-weight:normal;
color:${COLORS.primaryOrange};
text-align:start;
 :hover {
    background-color:${COLORS.white};
    cursor:pointer;
  }
  :focus {
    font-weight:500;
    text-decoration:underline;
    
  }
  

`