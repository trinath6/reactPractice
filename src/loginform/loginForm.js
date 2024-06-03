import { useState } from "react";

let LoginForm = () => {
  let [UserName, SetUserName] = useState("");
  let [UserPassword, SetUserPassword] = useState("");

  let formSubmited = (e) => {
    e.preventDefault();  
    const userInfo = {
      name: UserName,
      password: UserPassword,
    };
    console.log(userInfo);
  };

  let handleUsernameChange = (e) => {
    SetUserName(e.target.value);
    console.log(e.target.value);
  };  

  let handlePasswordChange = (e) => {
    SetUserPassword(e.target.value);
    console.log(e.target.value);
  };

  let imageStyle = {
    opacity: 0.3,
    height: '100vh',
    width: '100vw',
    objectFit: 'cover',
  };

  let overlayStyle={
    position:"relative",
    top:-600  
  }

  
  return (
    <>
     
      <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      <img style={imageStyle} src="https://cdn-magazine.nutrabay.com/wp-content/uploads/2023/02/strong-bodybuilder-doing-heavy-weight-exercise-back-machine-1-1067x800.jpg" class="img-thumbnail" alt="..."/>
        <div style={overlayStyle}>
          <div className="card" style={{backgroundColor:"rgba(255, 255, 255, 0.221)"}}>
            <div className="card-body">
              <h5 className="card-title">Login</h5>
              <form onSubmit={formSubmited}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    UserName/Registered Mobile Number
                  </label>
                  <input
                  style={{backgroundColor:"rgba(255, 255, 255, 0.221)",}}
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Text here"
                    onChange={handleUsernameChange}
                    value={UserName}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                  style={{backgroundColor:"rgba(255, 255, 255, 0.221)"}}
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    onChange={handlePasswordChange}
                    value={UserPassword}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn btn-secondary ms-2"
                    style={{ backgroundColor: "orange" }}
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary ms-2"
                    style={{ backgroundColor: "orange" }}
                  >
                    Register Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
