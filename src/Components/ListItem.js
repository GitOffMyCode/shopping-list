import React from 'react';

class ListItem extends React.Component {
    render() {
        return (
            <div className="list">
                <span className="itemName">{this.props.itemName}</span>
                <span className="itemNotes">{this.props.itemNotes}</span>
                <span className="itemQuantity">{this.props.itemQuantity}</span>
                <button className="button-edit">✎</button>
                <hr />
            </div>
        )
    }
}

export default ListItem;