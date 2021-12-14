import { COLORS } from 'src/constants'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid ${COLORS.primaryOrange};
  border-radius: 25px;
  color: ${COLORS.primaryOrange};
  padding: 4px 8px;
`
export const IconButton = styled.button`
  background: #fff;
  border: none;
  color: ${COLORS.primaryOrange};

  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 21px;
  line-height: 31px;
  text-transform: capitalize;

  margin: 0 5px;
`
