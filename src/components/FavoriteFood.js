import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  height: 25px;
  width: 95px;
  border-radius: 2px;
  text-align: center;
  border: 1px solid black;
  background-color: grey;
  margin: auto;
`;

const Img = styled.div`
  & img {
    max-width: 90%;
    margin: auto;
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

const Question = styled.div`
  margin: 20px;
  padding: 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;
class FavoriteFood extends Component {
  constructor() {
    super();
    this.state = {
      labelYesNo: "NEGATIVE",
      label: "I love burgers!",
      favorite: true,
    }
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
     (this.state.favorite) ?
       (this.setState({
         label: "I tried making friends with salad, it didn't work",
         favorite: false,
         labelYesNo: "YESSS",
        })) :
       (this.setState({
         label: "I love burgers too - let's be friends",
         favorite: true,
         labelYesNo: "NEGATIVE",
        }))
 }

 getImages() {
   return
 }

  render() {
    return(
      <div>
        <br />
        <Question>Are burgers your favorite food?</Question>
        <Button onClick= { this.onClickHandler }>{this.state.labelYesNo}</Button>
        <Answer>Food Bot says: {this.state.label}</Answer>
        <Img><img src={require('../images/mussels.jpg')} /></Img>
      </div>
    )
  }
}

export default FavoriteFood;
