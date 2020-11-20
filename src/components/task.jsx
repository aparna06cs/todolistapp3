import React, { Component } from "react";
import TasksDivs from "./tasksdiv";
import CalendarComponent from "./calendarTest";

class TaskAdd extends Component {
  state = {
    taskcount: 0,
    tasks: [],
    taskvalue: "",
  };
  handleAddTask = () => {
    this.setState({ taskcount: this.state.taskcount + 1 });
    this.state.tasks = [];
    this.state.taskvalue = document.getElementById("task").value;
    this.setState({ taskvalue: this.state.taskvalue });

    for (let i = 0; i <= this.state.taskcount; i++) {
      var newidvalue = `newdiv_${i + 1}`;
      this.state.tasks.push(
        <div className="newDiv" id={newidvalue}>
          <TasksDivs index={i} textboxValue={this.state.taskvalue} />
        </div>
      );
    }
    this.setState(this.state.tasks);
  };
  handleDisableButton = () => {
    var taskvalue1 = document.getElementById("task").value;
    if (taskvalue1.length > 0) {
      document.getElementsByClassName("addTask")[0].removeAttribute("disabled");
    } else {
      document
        .getElementsByClassName("addTask")[0]
        .setAttribute("disabled", "disabled");
    }
    //this.state.taskvalue = taskvalue1;
    //this.setState(this.state.taskvalue);
  };

  render() {
    return (
      <main className="container" onLoad={this.handleDisableButton}>
        <div className="col-sm-10 text-left">
          <input
            type="text"
            id="task"
            className="m-2"
            onKeyUp={this.handleDisableButton}
          />
          <button
            onClick={this.handleAddTask}
            className="btn btn-primary addTask m-3"
          >
            Add Task
          </button>

          <CalendarComponent />
          <div className="text-left">{this.state.tasks}</div>
        </div>
      </main>
    );
  }
}

export default TaskAdd;
