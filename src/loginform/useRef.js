import { useRef, useState } from "react";

let UncontrolledForms = () => {
  let userRefer = useRef(null);
  let [isError, setIsError] = useState(false);

  let controlForm = (event) => {
    event.preventDefault();

    if (userRefer.current.value.length < 3) {
      setIsError(true);
    } else {
      setIsError(false);
      console.log(userRefer.current.value);
    }
  };
  
  return (
    <form onSubmit={controlForm}>
      <div className="mb-3 mt-3">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="text"
          className="form-control"
          id="email"
          placeholder="Enter email"
          name="email"
          ref={userRefer}
        />
         {isError && (
        <span style={{ color: "red" }}>Enter more than three characters</span>
      )}    
      </div>
     
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default UncontrolledForms;
