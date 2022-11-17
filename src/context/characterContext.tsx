import { createContext, ReactNode, useState } from "react";
import { useEpisodes } from "../hooks/useEpisodes";

import { ApiResponseFormat, Character, Episode } from "../utils/types";

export interface CharacterContextValues {
  character1: Character | null;
  character2: Character | null;
  episodes: Episode[] | null;
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
  episodes: null,
  selectCharacters: (colNum: number, character: Character): void => {},
});

const Characters: React.FC<CharactersProps> = ({ children }) => {
  const [character1, setCharacter1] = useState<Character | null>(null);
  const [character2, setCharacter2] = useState<Character | null>(null);
  const { episodes, error, loading } = useEpisodes(`${import.meta.env.VITE_API_URL}/episode`);

  console.log(episodes);

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
    <CharacterContext.Provider value={{ character1, character2, episodes, selectCharacters }}>
      {children}
    </CharacterContext.Provider>
  );
};

export default Characters;
