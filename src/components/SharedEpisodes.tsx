import React, { useContext, useEffect, useState } from "react";
import { CharacterContext } from "../context/characterContext";
import { Episode } from "../utils/types";

const SharedEpisodes = () => {
  const { character1, character2, episodes } = useContext(CharacterContext);
  const [sharedEpisodes, setSharedEpisodes] = useState<Episode[]>([]);

  const getSharedEpisodes = (): Episode[] => {
    const sharedEpisodes = episodes!.map((episode) => {
      let characterIds = episode.characters.map((character) => {
        let splittedUrl = character.split("/");
        return splittedUrl[splittedUrl.length - 1];
      });
      if (
        characterIds.includes(character1!.id.toString()) &&
        characterIds.includes(character2!.id.toString())
      ) {
        return episode;
      }
    });
    return sharedEpisodes.filter((sharedEpisodes) => sharedEpisodes) as Episode[];
  };

  useEffect(() => {
    setSharedEpisodes(getSharedEpisodes());
  }, [character1, character2]);

  return (
    <div className="order-1 md:order-none w-full md:w-[40%] flex flex-col justify-start items-start border border-main h-auto max-h-[300px] md:h-full shadow-border-shadow rounded-md">
      <div className="w-full flex items-center justify-center p-2 lg:p-4 border-b border-main">
        <h3 className="text-main font-sono drop-shadow-fontShadow text-[14px] md:text-[14px] lg:text-[16px] text-center">
          Character #{character1?.id} & #{character2?.id} - Shared Episodes
        </h3>
      </div>
      {sharedEpisodes.length > 0 && (
        <div className="p-2 md:p-3 lg:p-4 !overflow-y-auto overflow-x-hidden w-full">
          {sharedEpisodes.map((episode) => (
            <p
              key={episode.id}
              className={`text-main font-sono drop-shadow-fontShadow text-[12px] md:text-[14px] lg:text-[16px] mb-2 text-left pt-1 lg:pt-2 pb-3 lg:pb-4 w-full ${
                sharedEpisodes.length > 1 && "border-b border-main "
              } `}
            >
              {episode.episode} - {episode.name} - {episode.air_date}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default SharedEpisodes;
