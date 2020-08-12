import styled from 'styled-components'
import homeImg from '../../assets/home-background.svg';


export const PageHome = styled.div`
height: 100vh;
background: url(${homeImg}) no-repeat 700px bottom;

`
export const Content = styled.div`
width: 100%;
height: 100%;
max-width: 1100px;
margin: 0 auto;
padding: 0 30px;

display: flex;
flex-direction: column;
align-items: flex-start;

@media (max-width:900px) {
  align-items: center;
  text-align: center;
}

> header {
  margin: 48px 0 0;
  @media (max-width:900px) {
    margin: 48px auto 0;
    
  }
}
> main {
  flex: 1;
  max-width: 560px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width:900px) {
    align-items: center;
    
  }
  > h1 {
    font-size: 54px;
    color: var(--title-color);
    @media (max-width:900px) {
      font-size: 42px;
    }
  }
  > p {
    font-size: 24px;
    margin-top: 24px;
    line-height: 38px;
    
    @media (max-width:900px) {
      font-size: 24px;
    }
  }
  > a {
    width: 100%;
    max-width: 360px;
    height: 72px;
    background: var(--primary-color);
    border-radius: 8px;
    text-decoration: none;
    
    display: flex;
    align-items: center;
    overflow: hidden;
    
    &:hover {
      background: #2FB86E;
    }
    
    margin-top: 40px;
    > span {
      display: block;
      background: rgba(0, 0, 0, 0.08);
      width: 72px;
      height: 72px;
      
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.2s;
      > svg { 
        color: #FFF;
        width: 20px;
        height: 20px;
      }
    }
    > strong {
      flex: 1;
      text-align: center;
      color: #FFF;
    }
  }
}
`
