import CharacterColumns from "./components/CharacterColumns";
import Header from "./components/Header";
import Characters from "./context/characterContext";

const App: React.FC = () => {
  return (
    <Characters>
      <div className="w-screen h-screen bg-black text-2xl font-sono-400 overflow-auto">
        <Header />
        <CharacterColumns />
      </div>
    </Characters>
  );
};

export default App;
