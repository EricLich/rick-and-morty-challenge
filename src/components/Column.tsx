import React from "react";
import { Character } from "../utils/types";

interface ColumnProps {
  colNum: number;
  characters: Character[];
}

const Column: React.FC<ColumnProps> = ({ colNum, characters }) => {
  return <div className="text-white w-[50%] p-3 border border-main h-full shadow-border-shadow rounded-md"></div>;
};

export default Column;
