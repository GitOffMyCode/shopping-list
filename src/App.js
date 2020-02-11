import React from 'react';
import AddItem from "./Components/AddItem";
import ListItem from "./Components/ListItem";
import "./App.css";

class App extends React.Component {
  state = {
    list: [
      { name: "bread", notes: "brown sourdough", quantity: 1, id: 1 },
      { name: "cashew nuts", notes: "organic", quantity: 1, id: 2 },
      { name: "chocolate", notes: "white", quantity: 2, id: 3 },
      { name: "bag of spinach", notes: "", quantity: 1, id: 4 }
    ]
  }

  handleAdd = (name, notes, quantity) => {
      const listCopy = this.state.list.slice();
      const id = this.state.list.length + 1;
      const newItem = { name, notes, quantity, id };
      listCopy.push(newItem); // NOT: const newList = listCopy.push(newItem)
      this.setState({
        list: listCopy
      })
  }

  render() {
    return (
      <div className="App container">

        <div className="row">
          <h1>✎ my shopping list</h1>
        </div>

        <div className="row">
          {/* left col */}
          <div className="col-5">
            <AddItem handleAddFunc={this.handleAdd} />
          </div>
          {/* right col */}
          <div className="col-7">
            <div className="listExtra"></div>
            {this.state.list.map(item => {
              return <ListItem
                itemName={item.name}
                itemNotes={item.notes}
                itemQuantity={item.quantity}
                key={item.id}
              />
            })}
            <div className="listExtra"></div>
            <button className="button-clear">clear list</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
