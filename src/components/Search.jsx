import React, { useState } from "react";

export const Search = ({ userTerm }) => {
  const [term, setTerm] = useState("");

  // onSubmit
  const onSubmit = (e) => {
    e.preventDefault();

    // call func prop
    userTerm(term);

    // reset the state
    setTerm('');
  }

  return (
    <form onSubmit={onSubmit} className="d-flex justify-content-left mt-2 mb-3">
      <div className="input-group" style={{ width: 40 + "em" }}>
        <input
          type="text"
          className="form-control"
          placeholder="Search for a term..."
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button className="btn btn-light" type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="hsl(288, 80%, 60%)"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
      </div>
    </form>
  );
};
