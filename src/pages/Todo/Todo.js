import React, { Component } from "react";
import Input from "../../components/Input/Input";
import "./todo.css";

class Todo extends Component {
  state = {
    tasks: [],
    inputValue: "",
  };

  compareByCompleted = (a, b) => {
    if (a.status && !b.status) {
      return 1;
    } else if (!a.status && b.status) {
      return -1;
    } else {
      return 0;
    }
  };


  changeStatus = (index) => {
    const updatedTasks = this.state.tasks.map((task_item, i) => {
      if (i === index) {
        return { task: task_item.task, status: !task_item.status };
      }
      return task_item;
    });
  
    const sortedTasks = updatedTasks.sort(this.compareByCompleted);
    this.setState({ tasks: sortedTasks });
  };
  

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = () => {
    const { inputValue, tasks } = this.state;
    if (inputValue !== "") {
      const newTask = { task: inputValue, status: false };
      const orderedTasks = [...tasks, newTask].sort(this.compareByCompleted);
      this.setState({
        tasks: orderedTasks,
        inputValue: "",
      });
    }
  };

  render() {
    return (
      <div className="content">
        <div className="task-container">
          {this.state.tasks.map((task, index) => (
            <div key={index} className="task">
              {task.task}
              <input
                type="checkbox"
                checked={task.status}
                onChange={() => this.changeStatus(index)}
              />
            </div>
          ))}
          <Input
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default Todo;
