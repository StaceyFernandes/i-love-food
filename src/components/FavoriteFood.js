import React, { Component } from 'react';
import styled from 'styled-components';
import { imageSources } from '../listImages.json';
import Toggle from 'react-toggle';
import "react-toggle/style.css";

const Question = styled.div`
  margin: 20px;
  padding: 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

const ImgStyle = styled.div`
  & img {
    max-width: 85%;
    margin: auto;
    max-height: 800px;
  }
`;

const Answer = styled.div`
  margin: 20px;
  padding: 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: red;
`;

class FavoriteFood extends Component {
  constructor() {
    super()
    this.state = {
      label: "I love burgers!",
      button: true,
    };
    this.onClickHandler = this.onClickHandler.bind(this);
    this.getImages = this.getImages.bind(this);
  }

  onClickHandler() {
    if (this.state.button)
      this.setState({
        label: "I tried making friends with kale, it didn't work",
        button: false,
      });
    else
      this.setState({
        label: "I love burgers too - let's be friends",
        button: true,
      });
  }

  getImages() {
    return imageSources.map((imageSrc) =>
      <ImgStyle><img src={ require(`${imageSrc}`) } alt={ imageSrc } /></ImgStyle>
    );
  }

  render() {
    return (
      <div>
        <br />
        <Question>Are burgers your favorite food?</Question>
        <label>
          <Toggle
            defaultChecked={ this.state.button }
            onChange={ this.onClickHandler } />
        </label>
        <Answer>Food Bot says: {this.state.label}</Answer>
        { this.getImages() }
      </div>
    );
  }
}

export default FavoriteFood;
