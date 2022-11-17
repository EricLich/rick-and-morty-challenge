import { createContext, ReactNode, useState } from "react";

import { Character } from "../utils/types";

export interface CharacterContextValues {
  character1: Character | null;
  character2: Character | null;
  selectCharacters: (characterNum: number, character: Character) => void;
}

interface CharactersProps {
  children: ReactNode;
}

const CharacterContext = createContext<CharacterContextValues | null>(null);

export const Characters: React.FC<CharactersProps> = ({ children }) => {
  const [character1, setCharacter1] = useState<Character | null>(null);
  const [character2, setCharacter2] = useState<Character | null>(null);

  const selectCharacters = (
    characterNum: number,
    character: Character
  ): void => {
    if (characterNum === 1) {
      setCharacter1((prevCharacter) => (prevCharacter = character));
    }

    if (characterNum === 2) {
      setCharacter2((prevCharacter) => (prevCharacter = character));
    }
  };

  return (
    <CharacterContext.Provider
      value={{ character1, character2, selectCharacters }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
