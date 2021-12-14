import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'column'};
  justify-content: ${({ justify }) => justify || 'center'};
  align-items: ${({ align }) => align || 'center'};
  padding: ${({ padding }) => padding || 0}px;
  width: ${({ width }) => width || 100}%;
`

export const StyledContainer = styled.div``
