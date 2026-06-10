import bgImage from "./assets/images/HelpPage.jpg";

const App = () => {
  return (
    <>
      <div className="bg-green-200 text-amber-800 p-3.25 flex justify-between">
        <div className="text-center font-bold">Cravings</div>
        <div className="flex gap-2.5">
          <div className="flex justify-center align-center ">
            <button className="btn btn-primary  bg-amber-700 h-8 w-20 text-center text-white rounded-2xl hover:bg-amber-400 active:bg-amber-500">
              Login
            </button>
          </div>
          <div className="flex justify-center align-center ">
            <button className="btn btn-primary  bg-amber-700 h-8 w-20 text-center text-white rounded-2xl  hover:bg-amber-500 active:bg-amber-500">
              Register cv c gf, hnmer,jgndflj
            </button>
          </div>
        </div>
      </div>

      <div class="w-full h-screen bg-[url('./assets/images/HelpPage.jpg')] bg-cover bg-center">
       
      </div>

      <div className="flex justify-center align-center m-2">
        <button className="btn btn-primary  bg-blue-700 h-10 w-25 text-center text-white rounded-2xl">
          Submit
        </button>
      </div>
    </>
  );
};

export default App;

3;
