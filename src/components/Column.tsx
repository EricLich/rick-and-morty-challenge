import React, { useContext, useMemo } from "react";
import { Character } from "../utils/types";
import CharacterCard from "./CharacterCard";
import Pagination from "@mui/material/Pagination";
import { CharacterContext } from "../context/characterContext";

interface ColumnProps {
  colNum: number;
  characters: Character[];
}

const Column: React.FC<ColumnProps> = ({ colNum, characters }) => {
  const { characterPages } = useContext(CharacterContext);
  const renderCharacters = useMemo(() => {
    return characters?.map((character: Character) => (
      <CharacterCard character={character} key={character.id} colNum={colNum} />
    ));
  }, [characters]);

  return (
    <div className="relative">
      <div className="p-4 border border-main h-full shadow-border-shadow rounded-md grid grid-cols-2 gap-3 overflow-y-auto">
        {renderCharacters}
      </div>
      <div className="absolute w-[65%] flex justify-center bottom-2 left-0 right-0 ml-auto mr-auto bg-selectedBtnBg rounded-md p-2">
        <Pagination
          count={characterPages}
          variant="outlined"
          color="standard"
          className="!text-white"
          shape="rounded"
        />
      </div>
    </div>
  );
};

export default Column;
