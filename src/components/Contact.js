import React, { useState } from "react";
import "../styles/contact.css";
import { v4 as uuidv4 } from "uuid";

function Contact() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [email, setEmail] = useState("");

  const submitEmail = (e) => {
    setEmail(e.target.value);
  };

  const inputChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const submitInput = (e) => {
    e.preventDefault();
    setTodo([
      ...todo,
      { text: input, email: email, completed: false, id: uuidv4() },
    ]);
    setInput("");
  };

  return (
    <div className="contact-section">
      <div className="container">
        <div className="register">
          <div className="main">
            <h1>Register to train: </h1>
          </div>
          <form className="form-1">
            <div className="username">
              <label htmlFor="username">Username:</label>
              <input
                id="username"
                type="text"
                required
                value={input}
                placeholder="username"
                onChange={inputChange}
              />
            </div>

            <div className="email">
              <label htmlFor="email">E-Mail:</label>
              <input
                id="email"
                type="e-mail"
                placeholder="example@hotmail.com"
                required
                value={email}
                onChange={submitEmail}
              />
            </div>
          </form>
          <button onClick={submitInput}>Submit</button>
          <div className="users">
            <h2>Users:</h2>
            <ul>
              {todo.map((td) => (
                <li key={td.id}>
                  {td.text} <span>{td.email}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
