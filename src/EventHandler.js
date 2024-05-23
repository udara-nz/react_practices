import React from "react";

// function EventHandler() {
//   const clickHandler = () => console.log("clicked");
//   return <button onClick={clickHandler}>Event Handler</button>;
// }

function EventHandler() {
  const mouseClick = () => console.log("Mouse Clicked");
  return <button onMouseOver={mouseClick}>Mouse Hover</button>;
}

export default EventHandler;
