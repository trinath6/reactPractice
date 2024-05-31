import { useState } from "react";

let ControlledForm = () => {
  const [userName, setName] = useState(null);
  const [userPassword, setPassword] = useState(null);
  const [message, setMessage] = useState(false);
  const [flag, setFlag] = useState(false);

  const checkUser = (event) => {
    const user = event.target.value;
    setName(user);
    setFlag(user.length > 10);
  };

  const checkPassword = (event) => {
    const userPassword = event.target.value;
    setPassword(userPassword);
  };

  const controlForm = (event) => {
    event.preventDefault();
    const userinfo = {
      username: userName,
      password: userPassword,
    };

    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userinfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setMessage(true);
          alert(data.message);
        } else {
          console.log(data)
          setMessage(false);

          console.log(data.lastName)
        }
      });
  };

  return (
    <div>
        <form onSubmit={controlForm}>
          <div className="mb-3 mt-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="text"
              className="form-control"
              id="text"
              placeholder="Enter email"
              name="name"
              onChange={checkUser}
              value={userName}
            />
            {flag && (
              <span style={{ color: "red" }}>Enter less than 10 characters</span>
            )}

            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter Password"
              name="password"
              onChange={checkPassword}
              value={userPassword}
            />
          </div>
          {!flag && (
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          )}
        </form>
      
    </div>
  );
};

export default ControlledForm;
