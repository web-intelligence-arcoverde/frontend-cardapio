

import { COLORS } from 'src/constants';
import styled from 'styled-components';
export const Container =styled.div `

display:flex;
width:100%;
height:100vh;

`
export const DashboardMenu = styled.div`
  width:20%;
  padding:15px;
  box-shadow: 2px 0px 4px 1px  rgba(100, 100, 100, 0.2); 
  
  h2 {
    font-size:30px;
    margin-bottom:50px;
    font-family: 'Open Sans Condensed', sans-serif;
    background-image: linear-gradient(to bottom,${COLORS.primaryRed}, ${COLORS.primaryOrange});
  color: black;
  background-clip: text;
  -webkit-background-clip: text;

  -webkit-text-fill-color: transparent;
  }
`
export const ImgDraw =styled.img`

width:100%;
padding:100px;
animation: show 1.5s forwards;
@keyframes show {
    from {
      opacity: 0;
      transform: translate3d(0, -40%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
`
;
