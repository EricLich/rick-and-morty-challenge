import { useContext } from "react";

import { CharacterContext } from "../context/characterContext";
import EpisodeIndividual from "./EpisodeIndividual";
import SharedEpisodes from "./SharedEpisodes";

const EpisodesSection = () => {
  const { character1, character2 } = useContext(CharacterContext);

  return (
    <div className="w-[80%] h-auto max-h-[50%] max-w-[1200px] m-auto mt-6 flex justify-between items-center">
      <EpisodeIndividual selectedCharacterName={character1!.name} />
      <SharedEpisodes />
      <EpisodeIndividual selectedCharacterName={character2!.name} />
    </div>
  );
};

export default EpisodesSection;
