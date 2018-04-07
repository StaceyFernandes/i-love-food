import React, { Component } from 'react';

class FavoriteFood extends Component {
  constructor() {
    super();
    this.state = {
      label: "YES I love burgers",
      favorite: true,
    }
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
     (this.state.favorite) ?
       (this.setState({ label: "I hate burgers but I love salad", favorite: false, })) :
       (this.setState({ label: "YES I love burgers", favorite: true, }))
 }

  render() {
    return(
      <div>Are burgers your favorite food?
        <br />
          <button onClick= { this.onClickHandler } />
          {this.state.label}
      </div>
    )
  }
}

export default FavoriteFood;
