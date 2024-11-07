import GlobalStyle from './styled/global-style'
import styled from 'styled-components'

import Header from './components/Header'
import Sidebar from './components/Sidebar'

const Container = styled.div`
  display: flex;
  align-items: stretch;
  .main-wrapper {
    flex: 1;
    min-height: 100vh;
  }
`

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <main className="main-wrapper">
          <Header />
        </main>
      </Container>
    </>
  )
}

export default App
