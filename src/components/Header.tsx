const Header = () => {
  return (
    <div className="w-full min-h-[80px] top-0 z-50 border-b border-main shadow-border-shadow text-main font-sono drop-shadow-fontShadow flex justify-center items-center text-center">
      <nav className="w-full h-full max-w-[1300px] m-auto flex items-center justify-center">
        <h1 className="text-[20px] w-[80%] md:text-base lg:text-2xl md:w-full">
          Rick and Morty character selector
        </h1>
      </nav>
    </div>
  );
};

export default Header;
