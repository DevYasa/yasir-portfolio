import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: ${({ theme }) => theme.mode === 'light' ? theme.colors.lightBg : theme.colors.darkBg};
    color: ${({ theme }) => theme.mode === 'light' ? theme.colors.darkText : theme.colors.lightText};
    transition: all 0.3s ease-in-out;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  section {
    padding: 80px 0;
  }

  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 3.5rem;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 2.5rem;
    }
  }

  h2 {
    font-size: 2.5rem;
    position: relative;
    display: inline-block;
    margin-bottom: 3rem;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 70%;
      height: 4px;
      background: ${({ theme }) => theme.colors.accent};
      border-radius: 2px;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 2rem;
    }
  }

  p {
    line-height: 1.6;
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    display: block;
  }

  .grid {
    display: grid;
    gap: 2rem;
  }

  .flex {
    display: flex;
  }

  .section-title {
    text-align: center;
    margin-bottom: 4rem;
  }

  .btn {
    display: inline-block;
    padding: 12px 28px;
    background: ${({ theme }) => theme.colors.accent};
    color: white;
    border-radius: 5px;
    font-weight: 600;
    transition: all 0.3s ease;
    font-size: 1rem;
    border: 2px solid ${({ theme }) => theme.colors.accent};
    
    &:hover {
      background: transparent;
      color: ${({ theme }) => theme.colors.accent};
    }
  }

  .btn-outline {
    background: transparent;
    color: ${({ theme }) => theme.colors.accent};
    
    &:hover {
      background: ${({ theme }) => theme.colors.accent};
      color: white;
    }
  }
`;

export default GlobalStyles;