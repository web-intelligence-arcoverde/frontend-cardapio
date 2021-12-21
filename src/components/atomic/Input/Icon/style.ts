import { COLORS } from 'src/constants'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 48px;
  width: 100%;
  border-radius: 14px;
  background: ${COLORS.primaryWhite};
  padding: 10px 20px;
  align-items: center;
`

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 14px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 17.2972px;
  line-height: 20px;

  margin-left: 14px;

  color: #4f4f4f;
`
