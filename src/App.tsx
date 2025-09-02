import './App.css'
import {useEffect, useRef, useState} from "react";
import * as React from "react";

function App() {

  const [degreeState, setDegreeState] = useState<number>(0);
  const intervalReference  = useRef(-1);

  useEffect(() => {

    intervalReference.current = setInterval (() => {
        setDegreeState((degree) => degree + 1);
    },50)


    return () => {
      if(intervalReference.current) {
        clearInterval(intervalReference.current);
      }
    };

  });

  return (
    <>
      <div className="app-container" id="app-container"
           style={{'--app-linear-gradient-degree': `${degreeState}deg`} as React.CSSProperties}
      >

      </div>
    </>
  )
}

export default App
