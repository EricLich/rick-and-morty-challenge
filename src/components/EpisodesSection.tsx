import EpisodeIndividual from "./EpisodeIndividual";
import SharedEpisodes from "./SharedEpisodes";

const EpisodesSection = () => {
  return (
    <div className="w-[80%] h-[80%] max-w-[1200px] m-auto mt-6 flex justify-between items-center">
      <EpisodeIndividual />
      <SharedEpisodes />
      <EpisodeIndividual />
    </div>
  );
};

export default EpisodesSection;
