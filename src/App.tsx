import { useContext, useEffect, useMemo, useRef } from "react";
import CharacterColumns from "./components/CharacterColumns";
import EpisodesSection from "./components/EpisodesSection";
import Header from "./components/Header";
import { CharacterContext } from "./context/characterContext";

const App: React.FC = () => {
  const { character1, character2 } = useContext(CharacterContext);

  const renderEpisodesSection = useMemo(() => {
    if (character1 && character2) {
      return <EpisodesSection />;
    }
    return <p className="text-main font-sono drop-shadow-fontShadow">Select characters to begin</p>;
  }, [character1, character2]);

  return (
    <div className="w-screen h-screen bg-black text-2xl font-sono-400 overflow-auto flex flex-col items-center">
      <Header />
      <CharacterColumns />
      {renderEpisodesSection}
    </div>
  );
};

export default App;
