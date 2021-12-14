import { COLORS } from 'src/constants'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Orderslist = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 260px;
  overflow: scroll;

  padding: 10px 0;

  box-shadow: 0px 5px 17px rgba(243, 243, 243, 0.4283),
    0px 1.8696px 5px rgba(24, 24, 43, 0.0526),
    0px 2.0543px 17.7391px rgba(0, 0, 0, 0.0526);
`

export const InputWithButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 48px;
  display: flex;
  border-radius: 50px;
  box-shadow: 0px 5px 17px rgba(243, 243, 243, 0.4283),
    0px 1.8696px 5px rgba(24, 24, 43, 0.0526),
    0px 2.0543px 17.7391px rgba(0, 0, 0, 0.0526);
`

export const Input = styled.input`
  width: 100%;
  border-radius: 50px;
  border: none;
  padding-left: 20px;
`

export const ButtonStyled = styled.button`
  border: none;
  width: 30%;
  color: white;
  background: ${COLORS.primaryOrange};
  text-transform: capitalize;
  border-radius: 26px;
  padding: 10px 32px;
`

export const Button = styled.div`
  width: 100%;
  height: 48px;

  padding: 0px 16px;

  display: flex;
  flex-direction: row;
  background: ${COLORS.primaryOrange};

  border-radius: 25px;

  justify-content: center;
  align-items: center;

  button {
    background: transparent;
    border: none;
    color: #fff;
    width: 100%;
  }
`

export const ContainerValue = styled.div`
  border-radius: 26px;
  padding: 6px 21px;
  box-shadow: 0px 5px 17px rgba(243, 243, 243, 0.4283),
    0px 1.8696px 5px rgba(24, 24, 43, 0.0526),
    0px 2.0543px 17.7391px rgba(0, 0, 0, 0.0526);
`

export const Label = styled.h6`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: #0a191e;
`
