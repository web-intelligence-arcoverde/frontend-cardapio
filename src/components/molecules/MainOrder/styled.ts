import { COLORS } from 'src/constants'
import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    height: 100%; 
    }
`
export const Orderslist = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 300px;
  overflow: scroll;
`

export const Promotionbutton = styled.div`
  width: 100%;
  height: 48px;

  display: flex;
  flex-direction: row;
  justify-self: flex-end;
  padding-left: 10px;
  border: 1px solid ${COLORS.primaryOrange};
  border-radius: 50px;
  input {
    width: 100%;
    border: none;
    border-radius: 50px;
  }
  Button {
    background: ${COLORS.primaryOrange};
    height: 100%;
    border-radius: 50px;
}
`
export const Paymentbutton = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  background: ${COLORS.primaryOrange};
  border-radius: 50px;
  img{
      border-radius: 50px;
      
    }
    Button{
      width:50%;
      border-radius: 50px;
      background: ${COLORS.primaryOrange};

  }
`
