import React, { useContext } from "react";
import { CharacterContext } from "../context/characterContext";

const SharedEpisodes = () => {
  const { character1, character2 } = useContext(CharacterContext);

  return (
    <div className="flex-1 p-4 border border-main h-full shadow-border-shadow rounded-md">
      <div className="w-full flex items-center justify-center">
        <h3 className="text-main font-sono drop-shadow-fontShadow text-[16px] text-center">
          Character #{character1?.id} & Character #{character2?.id} - Shared Episodes
        </h3>
      </div>
    </div>
  );
};

export default SharedEpisodes;
