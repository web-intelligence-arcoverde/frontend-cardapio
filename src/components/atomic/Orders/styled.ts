import { COLORS } from 'src/constants'
import styled from 'styled-components'

export const Container = styled.div`
  width:100%;
  height:auto;
  display: flex;
  flex-direction: row;
  padding: 5px;
  margin: 2px 0;
  `
  
export const Div1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  width: 65%;
  height: auto;
  img {
      width: 35%;
      border-radius: 20px;
    }
`
export const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;
  width: 30%;
  height: auto;
  `
  
  export const OrderList = styled.div`
  display: flex;
  flex-direction: column;
    margin-left:10px;
  p {
    font-size: 16px;    
  }
  `
  export const OrderNumber = styled.div`
  display: flex;  
  flex-direction: row;
  align-self: center;
`
export const OrderPrice = styled.div`
display: flex;  
flex-direction: row;
align-self: center;
`