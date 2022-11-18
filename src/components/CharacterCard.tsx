import React, { useContext, useMemo } from "react";

import { Character } from "../utils/types";
import { CharacterContext, PossibleColumns } from "../context/characterContext";
import StatusIcon from "./StatusIcon";

interface CharacterCard {
  character: Character;
  colNum: number;
}

const CharacterCard: React.FC<CharacterCard> = ({ character, colNum }) => {
  const { character1, character2, selectCharacters } = useContext(CharacterContext);

  const isSelected = useMemo(() => {
    if (colNum === PossibleColumns.COL_ONE && character.id === character1?.id) {
      return true;
    }

    if (colNum === PossibleColumns.COL_TWO && character.id === character2?.id) {
      return true;
    }

    return false;
  }, [character1, character2]);

  return (
    <div
      className={`rounded-md overflow-hidden flex justify-start items-center h-[120px] cursor-pointer bg-btnBg hover:scale-105 transition-all duration-150 ${
        isSelected && "!bg-selectedBtnBg"
      }`}
      onClick={() => selectCharacters(colNum, character)}
    >
      <div className="w-[40%] h-full bg-center">
        <img
          src={character.image}
          alt={`${character.name} image`}
          className="h-full bg-no-repeat bg-cover "
        />
      </div>
      <div className="h-full p-2 flex flex-1 flex-col items-start text-[15px] max-w-[60%]">
        <div className="w-full text-main font-sono drop-shadow-fontShadow flex items-center gap-2">
          <span className="w-[70%] truncate hover:text-clip">{character.name}</span>{" "}
          <StatusIcon status={character.status} />
        </div>

        <span className="text-main font-sono drop-shadow-fontShadow">{character.species}</span>
      </div>
    </div>
  );
};

export default CharacterCard;
