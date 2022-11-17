import { useContext, useMemo } from "react";

import { CharacterContext } from "../context/characterContext";
import EpisodeIndividual from "./EpisodeIndividual";
import SharedEpisodes from "./SharedEpisodes";

const EpisodesSection = () => {
  const { character1, character2 } = useContext(CharacterContext);

  const renderEpisodesSection = useMemo(() => {
    if (character1 && character2) {
      return (
        <>
          <EpisodeIndividual selectedCharacter={character1} />
          <SharedEpisodes />
          <EpisodeIndividual selectedCharacter={character2} />
        </>
      );
    }
  }, [character1, character2]);

  return (
    <div className="w-[80%] h-auto max-h-[50%] max-w-[1200px] m-auto mt-6 flex justify-between items-center gap-2">
      {renderEpisodesSection}
    </div>
  );
};

export default EpisodesSection;
