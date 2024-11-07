import styled from 'styled-components'

const MainHeader = styled.header`
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 28px;
  user-select: none;
  /* background-color: var(--color-bg-header); */
  -webkit-app-region: drag;
`

const Header: React.FC = () => {
  return <MainHeader></MainHeader>
}

export default Header
