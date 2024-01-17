import dices from "../assets/dices 1.png";
const Home = () => {
  return (
    <div>
      <main>
        <div className="max-w-[1180px] h-[100vh] m-auto bg-white-300 flex items-center">
          <img src={dices} alt="dices" className="img-fluid" />
          <div>
            <h1 className="text-[96px] m-auto items-center font-bold">
              DICE GAME
            </h1>
            <button className=" px-[10px] w-[10rem] text-[16px] rounded bg-black whitespace-nowrap text-white">
              Play Now
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
