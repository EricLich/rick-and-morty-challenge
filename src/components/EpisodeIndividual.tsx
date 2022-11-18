import React, { useContext, useEffect, useState } from "react";
import { CharacterContext } from "../context/characterContext";
import { Character, Episode } from "../utils/types";

interface EpisodeIndividualProps {
  selectedCharacter: Character;
  otherCharacterId: string;
}

const EpisodeIndividual: React.FC<EpisodeIndividualProps> = ({
  selectedCharacter,
  otherCharacterId,
}) => {
  const { episodes } = useContext(CharacterContext);
  const [aloneEpisodes, setAloneEpisodes] = useState<Episode[]>([]);

  const getAloneEpisodes = (): Episode[] => {
    const aloneEpisodes = episodes!.map((episode) => {
      let characterIds = episode.characters.map((character) => {
        let splittedUrl = character.split("/");
        return splittedUrl[splittedUrl.length - 1];
      });

      if (
        characterIds.includes(selectedCharacter.id.toString()) &&
        !characterIds.includes(otherCharacterId.toString())
      ) {
        return episode;
      }
    });
    return aloneEpisodes.filter((aloneEpisodes) => aloneEpisodes) as Episode[];
  };

  useEffect(() => {
    setAloneEpisodes(getAloneEpisodes());
  }, [selectedCharacter, otherCharacterId]);

  return (
    <div className="w-[30%] text-white flex flex-col justify-start items-start border border-main h-full shadow-border-shadow rounded-md">
      <div className="w-full flex items-center justify-center border-b border-main p-4">
        <h3 className="text-main font-sono drop-shadow-fontShadow text-[16px] text-center">
          Character #{selectedCharacter.id} - Only Episodes
        </h3>
      </div>
      {aloneEpisodes.length > 0 && (
        <div className="p-4 overflow-y-auto">
          {aloneEpisodes.map((episode) => (
            <p
              key={episode.id}
              className="text-main font-sono drop-shadow-fontShadow text-[16px] mb-2 text-left"
            >
              {episode.episode} - {episode.name} - {episode.air_date}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default EpisodeIndividual;
