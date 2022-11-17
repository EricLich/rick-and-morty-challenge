import { useFetch } from "../hooks/useFetch";
import { ApiResponseFormat } from "../utils/types";
import Column from "./Column";

const CharacterColumns = () => {
  const { data, error, loading } = useFetch<ApiResponseFormat>(
    `${import.meta.env.VITE_API_URL}/character`
  );
  const characters = data[0]?.results;

  return (
    <div className="text-white w-[80%] h-[60%] max-w-[1300px] mx-auto mt-8 mb-8 flex overflow-y-auto gap-5">
      <Column colNum={1} characters={characters} />
      <Column colNum={2} characters={characters} />
    </div>
  );
};

export default CharacterColumns;
