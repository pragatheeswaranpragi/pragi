import React from "react";

export default function App() {

    // NOT a even a SINGLE useState babyyyyyyy! 😎
  
    const submitForm = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const inputObject = Object.fromEntries(formData); // convert the FormData object to a JSON object
      console.log(inputObject);
    };
  
    return (
      <div className="App">
        <form onSubmit={submitForm}>
          <div>
            <input name="email" placeholder="email" />
          </div>
  
          <div>
            <input name="password" placeholder="password" />
          </div>
  
          <div>
            <input name="phone" placeholder="phone" />
          </div>
  
          <br />
  
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }