import styled from 'styled-components';

export const Container = styled.div`
  width:20%;
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  margin: 10px 10px 80px 10px;
  align-items:center;
  justify-self:flex-start;
  align-self:flex-end;
  border:1px solid #fff;
  border-radius:50px;
  background:  rgba(0, 0, 0, 0.45);
  h1{
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  }
  img{
    width:30%;
  }
`;
