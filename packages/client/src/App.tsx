import { useComponentValue } from "@latticexyz/react";
import { useMUD } from "./MUDContext";


export const App = () => {
  const {
    components: { Counter },
    systemCalls: { increment },
    network: { singletonEntity },
  } = useMUD();

  const counter = useComponentValue(Counter, singletonEntity);

  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div className="bg-gray-800 rounded-lg p-4 text-white flex mx-5 px-5 my-1"> 
            <div className="flex flex-col">
              <span className="mx-3">World</span>
              <span className="mx-3">Rules: </span>
              
              <div className="button bg-gray-200 rounded-lg px-4  mt-5 ml-10 text-gray-800">
                <button>
                  Add Rule
                </button>
              </div>
              
            </div>
            
          </div>
          
          <div className="bg-gray-800 rounded-lg p-4 text-white flex items-center justify-center mx-5 px-5 my-1"> 
            <div className="flex flex-col">
              <span>Autonomous agents</span>
              <span>Agents: </span>

              <div className="button bg-gray-200 rounded-lg px-4  mt-5 ml-10 text-gray-800">
                <button>
                  Add Agent
                </button>
              </div>

            </div>

          </div>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-4 text-white flex items-center justify-center mx-5 px-5 my-1 w-auto"> 
          Play
        </div>
        
      </div>
      
      
    </>
  );
};
