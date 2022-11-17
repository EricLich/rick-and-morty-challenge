import { useContext } from "react";
import { CharacterContext } from "../context/characterContext";

const Header = () => {
  const { character1, character2, selectCharacters } = useContext(CharacterContext);
  return (
    <div className="w-full h-[80px]  top-0 z-50 border-b border-main shadow-border-shadow text-main font-sono drop-shadow-fontShadow flex justify-center items-center">
      <nav className="w-full h-full max-w-[1200px] m-auto flex items-center justify-center">
        Rick and Morty character selector
      </nav>
    </div>
  );
};

export default Header;
