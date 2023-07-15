import "./contacts.css";

const InputFormat = ({ handleSubmit, formStatusChange }) => {
  return (
    <form className="contact_form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label>Username:</label>
        <input
          className="task_input"
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
        />
      </div>

      <div className="input-container">
        <label>Name:</label>
        <input
          className="task_input"
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
        />
      </div>

      <div className="input-container">
        <label>Phone:</label>
        <input
          className="task_input"
          type="text"
          id="phone"
          name="phone"
          placeholder="Enter your phone number"
        />
      </div>

      <button className="submit_btn" type="submit">
        Submit
      </button>
      <button
        className="submit_btn"
        type="button"
        onClick={() => formStatusChange()}
      >
        Cancel Form
      </button>
    </form>
  );
};

export default InputFormat;
