import React from "react";

class ListItem extends React.Component {
  render() {
    return (
      <div className="list">
        <button className="button-edit">✎</button>
        <span className="itemName">{this.props.itemName}</span>
        <span className="itemQuantity">x {this.props.itemQuantity}</span>
        <div>
          <span className="itemNotes">{this.props.itemNotes}</span>
        </div>
        <hr />
      </div>
    );
  }
}

export default ListItem;
