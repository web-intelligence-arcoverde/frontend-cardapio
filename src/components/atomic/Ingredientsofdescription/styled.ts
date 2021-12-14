import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  height:70px;
  margin-top:32px;
  display:flex;
  align-self:center;
  flex-direction:column;
  align-items:center;
  border-radius:25px;
  box-shadow: 0px 0px 2px 3px  rgba(100, 100, 100, 0.1);
  overflow:hidden;
  h1{
    font-family: Poppins;
    font-style: italic;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-transform: capitalize;
    font-feature-settings: 'kern' off;
  }
  `;
export const Ingredients = styled.div`
  display:flex;
  flex-direction: row;
  margin-top:20px;
  border-radius:25px;
  width:99%;
  height:60%;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
}
  P{
  margin:0px 15px;
  font-family: arial;
  font-weight: 300;
  font-size: 16px;
  line-height: 13px;
  }
`;