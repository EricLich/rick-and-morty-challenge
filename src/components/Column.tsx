import React, { useMemo } from "react";
import { Character } from "../utils/types";
import CharacterCard from "./CharacterCard";

interface ColumnProps {
  colNum: number;
  characters: Character[];
}

const Column: React.FC<ColumnProps> = ({ colNum, characters }) => {
  const renderCharacters = useMemo(() => {
    return characters?.map((character: Character) => (
      <CharacterCard character={character} key={character.id} colNum={colNum} />
    ));
  }, [characters]);

  return (
    <div className="text-white w-[50%] p-4 border border-main h-full shadow-border-shadow rounded-md grid grid-cols-2 gap-3 overflow-y-auto">
      {renderCharacters}
    </div>
  );
};

export default Column;
