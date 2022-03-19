import React from "react";

export const Tile = (props) => {
  const contact = Object.values(props.contact);

  return (
    <div className="tile-container">
      {contact.map((value, i) => {
       if(i===0) {return <p className='tile-title' key={i}>{value}</p>}
       return <p className='tile' key={i}>{value}</p>
      })}
    </div>
  );
};
