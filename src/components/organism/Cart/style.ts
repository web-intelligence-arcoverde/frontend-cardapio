import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  margin-top: 12px;
  padding: 19px 20px;
  gap: 12px;
`

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #fff;
  height: 80px;
`

export const Title = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 26px;
  letter-spacing: -0.24px;

  color: rgb(255, 35, 51);
`

export const SectionTitle = styled.h4`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: -0.24px;
  color: #3e4462;
`

export const AddressText = styled.h5`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  letter-spacing: -0.24px;

  color: #7e7e7e;
`
