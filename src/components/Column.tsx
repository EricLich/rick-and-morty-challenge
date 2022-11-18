import React, { useContext, useMemo, useState } from "react";
import Pagination from "@mui/material/Pagination";

import { ApiResponseFormat, Character } from "../utils/types";
import CharacterCard from "./CharacterCard";
import { CharacterContext } from "../context/characterContext";
import { API_URL } from "../api/apiConstants";
import { customFetch } from "../services/fetch";

interface ColumnProps {
  colNum: number;
  loading: boolean;
}

const Column: React.FC<ColumnProps> = ({ colNum, loading }) => {
  const { allCharacters, characterPages } = useContext(CharacterContext);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loadingNewPages, setLoadingNewPages] = useState<boolean>(false);

  const renderCharacters = useMemo(() => {
    return allCharacters
      ?.get(currentPage)
      ?.map((character: Character) => (
        <CharacterCard character={character} key={character.id} colNum={colNum} />
      ));
  }, [characterPages, currentPage]);

  const handlePageChange = (e: React.ChangeEvent<any>, value: number) => {
    e.preventDefault();
    if (!allCharacters.has(value)) {
      setLoadingNewPages(true);
      customFetch(`${API_URL}/character/?page=${value}`).then(
        (res: ApiResponseFormat<Character>) => {
          allCharacters.set(value, res.results);
          setCurrentPage((prevPage) => (prevPage = value));
          setLoadingNewPages(false);
        }
      );
    } else {
      setCurrentPage((prevPage) => (prevPage = value));
    }
  };

  return (
    <div className="relative w-[50%]">
      <div
        className={`p-4 border border-main h-full shadow-border-shadow rounded-md grid grid-cols-2 gap-3 overflow-y-auto content-start ${
          loadingNewPages || loading ? "!grid-cols-none !content-center" : ""
        }`}
      >
        {loadingNewPages || loading ? (
          <p className="m-auto text-main font-sono drop-shadow-fontShadow">Loading...</p>
        ) : (
          renderCharacters
        )}
      </div>
      <div className="absolute w-[65%] flex justify-center bottom-2 left-0 right-0 ml-auto mr-auto bg-selectedBtnBg rounded-md p-2">
        {!loading && characterPages > 0 && (
          <Pagination
            count={characterPages}
            variant="outlined"
            color="standard"
            shape="rounded"
            onChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

export default Column;
