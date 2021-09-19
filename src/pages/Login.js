import React from 'react';
export default function Login() {
  return (
    <div>
      <h1>Login </h1>
      <form>
        <div className="login">
          <div className="form-control">
            <label>Username:</label>
            <input type="text" name="username" id="username" />
          </div>
          <div className="form-control">
            <label>Password:</label>
            <input type="text" name="password" id="password" />
          </div>
          <div>
            <div className="form-control">
              <label>Do you want to save your password:</label>
              <input type="checkbox" name="username" id="username" />
            </div>
            <input type="submit" value="Login" />
          </div>
        </div>
      </form>
    </div>
  );
}
