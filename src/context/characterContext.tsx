import { createContext, ReactNode, useState } from "react";
import { API_URL } from "../api/apiConstants";
import { useEpisodes } from "../hooks/useEpisodes";

import { Character, Episode } from "../utils/types";

export interface CharacterContextValues {
  allCharacters: Map<number, Character[]>;
  character1: Character | null;
  character2: Character | null;
  characterPages: number;
  episodes: Episode[] | null;
  selectCharacters: (colNum: number, character: Character) => void;
  setCharacterPages: (pageNum: number) => void;
}

interface CharactersProps {
  children: ReactNode;
}

export enum PossibleColumns {
  COL_ONE = 1,
  COL_TWO = 2,
}

export const CharacterContext = createContext<CharacterContextValues>({
  allCharacters: new Map(),
  character1: null,
  character2: null,
  episodes: null,
  characterPages: 0,
  selectCharacters: (colNum: number, character: Character): void => {},
  setCharacterPages: (pageNum: number) => {},
});

const Characters: React.FC<CharactersProps> = ({ children }) => {
  const [character1, setCharacter1] = useState<Character | null>(null);
  const [character2, setCharacter2] = useState<Character | null>(null);
  const [characterPages, setCharacterPages] = useState<number>(0);
  const allCharacters = new Map<number, Character[]>();
  const { episodes, error, loading } = useEpisodes(`${API_URL}/episode`);

  const selectCharacters = (colNum: number, character: Character): void => {
    if (colNum === PossibleColumns.COL_ONE && character.id !== character1?.id) {
      setCharacter1((prevCharacter) => (prevCharacter = character));
    } else if (colNum === PossibleColumns.COL_ONE && character.id === character1?.id) {
      setCharacter1((prevCharacter) => (prevCharacter = null));
    }

    if (colNum === PossibleColumns.COL_TWO && character.id !== character2?.id) {
      setCharacter2((prevCharacter) => (prevCharacter = character));
    } else if (colNum === PossibleColumns.COL_TWO && character.id === character2?.id) {
      setCharacter2((prevCharacter) => (prevCharacter = null));
    }
  };

  return (
    <CharacterContext.Provider
      value={{
        character1,
        character2,
        episodes,
        characterPages,
        selectCharacters,
        setCharacterPages,
        allCharacters,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export default Characters;
