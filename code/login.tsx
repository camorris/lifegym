import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import styled from "styled-components";

const LoginContainer = styled.div`
  background: ${props => props.color};
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: bold;
  color:white;
  font-size: 20px;
  border-radius:10px;
  transition: 0.8s cubic-bezier(0.8, 0.2, 0.85, 1);
  box-shadow:0 10px 20px rgba(0,0,0,0.25);
  position:relative;

  &:hover{
    background:  rgb(41, 160, 250);
    transform: scale(1.1,1.1)
  }
  div{
    position:absolute;
    top: 0;
    left: 0;
    border-radius:10px;
  }
  p{
    position:absolute;
    top: 0px;
    left: 80px;
    
  }

  `
    
type Props = { 
  text: string;
  color: string;
 };

export class login extends React.Component<Props> {
  
  static defaultProps: Props = {
    text: "Button",
    color: "Black",  
  };

  static propertyControls: PropertyControls<Props> = {
    text: { type: ControlType.String, title: "Button" },
    color: {type: ControlType.Color, title:"Color"},
  };

  render() {
    return <LoginContainer color={this.props.color}>
    {this.props.children}
    <p>{this.props.text}</p>
    </LoginContainer>;
  }
}