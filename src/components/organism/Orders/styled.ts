import styled from 'styled-components'

export const ContainerImg = styled.div`
  width: 88px;
  height: 100%;
  img {
    border-radius: 20px;
  }
`
export const ContainerInformation = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`

export const TitleProduct = styled.h6`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  text-transform: capitalize;
`

export const NameOrder = styled.h6`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  text-transform: capitalize;
`

export const ContainerAction = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const PriceItem = styled.h6`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  text-transform: capitalize;
  color: #050505;
`
