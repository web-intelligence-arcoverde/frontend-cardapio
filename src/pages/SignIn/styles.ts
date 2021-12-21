import styled from 'styled-components'
import { COLORS } from 'src/constants'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  img {
    padding-right: 25px;
  }

  h2 {
    display: block;
    text-align: center;
    text-decoration: underline ${COLORS.primaryOrange};
  }
`
