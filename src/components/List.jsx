import React, { useContext } from "react";
import FruitContext from './FruitsContext';

function List() {
  const { fruitlist } = useContext(FruitContext);
  return (
    <ul>
      {
        fruitlist.map((item) => {
          return <li> {item} </li>
        })
      }
      {/* <li> Apple </li> <li> Banana </li> <li> Strawberry </li> */}
    </ul>
  );
}

export default List;
