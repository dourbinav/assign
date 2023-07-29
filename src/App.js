import "./App.css";

function App() {
  return (
    <div className="page">
      <header className="bg-purple-700 h-40">
        <div className="flex space-x-4 pt-6 px-4">
          <button className="hover:bg-purple-500 bg-purple-700 text-slate-100 border-2 rounded-md  p-1 border-white">
            Interest
          </button>
          <button className="hover:bg-purple-500 bg-purple-700 text-slate-100  border-2 rounded-md  p-1 border-white">
            Message
          </button>
          <button className="hover:bg-purple-500 bg-purple-700 text-slate-100  border-2 rounded-md  p-1 border-white">
            Request
          </button>
        </div>
        <p className="text-slate-100 text-xs m-[18px]">
          1661 matches found based on your preferences
        </p>
      </header>
      <main className="relative bottom-10 bg-slate-200 rounded-3xl">
        <div className="p-1 space-y-2">
          <div className="bg-white space-y-2 rounded-3xl min-w-fit min-h-fit mx-4 py-1 ">
            <div className="bg-slate-200 rounded-3xl relative top-3  mx-10 h-40 ">
              <p className="p-0.5 z-10 absolute bg-white max-w-fit text-xs rounded-full">New member</p>
              <img className="absolute rounded-3xl h-40 w-[270px]"src="https://cdn.statusqueen.com/dpimages/thumbnail/Boy_Stylish__Dp_Image-2277.jpg" alt="/" />
              <div className="top-0 right-3 absolute space-x-1 p-1">
              <button className="  h-6 w-5 top-0 right-0 bg-slate-500 " >&#10084;</button>
              <button className="  h-6 w-5  bg-slate-500 " ><i class="fa-solid fa-user"></i></button>
              <button className="  h-6 w-5  bg-slate-500 " ><i class="fa fa-ellipsis-v"></i></button>
              </div>
              <p className="p-0.5 bg-white max-w-fit absolute right-0 bottom-0 text-xs rounded-full">Seen 2m ago</p>
            </div>
            <div className="px-10 space-y-2">
              <div className="flex justify-between pt-2">
                <p className="text-xl">Akshay Venu</p>
                <p className="p-1 rounded-full text-xs bg-slate-200">2h ago</p>
              </div>
              <div className="flex text-xs flex-wrap space-x-0.5 ">
                <p>30yrs</p>
                <span>|</span>
                <p>5'11</p>
                <span>|</span>
                <p>Software engineer</p>
                <span>|</span>
                <p>Malyalam</p>
                <span>|</span>
                <p>Vishvkarma</p>
                <span>|</span>
                <p>Bengaluru</p>
                <span>|</span>
                <p>karntaka</p>
              </div>
              <div className="flex justify-between m-1 ">
              <p className="bg-slate-300 rounded-full  p-2 text-xs ">Never married</p>
                <div className="flex flex-col">
                  <p className="text-xs">Match score-90%</p>
                  <span className="h-2 w-20 bg-green-400"></span>
                </div>
              </div>
              <div className="flex justify-around">
                <button className="p-1  w-1/3 rounded-full border-2 border-red-400  text-red-300 text-center ">
                  Reject
                </button>
                <button className="p-1 w-1/3 rounded-full border-2 bg-green-400   border-green-400  text-white text-center ">
                  Accept
                </button>
              </div>
            </div>
          </div>
          </div>
          <div className="bg-white space-y-2 rounded-3xl min-w-fit min-h-fit mx-4 py-1 ">
            <div className="bg-slate-200 rounded-3xl relative top-3  mx-10 h-40 ">
              <p className="p-0.5 z-10 absolute bg-white max-w-fit text-xs rounded-full">New member</p>
              <img className="absolute rounded-3xl h-40 w-[270px]"src="https://cdn.statusqueen.com/dpimages/thumbnail/Boy_Stylish__Dp_Image-2277.jpg" alt="/" />
              <div className="top-0 right-3 absolute space-x-1 p-1">
              <button className="  h-6 w-5 top-0 right-0 bg-slate-500 " >&#10084;</button>
              <button className="  h-6 w-5  bg-slate-500 " ><i class="fa-solid fa-user"></i></button>
              <button className="  h-6 w-5  bg-slate-500 " ><i class="fa fa-ellipsis-v"></i></button>
              </div>
              <p className="p-0.5 bg-white max-w-fit absolute right-0 bottom-0 text-xs rounded-full">Seen 2m ago</p>
            </div>
            <div className="px-10 space-y-2">
              <div className="flex justify-between pt-2">
                <p className="text-xl">Akshay Venu</p>
                <p className="p-1 rounded-full text-xs bg-slate-200">2h ago</p>
              </div>
              <div className="flex text-xs flex-wrap space-x-0.5 ">
                <p>30yrs</p>
                <span>|</span>
                <p>5'11</p>
                <span>|</span>
                <p>Software engineer</p>
                <span>|</span>
                <p>Malyalam</p>
                <span>|</span>
                <p>Vishvkarma</p>
                <span>|</span>
                <p>Bengaluru</p>
                <span>|</span>
                <p>karntaka</p>
              </div>
              <div className="flex justify-between m-1 ">
              <p className="bg-slate-300 rounded-full  p-2 text-xs ">Never married</p>
                <div className="flex flex-col">
                  <p className="text-xs">Match score-90%</p>
                  <span className="h-2 w-20 bg-green-400"></span>
                </div>
              </div>
              <div className="flex justify-around">
                <button className="p-1  w-1/3 rounded-full border-2 border-red-400  text-red-300 text-center ">
                  Reject
                </button>
                <button className="p-1 w-1/3 rounded-full border-2 bg-green-400   border-green-400  text-white text-center ">
                  Accept
                </button>
              </div>
            </div>
          </div>   
        </main>
      <footer className="h-20 ">
        <div className="flex justify-around  ">
        <div className="flex flex-col items-center">
          <span> <i class="fa fa-home"></i></span>
          <p className="text-xs">home</p>
        </div>
        <div className="flex flex-col items-center">
          <span> <i class="fa fa-heart"></i></span>
          <p className="text-xs">matches</p>
        </div>
        <div className="flex flex-col items-center">
          <span> <i class="fa fa-inbox"></i></span>
          <p className="text-xs">inbox</p>
        </div>
        <div className="flex flex-col items-center">
          <span> <i class="fa fa-search"></i></span>
          <p className="text-xs">search</p>
        </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
