import styled from 'styled-components'

import logo from '../assets/icon.png'

const StyledSidebar = styled.div`
  position: relative;
  width: 256px;
  user-select: none;
  -webkit-app-region: drag;
  background: var(--color-bg-sidebar);
  .sidebar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .logo {
    display: flex;
    /* justify-content: center; */
    align-items: center;
    padding: 24px 16px;
    img {
      width: 40px;
      height: 40px;
      margin-right: 12px;
    }
    span {
      font-size: 24px;
    }
  }
`

const StyledSidebarItem = styled.div`
  padding: 8px 16px;
  -webkit-app-region: no-drag;
  .sidebar-item {
    display: flex;
    align-items: center;
    padding: 16px;
    border-radius: 8px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &.active,
    &:hover {
      background: var(--color-secondary);
      color: var(--color-white);
    }
  }
`

const menus = [
  { key: 'playlist', icon: '', title: '播放列表' },
  { key: 'album', icon: '', title: '专辑' },
  { key: 'singer', icon: '', title: '歌手' }
]

const Sidebar: React.FC = () => {
  return (
    <StyledSidebar>
      <div className="sidebar">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <span>TF-Music</span>
        </div>
        {menus.map((item, index) => (
          <StyledSidebarItem key={item.key}>
            <div className="sidebar-item">{item.title}</div>
          </StyledSidebarItem>
        ))}
      </div>
    </StyledSidebar>
  )
}

export default Sidebar
