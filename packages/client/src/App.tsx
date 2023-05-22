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
      <div className="container mx-4">
        Counter: <span className="text-3xl font-bold underline">{counter?.value ?? "??"}</span>
      </div>
      <button
        type="button"
        onClick={async (event) => {
          event.preventDefault();
          console.log("new counter value:", await increment());
        }}
      >
        Increment
      </button>
      
    </>
  );
};
