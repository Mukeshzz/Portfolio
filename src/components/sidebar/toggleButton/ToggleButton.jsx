import React from "react";

function ToggleButton({ setOpen }) {
  return (
    <button
      onClick={() => setOpen((prev) => !prev)}
      className="w-[50px] h-[50px] rounded-[50%] fixed top-[25px] left-[25px] bg-[transparent] text-[none] cursor-pointer"
    >
      <svg
        width="23"
        height="23"
        viewBox="0 0 23 23"
        
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 1H302" strokeWidth="3 " stroke="black"
        strokeLinecap="round" 
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5"},
          open: { d: "M 3 16.5 L 17 2.5"},
        }}/>
      </svg>
      {/* Button */}
    </button>
  );
}

export default ToggleButton;
