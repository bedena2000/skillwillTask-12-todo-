import React from "react";

// Componetns
import InputBox from "./components/InputBox";
import ShouldDone from "./components/ShouldDone";
import Done from "./components/Done";

// Styled
import { Button } from "@mui/material";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        {
          todoName: 'Laravel',
          isActive: true,
          uniqueId: Math.random()
        },
        {
          todoName: 'Python',
          isActive: true,
          uniqueId: Math.random()
        },
        {
          todoName: 'React',
          isActive: false,
          uniqueId: Math.random()
        },
      ],
      previewShouldDone: true
    };
    this.changeInputValue = this.changeInputValue.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  };

  changeInputValue(newValue) {
    if(newValue.trim()) {
      const newItem = {
        todoName: newValue,
        isActive: true,
        uniqueId: Math.random()
      }
      this.setState({
        todoList: [
          ...this.state.todoList,
          newItem  
        ],
      })
    };
  };

  updateTodo(updateInfo, itemId) {
    if(updateInfo === 'changeActive') {
      const newArray = this.state.todoList.map(item => {
        if(itemId === item.uniqueId) {
          return {
            ...item,
            isActive: false
          }
        } else {
          return item;
        }
      });
      this.setState({
        todoList: newArray
      })
    } else if (updateInfo === 'removeItem') {
      const newArray = this.state.todoList.filter(item => item.uniqueId !== itemId);
      this.setState({
        todoList: newArray
      });
    } else if (updateInfo === "backToActive") {
      const newArray = this.state.todoList.map(item => {
        if(itemId === item.uniqueId) {
          return {
            ...item,
            isActive: true
          }
        } else {
          return item;
        }
      });
      this.setState({
        todoList: newArray
      })
    };
  }



  render() {
    return (
      <div className="app-wrapper">
        <InputBox handleInput={this.changeInputValue} />
        <div className="app-wrapper-fields">
          <Button onClick={() => this.setState({ previewShouldDone: true })} variant="outlined">შესასრულებელი</Button>
          <Button onClick={() => this.setState({ previewShouldDone: false })} variant="outlined">შესრულებული</Button>
        </div>
        <div className="todo-wrapper">
          {
            this.state.previewShouldDone ? <ShouldDone updateTodo={this.updateTodo} todoList={this.state.todoList} /> : <Done updateTodo={this.updateTodo} todoList={this.state.todoList} />
          }
        </div>
      </div>
    )
  }

};

export default App;