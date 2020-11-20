import React, { Component } from "react";
class TasksDivs extends Component {
  state = {
    taskcounter: this.props.index + 1,
    taskvalue: this.props.textboxValue,
    taskslist: [],
  };
  handleDeleteTask = (id) => {
    console.log("delte acion" + id);
    var removingId = `divid_${id}`;
    var element = document.getElementById(removingId);
    element.parentNode.removeChild(element);
  };
  handleCompleteTask = (id) => {
    var checkbox = `checkboxid_${id}`;
    var spandiv = `text_${id}`;
    console.log(
      "checked value--->" + document.getElementById(checkbox).checked
    );
    if (
      document.getElementById(checkbox).checked == true ||
      document.getElementById(checkbox).checked
    ) {
      console.log("Entered" + spandiv);
      var valueofspan = document.getElementById(spandiv).innerHTML;
      console.log("Entered1" + valueofspan);
      document.getElementById(spandiv).innerHTML = `<del>${valueofspan}</del>`;
    } else {
      var valueofspan1 = document.getElementById(spandiv).innerHTML;
      var replacedvalue = valueofspan1
        .replace("<del>", "")
        .replace("</del>", "");
      console.log("Entered2" + replacedvalue);
      document.getElementById(spandiv).innerHTML = replacedvalue;
    }
  };
  render() {
    console.log(this.state.taskcounter);
    console.log(this.state.taskvalue);
    var spandivid = `text_${this.state.taskcounter}`;
    var ahrefdivid = `img_${this.state.taskcounter}`;
    var divid = `divid_${this.state.taskcounter}`;
    var checkboxid = `checkboxid_${this.state.taskcounter}`;
    return (
      <div className="text-center" id={divid}>
        <span id={spandivid}>{this.state.taskvalue}</span>
        <a
          href="#"
          className="m-2"
          id={ahrefdivid}
          _key
          onClick={() => this.handleDeleteTask(this.state.taskcounter)}
        >
          <img src="deleteicon.png" className="deleteicon"></img>
        </a>
        <input
          type="checkbox"
          id={checkboxid}
          className="text-center"
          aria-label="Task Completed"
          onChange={() => this.handleCompleteTask(this.state.taskcounter)}
        />
      </div>
    );
  }
}

export default TasksDivs;
