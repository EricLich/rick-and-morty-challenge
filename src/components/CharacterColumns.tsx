import Column from "./Column";

const CharacterColumns = () => {
  return (
    <div className="text-white w-[80%] h-[60%] max-w-[1200px] mx-auto mt-8 mb-8 flex overflow-y-auto gap-5">
      <Column colNum={1} characters={[]} />
      <Column colNum={2} characters={[]} />
    </div>
  );
};

export default CharacterColumns;
