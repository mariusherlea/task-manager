import { useState } from "react";
import "./CreateTaskForm.css";

const CreateTaskForm = () => {
  // const [taskName, setTaskName] = useState("");
  // const [dueDate, setDueDate] = useState();
  // const [taskDetail, setTaskDetail] = useState();
  const [formData, setFormData] = useState({
    taskName: "",
    dueDate: "",
    taskDetail: "",
  });
  const handleNameChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      taskName: event.target.value,
    }));
  };

  const handleDateChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      dueDate: event.target.value,
    }));
  };

  const handleDetailsChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      taskDetail: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("formData: " + JSON.stringify(formData));

    // const newTask = {
    //   name: taskName,
    //   dueDate: dueDate,
    //   taskDetail: taskDetail,
    //   status: "To do",
    // };

    // console.log("newTask= " + JSON.stringify(newTask));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label className="label-md">Task Name</label>
          <input
            onChange={handleNameChange}
            className="input-primary"
            type="text"
          />
        </div>
        <div className="form-row">
          <label className="label-md">Due date</label>
          <input
            onChange={handleDateChange}
            className="input-primary"
            type="date"
          />
        </div>

        <div className="form-row">
          <label className="label-md">Task Details</label>
          <textarea
            onChange={handleDetailsChange}
            className="input-primary"
            name=""
            id=""
            cols="30"
            rows="10"></textarea>
        </div>
        <button className="button-primary" type="submit">
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTaskForm;
