import { useContext, useMemo, lazy, Suspense } from "react";

import { CharacterContext } from "../context/characterContext";
/* import EpisodeIndividual from "./EpisodeIndividual";
import SharedEpisodes from "./SharedEpisodes"; */

const EpisodeIndividual = lazy(() => import("./EpisodeIndividual"));
const SharedEpisodes = lazy(() => import("./SharedEpisodes"));

const EpisodesSection = () => {
  const { character1, character2 } = useContext(CharacterContext);

  const renderEpisodesSection = useMemo(() => {
    if (character1 && character2) {
      return (
        <Suspense
          fallback={
            <h2 className="m-auto text-main font-sono drop-shadow-fontShadow">Loading...</h2>
          }
        >
          <EpisodeIndividual selectedCharacter={character1} otherCharacterId={character2.id} />
          <SharedEpisodes />
          <EpisodeIndividual selectedCharacter={character2} otherCharacterId={character1.id} />
        </Suspense>
      );
    }
  }, [character1, character2]);

  return (
    <div className="w-[95%] md:w-[90%] h-auto max-h-[35%] max-w-[1300px] mx-auto mb-6 flex flex-col md:flex-row justify-between items-center gap-5 md:gap-2">
      {renderEpisodesSection}
    </div>
  );
};

export default EpisodesSection;
