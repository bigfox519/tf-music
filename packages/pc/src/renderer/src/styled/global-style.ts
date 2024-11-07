import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
:root {
  --color-white: #FFFFFF;
  --color-black: #11142D;
  --color-gray: #9A9AB0;
  --color-gray-100: #F7F7FC;
  --color-gray-200: #E2E2EA;

  --color-primary: #4150A3;
  --color-secondary: #8B96D9;
  --color-text: var(--color-black);
  --color-bg: var(--color-gray-100);
  --color-bg-header: var(--color-white);
  --color-bg-sidebar: var(--color-white);
}
*, *::before, *::after {
  box-sizing: border-box;
}
html,body {
  max-width: 100%;
  color: var(--color-text);
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 14px;
  line-height: 1.2;
  --webkit-font-smoothing: antialiased;
  background-color: var(--color-bg);
}
`

export default GlobalStyle
