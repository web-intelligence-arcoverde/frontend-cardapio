import styled from 'styled-components';
import { COLORS } from 'src/constants';

export const CardBtns = styled.div`
  display:flex;
  justify-content:space-around;
  width:100%;
  margin-top:10px;
  Button{
    color:#fff;
    border:1px solid #fff;
    :hover{
      background:#fff;
      color:${COLORS.primaryOrange};
     font-weight:500
    }
    
  }
 
`;
export const Container =styled.div`
display:flex;
flex-direction:column;
width:100%;

`
