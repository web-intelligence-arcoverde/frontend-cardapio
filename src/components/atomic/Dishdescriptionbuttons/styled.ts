import { COLORS } from 'src/constants';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: center;
  align-items:center;
  height:60px;
  margin-top:32px;
  background:${COLORS.primaryOrange};
  border-radius:50px;
  h1{
    font-family: Metropolis;
    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    line-height: 21px;
    text-transform: capitalize;
    color: #FEFAF9;
  }
  Button{
    background:${COLORS.primaryOrange};
    border-radius:50px;
    width:auto;
    
  }
`;
