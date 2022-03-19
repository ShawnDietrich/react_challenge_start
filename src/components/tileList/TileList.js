import React from "react";
import {Tile} from '../../components/tile/Tile'

export const TileList = (props) => {
  return (
    <div>
     {props.objectList.map((prop, i) => {
       return <Tile 
       contact={prop}
       key={i}
       />
     })}
    </div>
  );
};
