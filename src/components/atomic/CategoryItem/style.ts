import styled from 'styled-components'

interface PropsContainer {
  selected?: boolean
}

export const Container = styled.div<PropsContainer>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 120px;
  padding: 14px 8px;
  margin: 0px 16px 0px 0px;
  border: 1px solid #dadada;
  border-radius: 8px;

  background-color: ${({ selected }) =>
    selected ? ' #fdc844' : 'transparent'};
`
