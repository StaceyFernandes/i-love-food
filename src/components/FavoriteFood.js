import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.div`
  height: 25px;
  widht: 15px;
  border-radius: 2px;
  text-align: center;
  border: 1px solid black;
  background-color: grey;
`;

class FavoriteFood extends Component {
  constructor() {
    super();
    this.state = {
      labelYesNo: "YES",
      label: "I love burgers",
      favorite: true,
    }
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
     (this.state.favorite) ?
       (this.setState({
         label: "I hate burgers but I love salad",
         favorite: false,
         labelYesNo: "YESSS",
        })) :
       (this.setState({
         label: "I love burgers",
         favorite: true,
         labelYesNo: "NEGATIVE",
        }))
 }

  render() {
    return(
      <div>Are burgers your favorite food?
        <br />
          <Button onClick= { this.onClickHandler }>{this.state.labelYesNo}</Button>
          {this.state.label}
      </div>
    )
  }
}

export default FavoriteFood;
