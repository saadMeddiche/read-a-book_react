import './App.css'
import * as React from "react";
import {useEffect, useRef, useState} from "react";

function App() {
    console.log('[APP] Hello');
    const [degreeState, setDegreeState] = useState<number>(0); console.log("degreeState", degreeState);
    const intervalReference = useRef(-1);  console.log("intervalReference", intervalReference);

    useEffect(() => {
        console.log('[APP.useEffect] Mounting');

        intervalReference.current = setInterval(() => {
            setDegreeState((degree) => degree + 1);
            console.log("[APP.useEffect] intervalReference.current", intervalReference.current);
        }, 1)

        console.log("[APP.useEffect] Goodbye");

        return () => {
            console.log('[APP.useEffect] Unmounting');
            clearInterval(intervalReference.current)
        };

    }, []);

    console.log('[APP] Goodbye');
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
