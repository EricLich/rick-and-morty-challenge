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
          <EpisodeIndividual selectedCharacter={character1} otherCharacterId={character2.id} />
          <SharedEpisodes />
          <EpisodeIndividual selectedCharacter={character2} otherCharacterId={character1.id} />
        </>
      );
    }
  }, [character1, character2]);

  return (
    <div className="w-[90%] h-auto max-h-[35%] max-w-[1300px] mx-auto mb-6 flex justify-between items-center gap-2">
      {renderEpisodesSection}
    </div>
  );
};

export default EpisodesSection;
