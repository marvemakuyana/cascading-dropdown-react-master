import React, { Component } from "react";

 class Arrays extends Component {
  state = {
    cart: ["Corn", "Potato"],
  };

  saveInput = (e) => {
    this.setState({ input: e.target.value });
  };

  addNewItem = () => {
    let { cart, input } = this.state;
  cart.push(input);
  this.setState({cart: cart});
  };
  onSubmit = () => {
   console.log(this.state.cart)
  };


  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.saveInput}
        />
        <button onClick={this.addNewItem}> Add Item </button>
        <ol>
          {this.state.cart.map((subItems, sIndex) => {
            return <li key={sIndex}> {subItems}</li>
          })}
        </ol>
        <button type='submit' onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
}

export default Arrays