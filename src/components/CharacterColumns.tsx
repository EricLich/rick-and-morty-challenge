import { useContext } from "react";

import { API_URL } from "../api/apiConstants";
import { ApiResponseFormat, Character } from "../utils/types";
import { CharacterContext } from "../context/characterContext";
import Column from "./Column";
import { useFetch } from "../hooks/useFetch";

const CharacterColumns = () => {
  const { allCharacters, setCharacterPages } = useContext(CharacterContext);
  const { data, error, loading } = useFetch<ApiResponseFormat<Character>>(`${API_URL}/character`);

  setCharacterPages(data[0]?.info?.pages);

  const characters = data[0]?.results as Character[];

  if (!allCharacters.has(1)) {
    allCharacters.set(1, characters);
  }

  return (
    <div className="text-white w-[80%] h-[60%] max-w-[1200px] mx-auto mt-8 mb-8 flex overflow-y-auto gap-5">
      <Column colNum={1} loading={loading} />
      <Column colNum={2} loading={loading} />
    </div>
  );
};

export default CharacterColumns;
