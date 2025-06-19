import React from "react";

const Body = () => {
  return (
    <div className="w-96 m-10">
      <div className="card w-96 bg-base-100 card-xl shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Xlarge Card</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="justify-end card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
