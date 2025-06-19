import React from "react";

const Body = () => {
  return (
    <div className="flex grow justify-center items-center">
    <div className="w-96 m-10">
      <div className="card w-96 bg-base-100 card-xl shadow-sm">
        <div className="card-body">
          <h2 className="card-title ">Login to X</h2>
          <label className="input validator m-1">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </g>
            </svg>
            <input
              type="text"
              required
              placeholder="Username"
              pattern="[A-Za-z][A-Za-z0-9\-]*"
              minlength="3"
              maxlength="30"
              title="Only letters, numbers or dash"
            />
          </label>
          <div className="justify-start  card-actions">
            <button class="btn btn-neutral m-1"> Login with Eye</button>
          </div>
          <div className="flex justify-center">
            <span>New user? Signup here</span>
          </div>
           
        </div>
      </div>
      {/* <p className="validator-hint">
            Must be 3 to 30 characters
            <br />
            containing only letters, numbers or dash
          </p> */}
    </div>
    </div>
  );
};

export default Body;
