import React from 'react';
import AddItem from "./Components/AddItem";
import ListItem from "./Components/ListItem";
import "./App.css";

class App extends React.Component {
  state = {
    list: [
      { name: "bread", notes: "brown sourdough", quantity: 1, id: 1 },
      { name: "soya milk", notes: "Provamel", quantity: 3, id: 2 },
      { name: "cashew nuts", notes: "", quantity: 1, id: 3 },
      { name: "chocolate", notes: "white or milk", quantity: 2, id: 4 },
      { name: "spinach", notes: "", quantity: 1, id: 5 },
      { name: "loo roll", notes: "", quantity: 4, id: 6 }
    ]
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
            <AddItem />
          </div>
          {/* right col */}
          <div className="col-7">
            <div className="listExtra"></div>
            {this.state.list.map(item => {
              return <ListItem
                itemName={item.name}
                itemNotes={item.notes}
                itemQuantity={item.quantity}
                id={item.id}
              />
            })}
            <div className="listExtra"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
