import React from "react";

const Body = () => {
  return (
    <div>
        <div className="avatar">
  <div className="w-24 rounded">
    <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
  </div>
</div>
      <figure className="diff aspect-16/9" tabIndex={0}>
        <div className="diff-item-1" role="img" tabIndex={0}>
          <div className="bg-primary text-primary-content grid place-content-center text-9xl font-black">
            DAISY
          </div>
        </div>
        <div className="diff-item-2" role="img">
          <div className="bg-base-200 grid place-content-center text-9xl font-black">
            DAISY
          </div>
        </div>
        <div className="diff-resizer"></div>
      </figure>
    </div>
  );
};

export default Body;
