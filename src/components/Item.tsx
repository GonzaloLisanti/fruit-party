import React from "react";

interface ItemProps {
  name: string;
  score: number;
  index: number;
}

const Item: React.FC<ItemProps> = ({ name, score, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{score}</td>
    </tr>
  );
};

export default Item;
