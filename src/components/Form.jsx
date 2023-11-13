import React from "react";

const Form = () => {
  return (
    <form className="container">
      <h1>sign in</h1>
      <div className="input-group">
        <input type="text" placeholder="Email or phone number" required />
        <input type="password" placeholder="Password" required />
      </div>
      <button type="submit">sign in</button>
      <span className="option">
        <span>
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">Remember me</label>
        </span>
        <a href="#">Need help?</a>
      </span>
      <div className="bottom">
        <p>New to Netflix? &nbsp;</p>
        <p>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          &nbsp;
        </p>
      </div>
    </form>
  );
};

export default Form;
