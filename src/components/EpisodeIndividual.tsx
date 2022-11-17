import React from "react";
import { Character } from "../utils/types";

interface EpisodeIndividualProps {
  selectedCharacter: Character;
}

const EpisodeIndividual: React.FC<EpisodeIndividualProps> = ({ selectedCharacter }) => {
  return (
    <div className="w-[30%] text-white flex flex-col justify-start items-start p-4 border border-main h-full shadow-border-shadow rounded-md">
      <div className="w-full flex items-center justify-center">
        <h3 className="text-main font-sono drop-shadow-fontShadow text-[16px] text-center">
          Character #{selectedCharacter.id} - Only Episodes
        </h3>
      </div>
    </div>
  );
};

export default EpisodeIndividual;
