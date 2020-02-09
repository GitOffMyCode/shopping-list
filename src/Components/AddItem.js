import React from 'react';

class AddItem extends React.Component {
  render() {
    return (
      <div className="form">
        <form>
          <div>
          <label>Add a new item</label>
          </div>
          <div>
          <input type="text" />
          </div>

          <div>
          <label>Notes</label>
          </div>
          <div>
          <input type="text" />
          </div>


          <div>
          <label>Quantity</label>
          </div>
          <button className="button-inc"> - </button>
          <span className="quantity"> 1 </span>
          <button className="button-inc"> + </button>
          <div>
          <button className="button-add">add</button>
          </div>
        </form>
      </div>
    )
  }
}

export default AddItem;
