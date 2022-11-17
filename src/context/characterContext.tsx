import { createContext, ReactNode, useState } from "react";

import { Character } from "../utils/types";

export interface CharacterContextValues {
  character1: Character | null;
  character2: Character | null;
  selectCharacters: (colNum: number, character: Character) => void;
}

interface CharactersProps {
  children: ReactNode;
}

export enum PossibleColumns {
  COL_ONE = 1,
  COL_TWO = 2,
}

export const CharacterContext = createContext<CharacterContextValues>({
  character1: null,
  character2: null,
  selectCharacters: (colNum: number, character: Character): void => {},
});

const Characters: React.FC<CharactersProps> = ({ children }) => {
  const [character1, setCharacter1] = useState<Character | null>(null);
  const [character2, setCharacter2] = useState<Character | null>(null);

  const selectCharacters = (colNum: number, character: Character): void => {
    if (colNum === PossibleColumns.COL_ONE) {
      setCharacter1((prevCharacter) => (prevCharacter = character));
    }

    if (colNum === PossibleColumns.COL_TWO) {
      setCharacter2((prevCharacter) => (prevCharacter = character));
    }
  };

  return (
    <CharacterContext.Provider value={{ character1, character2, selectCharacters }}>
      {children}
    </CharacterContext.Provider>
  );
};

export default Characters;
