import { ApiResponseFormat, Character } from "../utils/types";
import Column from "./Column";
import { useFetch } from "../hooks/useFetch";
import { API_URL } from "../api/apiConstants";
import { useContext, useEffect } from "react";
import { CharacterContext } from "../context/characterContext";

const CharacterColumns = () => {
  const { characterPages, setCharacterPages } = useContext(CharacterContext);
  const { data, error, loading } = useFetch<ApiResponseFormat<Character>>(`${API_URL}/character`);
  setCharacterPages(data[0]?.info?.pages);
  const characters = data[0]?.results as Character[];

  return (
    <div className="text-white w-[80%] h-[60%] max-w-[1200px] mx-auto mt-8 mb-8 flex overflow-y-auto gap-5">
      <Column colNum={1} characters={characters} />
      <Column colNum={2} characters={characters} />
    </div>
  );
};

export default CharacterColumns;
