import React from "react";
import Head from "next/head";

export default function App() {

    // NOT a even a SINGLE useState babyyyyyyy! 😎
  
    const submitForm = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const inputObject = Object.fromEntries(formData); // convert the FormData object to a JSON object
      console.log(inputObject);
    };
  
    return (
      <div className="App"><Head><title>Learning sandbox | Pragatheeswaran K</title><meta name="robots" content="noindex,nofollow" /></Head>
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