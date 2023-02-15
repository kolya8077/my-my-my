import styled from "styled-components"


export const ButtonContainer = styled.div`
border: 1px solid black;
width: 400px;
height: 200px;
`

export const ButtonBox = styled.div`
  border-radius: 1.4em;
  background-color: #1a2857;
  color: #fff;
  display: inline-block;
  font-size: 27px;
  line-height: 2.85em;
  width: 11.3em;
  height: 2.8em;
  text-align: center;
  font-family: Arial, sans-serif;
  font-weight: bold;
  position: relative;
  left: 50%;
  top: 50%;
  overflow: hidden;
  transform: translate(-50%, -50%);
  span {
    display: block;
    position: relative;
  }
  &:hover em {
    transform: rotate(-8deg) translateY(-81%);
    transform-origin: left top;
  }
  em {
    position: absolute;
    width: 12em;
    height: 6em;
    background-color: #ff002e;
    left: 0;
    top: 3.8em;
    transition: all 0.8s cubic-bezier(0.39, 0.58, 0.57, 1);
    i {
      float: left;
      position: relative;
      overflow: hidden;
      width: 2em;
      height: 1em;
      margin-top: -0.5em;
      &:after,
      &:before {
        content: '';
        float: left;
        height: 100%;
        width: 50%;
        border-radius: 50%;
      }
      &:before {
        background-color: #ff002e;
      }
      &:after {
        background-color: #1a2857;
      }
    }
  }
`;