import React, { useContext, useMemo } from "react";

import { Character } from "../utils/types";
import { CharacterContext, PossibleColumns } from "../context/characterContext";

interface CharacterCard {
  character: Character;
  colNum: number;
}

const CharacterCard: React.FC<CharacterCard> = ({ character, colNum }) => {
  const { character1, character2, selectCharacters } = useContext(CharacterContext);

  const isSelected = useMemo(() => {
    if (colNum === PossibleColumns.COL_ONE && character.id === character1?.id) {
      return "";
    }

    if (colNum === PossibleColumns.COL_TWO && character.id === character2?.id) {
      return "";
    }
  }, [character1, character2]);

  return (
    <div
      className={`rounded-md overflow-hidden flex justify-start items-center h-[120px] cursor-pointer bg-btnBg ${isSelected}`}
      onClick={() => selectCharacters(colNum, character)}
    >
      <img src={character.image} alt={`${character.name} image`} className="h-[120px]" />
      <div className="h-full p-2 flex flex-col justify-between items-start text-[15px]">
        <span className="text-main font-sono drop-shadow-fontShadow">{character.name}</span>

        <span className="text-main font-sono drop-shadow-fontShadow">{character.status}</span>

        <span className="text-main font-sono drop-shadow-fontShadow">{character.species}</span>
      </div>
    </div>
  );
};

export default CharacterCard;
