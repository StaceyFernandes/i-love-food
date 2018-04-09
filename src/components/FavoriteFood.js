import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  height: 25px;
  widht: 15px;
  border-radius: 2px;
  text-align: center;
  border: 1px solid black;
  background-color: grey;
`;
const Img = styled.div`
`;

class FavoriteFood extends Component {
  constructor() {
    super();
    this.state = {
      labelYesNo: "NEGATIVE",
      label: "I love burgers too",
      favorite: true,
      image: '../images/wineTable.jpg',
    }
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
     (this.state.favorite) ?
       (this.setState({
         label: "I hate burgers but I love salad",
         favorite: false,
         labelYesNo: "YESSS",
         image: "../images/wineTable.jpg",
        })) :
       (this.setState({
         label: "I love burgers too",
         favorite: true,
         labelYesNo: "NEGATIVE",
         image: "../images/wineTable.jpg"
        }))
 }

  render() {
  //  const image = {this.state.image}
    return(
      <div>Are burgers your favorite food?
        <br />
        <Button onClick= { this.onClickHandler }>{this.state.labelYesNo}</Button>
        <br />
        {this.state.label}
        <img src={require('../images/wineTable.jpg')} alt="hello" />

      </div>
    )
  }
}

export default FavoriteFood;
