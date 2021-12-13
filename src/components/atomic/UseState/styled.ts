import { COLORS } from 'src/constants';
import styled from 'styled-components';

export const Container = styled.div`
display:flex;
flex-direction:row;
align-items: center;
border:1px solid ${COLORS.primaryOrange};
border-radius: 25px;
width:100%;
padding: 5px;
`;
export const UseStateButton = styled.button`
 margin: 0 10px; 
 font-size:26px;
 background:#fff;
 border:none;
 color:${COLORS.primaryOrange};
`;