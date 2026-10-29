import React from "react";

const MyButton = ({ onClick }) => {
  console.log('MyButton render oldu!');

  return (
    <button onClick={onClick} className="border-2 hover:cursor-pointer">
      MyButton
    </button>
  );
};

export default React.memo(MyButton);
