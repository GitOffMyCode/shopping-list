import React from 'react';

class AddItem extends React.Component {

  state = {
    item: "",
    notes: "",
    counter: 1
  }

  handleInc = (value, e) => {
    e.preventDefault();
    const currentCount = this.state.counter;
    let newValue;
    if (value === "minus") newValue = currentCount - 1; 
    if (value === "add") newValue = currentCount + 1; 
    this.setState({
      counter: newValue
    });
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
        [name]: value 
    })
  }

  handleClick = e => {
    e.preventDefault();
    this.props.handleAddFunc(this.state.item, this.state.notes, this.state.counter);
    this.setState({
        item: "",
        notes: "",
        counter: 1
    })
  }

  render() {
  return (
  <div className="form">
  <form>
    <div>
    <label>Add a new item</label>
    </div>
    <div>
    <input type="text" 
    value={this.state.item}
    onChange={this.handleChange} 
    name="item"
  />
    </div>

    <div>
    <label>Notes</label>
    </div>
    <div>
    <input type="text" 
    value={this.state.notes}
    onChange={this.handleChange} 
    name="notes"
  />
    </div>

    <div>
    <label>Quantity</label>
    </div>
    <button className="button-inc" onClick={e => this.handleInc("minus", e)}> - </button>
    <span className="quantity"> {this.state.counter} </span>
    <button className="button-inc" onClick={e => this.handleInc("add", e)}> + </button>
    <div>
    <button className="button-add" onClick={this.handleClick}>add</button>
    </div>
  </form>
  </div>
  )
  }
}

export default AddItem;
