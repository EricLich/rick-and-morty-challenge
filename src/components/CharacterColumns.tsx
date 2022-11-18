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

  if (!allCharacters.get(1)) {
    allCharacters.set(1, characters);
  }

  return (
    <div className="text-white w-[95%] md:w-[90%] h-[70vh] md:h-[50%] max-w-[1300px] mx-auto mt-4 md:mt-8 mb-4  md:mb-8 flex flex-col md:flex-row md:overflow-y-auto overflow-x-hidden gap-3 md:gap-5">
      <Column colNum={1} loading={loading} />
      <Column colNum={2} loading={loading} />
    </div>
  );
};

export default CharacterColumns;
